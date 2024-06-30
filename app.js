let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesInciales(){
    asignarTextoElemento('p','Indica un número del 1 al 10');
    asignarTextoElemento('h1', 'Juego del número secreto');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesInciales();
    document.querySelector('#reiniciar').setAttribute('disable','true');
}

condicionesInciales();