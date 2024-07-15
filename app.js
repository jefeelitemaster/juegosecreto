//let titulo = document.querySelector('h1'); //variable de tipo objeto HTMLheadingElement
//titulo.innerHTML = 'Juego del número secreto'

//let parrafo = document.querySelector('p')
//parrafo.innerHTML = 'Indica un número del 1 al 10'

let numeroSecreto = 0;//generarNumeroSecreto();
//console.log(numeroSecreto)
let intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){ //realiza una acción, se define y se encapsula dentro de la función
    numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario === numeroSecreto); //igual en valor e igual en tipo de dato
    //alert('Click desde el botón');
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //operador ternario con string template
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acertó.
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario')
    //valorCaja.value = '';
}

function generarNumeroSecreto() {
    //let numeroSecreto = Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteado);
    if (listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números')
    }
    else{
        if(listaNumerosSorteado.includes(numeroGenerado)){ //si el número generado está incluido en la lista
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto'); //en html solo en eventos se invocan las funciones
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

