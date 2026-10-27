const tabela = document.querySelector('.bodyTabelaContatos');
const modal = document.querySelector('#modalContato');
const formulario = document.querySelector('#formContato');
const mensagem = document.querySelector('#mensagem');
const erroFormulario = document.querySelector('#erroFormulario');
const botaoSalvar = document.querySelector('#salvarContato');

async function lerRespostaJson(resposta) {
    const tipoConteudo = resposta.headers.get('content-type') || '';
    if (!tipoConteudo.includes('application/json')) {
        throw new Error('A API não foi encontrada. Inicie o servidor com "node server.js" e abra http://127.0.0.1:3000.');
    }

    return resposta.json();
}

function renderizarContato(contato) {
    const linha = document.createElement('tr');

    for (const campo of ['nome', 'email', 'salario', 'estado', 'empresa', 'idade', 'sexo', 'cpf']) {
        const celula = document.createElement('td');
        celula.textContent = contato[campo] ?? '';
        linha.appendChild(celula);
    }

    tabela.appendChild(linha);
}

async function carregarDados() {
    try {
        const resposta = await fetch('/api/pessoas');
        const dados = await lerRespostaJson(resposta);
        if (!resposta.ok) {
            throw new Error(dados.erro || 'Não foi possível carregar os contatos.');
        }

        dados.forEach(renderizarContato);
    } catch (erro) {
        mensagem.textContent = erro.message;
        mensagem.classList.add('mensagem-erro');
    }
}

document.querySelector('#abrirModal').addEventListener('click', () => {
    erroFormulario.textContent = '';
    modal.showModal();
});

for (const id of ['fecharModal', 'cancelarModal']) {
    document.querySelector(`#${id}`).addEventListener('click', () => modal.close());
}

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();
    erroFormulario.textContent = '';
    botaoSalvar.disabled = true;

    const campos = new FormData(formulario);
    const contato = Object.fromEntries(campos.entries());
    contato.salario = Number(contato.salario);
    contato.idade = Number(contato.idade);

    try {
        const resposta = await fetch('/api/pessoas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contato)
        });
        const resultado = await lerRespostaJson(resposta);
        if (!resposta.ok) {
            throw new Error(resultado.erro || 'Não foi possível salvar o contato.');
        }

        renderizarContato(resultado.contato);
        formulario.reset();
        modal.close();
        mensagem.textContent = 'Contato salvo no arquivo pessoas.json.';
        mensagem.classList.remove('mensagem-erro');
    } catch (erro) {
        erroFormulario.textContent = erro.message;
    } finally {
        botaoSalvar.disabled = false;
    }
});

carregarDados();