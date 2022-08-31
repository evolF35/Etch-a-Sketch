let gridsize = 16;
const container = document.querySelector('#Box');

let scaler = 0;

function opacity(gridsize){
    let max = 10;
    max *= (1/gridsize);
    return(max);
}
scaler = opacity(gridsize);


let random = false;
let progressive = false;
let inputOn = false;





function Row(gridsize) {
    for(let i = 0; i < gridsize; i++){
    const zapatos = document.createElement("div");
    zapatos.setAttribute('id','Row');
    zapatos.style.display = "flex";
    zapatos.style.width = '700px';
    zapatos.style.height = '700px';
    block(zapatos);
    container.appendChild(zapatos);
}
}

function block(zapatos) { 
    for(let j = 0; j < gridsize; j++){
        const divTemplate = document.createElement("div");
        divTemplate.setAttribute('class','unit');
        divTemplate.style.width = '100%';
        divTemplate.style.height = '100%';
        divTemplate.style.border = `${scaler}px solid black`;
        divTemplate.style.background = 'transparent';

        divTemplate.addEventListener("mouseover", function handleMouseOver(){
            divTemplate.style.background = 'black';
            if(random === true){
                divTemplate.style.background = `#${randomcolor()}`;
            }
            if(inputOn == true){
                divTemplate.style.background = `${inputColor}`;
            }
        });


        zapatos.appendChild(divTemplate);
    }
};

Row(gridsize);

const chooseButton = document.querySelector('#chooseSize');

chooseButton.addEventListener('click',() =>{
    const boxes = document.querySelectorAll('#Row');

    boxes.forEach(box => {
      box.remove();
    });

    let size = prompt("Input a number between 1-100");
    gridsize = size;
    scaler = opacity(gridsize);
    Row(gridsize);
});





function randomcolor(){

    let color = "";
    for(let i = 0; i < 6; i++){
        let r = `${Math.floor(Math.random() * 10)}`;
        color += r;
        }
    return(color);
}

const randombutton = document.querySelector('#randomColor');

randombutton.addEventListener('click',() =>{
    if(random === false){
        random = true;
        document.getElementById('randomColor').innerText = "Random Color Mode: On";
    }
    else{
        random = false;
        document.getElementById('randomColor').innerText = "Random Color Mode: Off";
    }

    
});

let inputColor = "#000000";

const pickColorButton = document.querySelector('#pickColor');

pickColorButton.addEventListener('click',() =>{
    if(inputOn == false){
    inputOn = true;
    inputColor = prompt("Input a hex color");
    document.getElementById('pickColor').innerText = `Input Color Mode: ${inputColor}`;
}
    else{
        inputOn = false;
        document.getElementById('pickColor').innerText = `Input Color Mode: Off`;
    }
    

});
