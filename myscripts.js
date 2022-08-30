const gridsize = 10;


const container = document.querySelector('#Box');

let scaler = 0;

function opacity(gridsize){
    let max = 10;
    max *= (1/gridsize);
    return(max);
}

scaler = opacity(gridsize);


for(let i = 0; i < gridsize; i++){
    const zapatos = document.createElement("div");
    zapatos.setAttribute('id','Row');
    zapatos.style.display = "flex";
    zapatos.style.width = '960px';
    zapatos.style.height = '480px';
    block(zapatos);
    container.appendChild(zapatos);
}

function block(zapatos) { 
    for(let j = 0; j < gridsize; j++){
        const divTemplate = document.createElement("div");
        divTemplate.style.width = '100%';
        divTemplate.style.height = '100%';
        divTemplate.style.border = `${scaler}px solid black`;
        divTemplate.style.background = 'transparent';

        zapatos.appendChild(divTemplate);
    }
};











