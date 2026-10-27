const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

// Mantém os caminhos dos arquivos ancorados nesta pasta, independentemente
// do diretório de onde o comando "node server.js" foi executado.
const diretorioProjeto = __dirname;
const arquivoPessoas = path.join(diretorioProjeto, 'pessoas.json');
const limiteCorpo = 16 * 1024;
const tiposArquivo = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8'
};

// Permite responder erros esperados da requisição com o status HTTP adequado.
class ErroRequisicao extends Error {
    constructor(status, mensagem) {
        super(mensagem);
        this.status = status;
    }
}

function responderJson(resposta, status, dados) {
    resposta.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    resposta.end(JSON.stringify(dados));
}

// Lê o corpo enviado pelo formulário, limitando seu tamanho antes de convertê-lo
// de JSON para objeto JavaScript.
function lerCorpoJson(requisicao) {
    return new Promise((resolve, reject) => {
        let corpo = '';
        requisicao.setEncoding('utf8');
        requisicao.on('data', (trecho) => {
            corpo += trecho;
            if (Buffer.byteLength(corpo, 'utf8') > limiteCorpo) {
                reject(new ErroRequisicao(413, 'O envio excede o tamanho permitido.'));
                requisicao.resume();
            }
        });
        requisicao.on('end', () => {
            try {
                resolve(JSON.parse(corpo));
            } catch {
                reject(new ErroRequisicao(400, 'O corpo da requisição deve ser um JSON válido.'));
            }
        });
        requisicao.on('error', reject);
    });
}

// Valida e normaliza os campos do contato antes de permitir que sejam salvos.
function validarContato(dados) {
    if (!dados || typeof dados !== 'object' || Array.isArray(dados)) {
        throw new ErroRequisicao(400, 'Envie os dados de um contato.');
    }

    const camposTexto = ['nome', 'email', 'estado', 'empresa', 'sexo', 'cpf'];
    const contato = {};

    for (const campo of camposTexto) {
        if (typeof dados[campo] !== 'string') {
            throw new ErroRequisicao(400, `O campo "${campo}" deve ser texto.`);
        }
        contato[campo] = dados[campo].trim();
    }

    for (const campo of ['nome', 'email', 'estado', 'empresa', 'cpf']) {
        if (!contato[campo]) {
            throw new ErroRequisicao(400, `Preencha o campo "${campo}".`);
        }
    }

    if (contato.nome.length > 120 || contato.empresa.length > 120 ||
        contato.email.length > 254 || contato.estado.length > 80 ||
        contato.cpf.length > 20 || contato.sexo.length > 20) {
        throw new ErroRequisicao(400, 'Um ou mais campos excedem o tamanho permitido.');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contato.email)) {
        throw new ErroRequisicao(400, 'Informe um email válido.');
    }

    if (typeof dados.salario !== 'number' || !Number.isFinite(dados.salario) || dados.salario < 0) {
        throw new ErroRequisicao(400, 'Informe um salário válido, maior ou igual a zero.');
    }
    if (!Number.isInteger(dados.idade) || dados.idade < 0 || dados.idade > 150) {
        throw new ErroRequisicao(400, 'Informe uma idade válida entre 0 e 150.');
    }

    contato.salario = dados.salario;
    contato.idade = dados.idade;
    return contato;
}

// Serializa gravações para que envios simultâneos não sobrescrevam contatos.
let filaGravacao = Promise.resolve();

function salvarContato(contato) {
    const operacao = filaGravacao.then(async () => {
        // Lê a lista atual e grava o novo contato mantendo a formatação do arquivo.
        const pessoas = JSON.parse(await fs.readFile(arquivoPessoas, 'utf8'));
        if (!Array.isArray(pessoas)) {
            throw new Error('O arquivo pessoas.json deve conter uma lista.');
        }

        pessoas.push(contato);
        await fs.writeFile(arquivoPessoas, `${JSON.stringify(pessoas, null, 2)}\n`, 'utf8');
    });
    filaGravacao = operacao.catch(() => {});
    return operacao;
}

// Serve a página e seus arquivos estáticos, bloqueando caminhos fora do projeto.
async function servirArquivo(caminhoUrl, resposta) {
    const caminhoRelativo = caminhoUrl === '/' ? 'index.html' : caminhoUrl.slice(1);
    const caminhoArquivo = path.resolve(diretorioProjeto, caminhoRelativo);
    if (!caminhoArquivo.startsWith(`${diretorioProjeto}${path.sep}`)) {
        responderJson(resposta, 404, { erro: 'Arquivo não encontrado.' });
        return;
    }

    try {
        const conteudo = await fs.readFile(caminhoArquivo);
        const tipo = tiposArquivo[path.extname(caminhoArquivo)] || 'application/octet-stream';
        resposta.writeHead(200, { 'Content-Type': tipo });
        resposta.end(conteudo);
    } catch (erro) {
        if (erro.code === 'ENOENT' || erro.code === 'EISDIR') {
            responderJson(resposta, 404, { erro: 'Arquivo não encontrado.' });
            return;
        }
        throw erro;
    }
}

// Roteia as chamadas da API e as requisições da página.
const servidor = http.createServer(async (requisicao, resposta) => {
    try {
        const url = new URL(requisicao.url, 'http://localhost');

        // Retorna os contatos atuais para preencher a tabela.
        if (url.pathname === '/api/pessoas' && requisicao.method === 'GET') {
            const pessoas = JSON.parse(await fs.readFile(arquivoPessoas, 'utf8'));
            responderJson(resposta, 200, pessoas);
            return;
        }

        // Valida e persiste o contato enviado pelo formulário.
        if (url.pathname === '/api/pessoas' && requisicao.method === 'POST') {
            const contato = validarContato(await lerCorpoJson(requisicao));
            await salvarContato(contato);
            responderJson(resposta, 201, { contato });
            return;
        }

        // Para outras requisições GET, entrega a página ou um arquivo estático.
        if (requisicao.method === 'GET') {
            await servirArquivo(decodeURIComponent(url.pathname), resposta);
            return;
        }

        responderJson(resposta, 405, { erro: 'Método não permitido.' });
    } catch (erro) {
        // Diferencia erros de entrada inválida de falhas inesperadas do servidor.
        if (erro instanceof ErroRequisicao) {
            responderJson(resposta, erro.status, { erro: erro.message });
            return;
        }
        console.error('Erro ao processar a requisição:', erro);
        responderJson(resposta, 500, { erro: 'Erro interno ao processar a requisição.' });
    }
});

// Usa a porta definida no ambiente ou 3000 e aceita conexões somente nesta máquina.
const porta = Number(process.env.PORT) || 3000;
servidor.listen(porta, '127.0.0.1', () => {
    console.log(`Servidor disponível em http://127.0.0.1:${porta}`);
});
