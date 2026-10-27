axios('pessoas.json')
.then(resposta => carregarDados(resposta.data));

function carregarDados(json){
    const bodyTabela = document.querySelector('.bodyTabelaContatos');

    for (let contato of json){
        const tr = document.createElement('tr');
       
        let td = document.createElement('td');
        td.innerHTML = contato.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.email;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.salario;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.estado;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.empresa;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.sexo;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = contato.cpf;
        tr.appendChild(td);
        bodyTabela.appendChild(tr);
    }
    const table = document.querySelector('.tabelaContatos');
    table.appendChild(bodyTabela)    ;
}

const novoDado = {
    nome:"Robson",
    email:"robson@email.com",
    salario:6500,
    estado:"MG",
    empresa:"RHIMagnesita",
    idade:45,
    sexo:"M",
    cpf:"055.064.246-39"

}
async function addDados(){
    try{
        const resposta = await axios.POST('.pessoas.json',novoDado);
        console.log('Dados Adicionados com sucesso: ',resposta.data);
    }catch(error){
        console.log('Erro ao enviar os dados: ',error);
    }
}

addDados();