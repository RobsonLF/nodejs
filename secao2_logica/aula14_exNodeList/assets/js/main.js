const paragrafos = document.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const bgcolorBody = estilosBody.backgroundColor;

for (let p of paragrafos){
    p.style.backgroundColor = bgcolorBody;
    p.style.color = 'gray';
}