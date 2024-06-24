function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoUsuario(){
    
}

asignarTextoElemento('p','Indica un número del 1 al 10');
asignarTextoElemento('h1', 'Juego del número secreto');