async function carregarArquivos(){
    const conteudo = document.getElementById("conteudo");
    if (!conteudo) return;

    const resposta = await fetch("data/notes.json");
    const arquivos = await resposta.json();
    
    for (const arquivo of arquivos){
        //console.log("Título:", arquivo.titulo);
        //console.log("Categoria:", arquivo.categoria);
        //console.log("Arquivo:", arquivo.arquivo);        
        const respostaMarkdown = await fetch(`notes_md/${arquivo.arquivo}`);
        const markdown = await respostaMarkdown.text();
        const html = marked.parse(markdown);
        conteudo.innerHTML += html;
        //console.log(markdown);
    }    
}

async function carregarResumoCategorias(){
    const dadosjson = await fetch("data/notes.json");
    const arquivos = await dadosjson.json();

    const categorias = arquivos.reduce((resumo, arquivo) => {
        const categoria = arquivo.categoria.toLowerCase();
        let categoriaResumo;

        if (categoria === "banco de dados") {
            categoriaResumo = resumo.banco;
        } else if (categoria === "javascript") {
            categoriaResumo = resumo.javascript;
        } else if (categoria === "html" || categoria === "css") {
            categoriaResumo = resumo.htmlcss;
        }

        if (categoriaResumo) {
            categoriaResumo.quantidade++;
            if (arquivo.data_modificacao > categoriaResumo.data) {
                categoriaResumo.data = arquivo.data_modificacao;
            }
        }

        return resumo;
    }, {
        banco: { quantidade: 0, data: "" },
        javascript: { quantidade: 0, data: "" },
        htmlcss: { quantidade: 0, data: "" }
    });

    document.getElementById("qtdbanco").textContent = categorias.banco.quantidade;
    document.getElementById("qtdjavascript").textContent = categorias.javascript.quantidade;
    document.getElementById("qtdhtmlcss").textContent = categorias.htmlcss.quantidade;
    document.getElementById("qtdredes").textContent = categorias.htmlcss.quantidade;
    document.getElementById("bancodate").textContent = categorias.banco.data;
    document.getElementById("javascriptdate").textContent = categorias.javascript.data;
    document.getElementById("htmldate").textContent = categorias.htmlcss.data;
    document.getElementById("redesdate").textContent = categorias.htmlcss.data;
}
//carregarArquivos();
carregarResumoCategorias();

/*
    const resposta = await fetch("data/notes.json");
    const arquivos = await resposta.json();

    console.log(arquivos);

    for (const arquivo of arquivos){
        const respostaMarkdown = await fetch(`notes_md/${arquivo.arquivo}`);
    };
    const markdown = await respostaMarkdown.text();
    console.log(markdown);
*/