console.log("hola mundo");

/** Declaración de funciones  */
function cruzarCalle() {
  // Semáforo
  let color = prompt("Introduzca color");

  if (color == "green") {
    console.log("Pasar");
  } else if (color == "yellow") {
    console.log("Pasar rápido");
  } else if (color == "blue") {
    console.log("Pasar saltando");
  } else {
    // Valor por defecto ---> ROJO
    console.log("No pasar");
  }
}

function cruzarCalle2(color) {
  // Semáforo

  if (color == "green") {
    console.log("Pasar");
  } else if (color == "yellow") {
    console.log("Pasar rápido");
  } else if (color == "blue") {
    console.log("Pasar saltando");
  } else {
    // Valor por defecto ---> ROJO
    console.log("No pasar");
  }
}

function cruzarCalleSwitch() {
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
  for (let i = 1996; i <= 2022; i++) {
    // N= 26

    if (i % 2 == 0) {
      //Pares
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
  while (i <= 2022) {
    // condición de parada

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
  } while (i < 10);
}

/*
Para 8
(num % 2 == 0 && num != 20 && num != 0 && !(num % 8 == 0 || num % 6 == 0))
(true && true && true && !(true || false))
((true && true && true) && !true)
(true && false) ---> false
*/

/*
Para 5
(num % 2 == 0 && num != 20 && num != 0 && !(num % 8 == 0 || num % 6 == 0))
(false && true && true && !(false || false))
((false && true && true) && !false)
(false && true) ---> false
*/

//Si es mult2 y distinto 20 y distinto 0 y además no es mult8 o ni de mult6
function ejemploCondicionales(num) {
  if (
    num % 2 == 0 &&
    num != 20 &&
    num != 0 &&
    !(num % 8 == 0 || num % 6 == 0)
  ) {
    console.log("Número cumple las restricciones: " + num);
  } else {
    console.log("Número NO cumple las restricciones: " + num);
  }
}

function ejemploArray() {
  // posición 0 a N-1 --> N es data.length
  let data = [
    1,
    "hola",
    2.2,
    true,
    [2, 3, 5],
    [
      [5, 3],
      [2, 7],
      [1, 10],
    ],
  ];
  console.log(data[1]); //"hola"
  console.log(data[data.length - 1]); //[[5,3],[2,7],[1,10]]
  console.log(data[4][1]);
  console.log(data[5][1][1]);

  const fruits = ["Banana", "Orange", "Apple", "Strawberry", "Tangerine"];
  // N = 5 --> fruits.length
  // 0...N-1 --> 0...4
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }

  // Con While
  let i = 0;
  console.log("Con While***");
  while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
  }

  //Sólo para arrays For-each
  fruits.forEach(function (fruit) {
    console.log(fruit);
  });

  // Añadir elementos
  fruits.push("Mango");
  fruits.push("Rabsperry", "Grapes", "Melon");

  console.log(fruits);

  // Borrar elementos
  //ultimo
  fruits.pop();
  console.log(fruits);

  // Cambiar un elemento
  fruits[0] = "Raspberry";
  console.log(fruits);

  // Convierte a string
  console.log(fruits.toString());

  // Ordena con método de array sort()
  // Nota: para entrevistas de trabajo te pueden pedir que lo hagas sin sort(). Revisar algoritmos de ordenación.
  console.log(fruits.sort());
}
// Función resta
function calculaResta(a, b) {
  // Lógica que necesite la función
  //...
  //...
  let resultado = NaN; // Not a Number
  if (typeof a == "number" && typeof b == "number") {
    resultado = a - b;
  }
  return resultado; // resta
}

let result_resta = calculaResta(2, 3); // Llamada a función
console.log(`El resultado de la resta es: ${result_resta}`); // Imprime resultado

// Con función flecha
const calculaResta2 = (a, b) => {
  // Lógica que necesite la función
  //...
  //...
  let resultado = NaN; // Not a Number
  if (typeof a == "number" && typeof b == "number") {
    resultado = a - b;
  }
  return resultado; // resta
};

let result_resta2 = calculaResta2(2, 3); // Llamada a función
console.log(`El resultado de la resta es: ${result_resta2}`); // Imprime resultado

function sum(a, b) {
  //Varias
  //Líneas de
  //código
  //..
  return a + b;
}
const res = sum(1, 3);
console.log("El resultado fue " + res);
console.log("El cuadrado del resultado es: " + res ** 2);

// Función flecha
const sum2 = (a, b) => a + b;
const res2 = sum2(1, 3);
console.log("El resultado fue " + res2);
console.log("El cuadrado del resultado es: " + res2 ** 2);

function createUser(name) {
  if (name.length > 0 && name.length < 10) {
    return "usuario creado: " + name;
  } else {
    return "error nombre usuario";
  }
}

console.log("Msj: " + createUser("Alex"));
console.log("Msj: " + createUser("Guillermu"));
console.log("Msj: " + createUser("Albertu"));
console.log("Msj: " + createUser("Xavier"));
console.log("Msj: " + createUser("Fulgen"));
console.log("Msj: " + createUser("Fddddddddddddddddddddddddd"));

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
// Otra variante, pero mejor la anterior ( es muy raro poner el nombre de variable dentro del objeto)
let person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return person["firstName"] + " " + person["lastName"];
  },
};

const person3 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: () => this.firstName + " " + this.lastName,
};

// Con this + => no se puede acceder a los valores
let person4 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: () => this.firstName + " " + this.lastName,
};

person.fullName();

function ejemploObjetos() {
  let cars = [
    { type: "Fiat", model: "500", color: "white" },
    { type: "Opel", model: "Corsa", color: "Blue" },
    { type: "Peugeot", model: "609", color: "green" },
  ];
  //cars[1]['model']
  //cars[1].model = "Zafira"

  let cars2 = [
    { type: "Fiat", model: "500", color: "white", "max-tara": 1500 },
    { type: "Opel", model: "Corsa", color: "Blue", "max-tara": 1600 },
    { type: "Peugeot", model: "609", color: "green", "max-tara": 1700 },
  ];
  //cars2[1]["max-tara"];
  // cars[1].max-tara // Error

  let car = {
    type: "Fiat",
    model: "500",
    color: "white",
    "max-tara": 1700,
    speed: 0,
    drive: function (newSpeed) {
      this.speed = newSpeed;
      console.log("Estás conduciendo a:" + this.speed);
    },
    getInfo: function () {
      console.log(this.type, this.model, this.color, this["max-tara"]);
    },
  };
}


//car.drive(100);


function ejemploString() {

    let cadena = "hola que tal te va la vida";

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== " ") {
            console.log(cadena[i]);
        }
    }
    cadena.slice(7, 13); // 7,13-1 --> "e tal ""

    cadena.slice(-12);
    let email = "hola@gmail.com"
    email.slice(-4)


    //Reemplazar parte de un string
    let message = "hola que tal";
    let arrMess = message.split(" ");
    arrMess[0] = 'adios';
    arrMess.join(" ");
}

/* Llamada a las funciones/ejecución de funciones*/
//cruzarCalle();
//console.log("Ejecuta cruzarCalle2:");
//cruzarCalle2("yellow");
//cruzarCalleSwitch();
//encenderPC();
//printYears();
//ejemploWhile()
//comprobarNombre();
//ejemploDoWhile();
//ejemploCondicionales(4);
//ejemploCondicionales(14);
//ejemploCondicionales(5);
//ejemploCondicionales(10);
//ejemploArray();
