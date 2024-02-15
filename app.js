let intentos=0;
let numeroSecreto= 0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto)

function verificarIntento(){
    let numeroDeUsuario= parseInt( document.getElementById('valorUsuario').value);
    //muestra en consola
    console.log(intentos)
    if(numeroDeUsuario===numeroSecreto) {
     

        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez': 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }
    else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }
        else{
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   let valorCaja= document.querySelector('#valorUsuario');
   //document.querySelector('#valorUsuario').value = '';
   valorCaja.value= '';

}

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto
    return;
}

//generar numero aleatoreo
function generarNumeroSecreto(){
  
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si el numero está incluido en la lista

    //si ya soreteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){

        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')

    }
    else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }


}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`indica el número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
 }
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja()
    //indicar mensaje de intervalo
   
    //generar el numero aleatorio
    
    //desabilitar el boton de nuevo juego
    
    // inicializar el intento
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true)
  

}

condicionesIniciales();
