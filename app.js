let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
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
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {  
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if ( listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{

    //Si el número generado está en la lista 

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){

asignarTextoElemento('h1', 'Juego del número secreto!');
asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;

}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Iniciar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




//TAREA 
/*console.log("Hola Mundo");
nombre = prompt("Pon tu nombre");
saludo(nombre)
numeroDoble = prompt("Ingresa tu número");
doble(numeroDoble)
numero1 = parseInt(prompt("Ingresa primer número"));
numero2 = parseInt(prompt("Ingresa segundo número"));
numero3 = parseInt(prompt("Ingresa tercer número"));
console.log(promedioNumero(numero1, numero2, numero3));
console.log(numeroMayor(numero1, numero2));
console.log(potencia(numero1))




//funciones
function saludo(nombre){
    console.log("Hola "+nombre);
}

function doble(numero){
    doblenum = parseFloat(numero*2)
    console.log(doblenum);
    return doblenum;
}

function promedioNumero(Pnum, Snum, Tnum){
    promedio = parseFloat((Pnum+Snum+Tnum)/3);
    return promedio;
}

function numeroMayor(prim, seg){
    if(prim>seg){
        num=prim;
    }else{
        num = seg;
    }
    return num;
}

function potencia(number){
    poten = number*number;
    return poten;
}
*/