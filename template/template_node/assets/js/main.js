const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method ,obj.url,true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300){
            obj.success(xhr.responseText);
        }else{
            obj.error(xhr.statusText);
        }
    });
};

document.addEventListener('click', e => {
    const link = e.target instanceof Element
    ? e.target.closest('a')
    : null;
    //const el = e.target;
    //const tag = el.tagName.toLowerCase();
    
    
    if (link){
        e.preventDefault();
        carregaPagina(link);
    }
});

function carregaPagina(el){
    const href = el.getAttribute('href');
    request({
        method:'GET',
        url: href,
        success(response){
            carregaResultado(response);
        },
        error(errorText){
            console.log(errorText)
        }
    });
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}





/* Códigos de requisição
https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Reference/Status*/