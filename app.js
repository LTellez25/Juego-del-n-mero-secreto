let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('p','Indica un número del 1 al 10');
asignarTextoElemento('h1', 'Juego del número secreto');