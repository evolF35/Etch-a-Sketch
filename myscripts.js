let gridsize = 10;
const container = document.querySelector('#Box');

let scaler = 0;

function opacity(gridsize){
    let max = 10;
    max *= (1/gridsize);
    return(max);
}
scaler = opacity(gridsize);

function Row(gridsize) {
    for(let i = 0; i < gridsize; i++){
    const zapatos = document.createElement("div");
    zapatos.setAttribute('id','Row');
    zapatos.style.display = "flex";
    zapatos.style.width = '960px';
    zapatos.style.height = '960px';
    block(zapatos);
    container.appendChild(zapatos);
}
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

Row(gridsize);

const chooseButton = document.querySelector('#chooseSize');

chooseButton.addEventListener('click',() =>{
    const boxes = document.querySelectorAll('#Row');
1
    boxes.forEach(box => {
      box.remove();
    });

    let size = prompt("Input a number between 1-100");
    gridsize = size;
    scaler = opacity(gridsize);
    Row(gridsize);
});






