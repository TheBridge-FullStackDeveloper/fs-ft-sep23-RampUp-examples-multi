console.log("hola mundo");

/** Declaración de funciones  */
function cruzarCalle(){
    // Semáforo
    let color = prompt("Introduzca color");

    if (color == "green") {
        console.log("Pasar");

    } else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto ---> ROJO
        console.log("No pasar");
    }
}

function cruzarCalle2(color){
    // Semáforo

    if (color == "green") {
        console.log("Pasar");

    } else if(color == "yellow"){
        console.log("Pasar rápido");
    }
    else if(color == "blue"){
        console.log("Pasar saltando");
    }
    else { // Valor por defecto ---> ROJO
        console.log("No pasar");
    }
}

function cruzarCalleSwitch(){
    // Semáforo
    let color = prompt("Introduzca color");

    switch (color) {
        case "green":
            console.log("Green: Pasar");
            break;

        case "yellow":
            console.log("Yellow: Pasar rápido");
            break;

        case "blue":
            console.log("Pasar saltando");
            break;
    
        default:
            console.log("No pasar");
            break;
    }
}

function encenderPC() {
    // 3 condiciones --> green,yellow,red
    let option = prompt("Introduzca opción");

    switch (option) {
        case "reset":
            console.log("F.Reinicia sistema");
            // lógica de reinicio sistema
        case "start":
            console.log("F.Enciende PC");
        case "login":
            console.log("F.Loguearse en el sistema");
            break;

        default:
            console.log("Error de PC");
            break;
    }
}

// 0,1,2....9 -> N=10
// 0....N-1
/*
for (let i = 0; i < 10; i++) { //N = 10
    console.log("El número es: "+i);
}

for (let i = 0; i <= 10; i++) { // N = 11
    console.log("El número es: "+i);
}

for (let i = 0; i<11; i++) { // N = 11
    console.log("El número es: "+i);
}

for (let i = 1; i<=9; i++) { // N = 9
    console.log("El número es: "+i);
}
*/

function printYears() {
    for (let i = 1996; i <= 2022; i++) { // N= 26

        if (i % 2 == 0) { //Pares
            continue; // Como un "break" sólo para iteración actual
        }

        if (i > 2011) {
            break;
        }
        console.log("Año " + i);
    }
}

function ejemploWhile() {

    let i = 1996; // variable de bucle
    while (i <= 2022) { // condición de parada

        if (i % 2 == 0) {
            i++;
            continue;
        }

        if (i > 2011) {
            break;
        }

        console.log("Año " + i);

        i++; // incremento variable de bucle. Si lo comentas, bucle infinito
    }
}
// Bucle infinito
/*
while(true){
    console.log("hola");
    let mensaje = prompt("introduce algo");
    if(mensaje.length > 0){ // para ver si el mensaje tiene algo
        console.log("Gracias. has enviado: "+mensaje);
        break; // rompe bucle
    }else{
        console.log("Mo enviaste nada");
    }
}
*/

function comprobarNombre() {
    let intentos = 0;
    while (intentos < 3) {
        let nombre = prompt("introduce nombre");
        if (nombre != "") {
            console.log("Nombre: " + nombre);
            break;
        }

        intentos++;
    }
}

//1....N veces
function ejemploDoWhile() {
    i = 1;
    let text = "";
    do {
        text += "The number is " + i + "\n"; // += --> concatena texto
        console.log(text);
        i++;
    }
    while (i < 10);
}


/* Llamada a las funciones/ejecución de funciones*/ 
//cruzarCalle();
//console.log("Ejecuta cruzarCalle2:");
//cruzarCalle2("yellow");
//cruzarCalleSwitch();
//encenderPC();
//printYears();
//ejemploWhile()
//comprobarNombre()
ejemploDoWhile()