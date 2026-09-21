async function carregarArquivos(){
    const resposta = await fetch("data/notes.json");
    const arquivos = await resposta.json();
    
    for (const arquivo of arquivos){
        //console.log("Título:", arquivo.titulo);
        //console.log("Categoria:", arquivo.categoria);
        //console.log("Arquivo:", arquivo.arquivo);        
        const respostaMarkdown = await fetch(`notes_md/${arquivo.arquivo}`);
        const markdown = await respostaMarkdown.text();
        const html = marked.parse(markdown);
        document.getElementById("conteudo").innerHTML = html;
        //console.log(markdown);
    }
    
}

carregarArquivos();

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