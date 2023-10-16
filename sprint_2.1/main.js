//                         S2.1. EJERCICIOS BÁSICOS


// 1.1 ARROW FUNCTIONS

// -------------------EJERCICIO 1

suma = (a, b) => a + b;
console.log(`1.1.1- El resultado de la suma es: ${suma(6, 9)}`);

// -------------------EJERCICIO 2

numRandom = () => Math.floor(Math.random() * (100 + 1));
console.log(`1.1.2- El número random es: ${numRandom()}`);

// -------------------EJERCICIO 3

class person {
    constructor(name) {
        this.name = name;
        this.greet = () => {
            console.log(`1.1.3- Hola, ${this.name}!`);
        };
    }
}
const hello = new person("Pedro");
hello.greet();

// -------------------EJERCICIO 4

const numbersArray = [2, 4, 6, 8, 10];

const printNumbers = (numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(`1.1.4- ${numbers[i]}`);
    }
};

printNumbers(numbersArray);

// -------------------EJERCICIO 5

retardo = () => console.log("1.1.5- Ejercicio con 3 segundos de retraso.");

setTimeout(retardo, 3000);

// 1.2 OPERADORES TERNARIOS

// -------------------EJERCICIO 1

// let edad = 18;

(function apto(edad) {
    edad >= 18 ? console.log(`1.2.1- Enhorabuena! Con ${edad} años ya puedes conducir!`)
        : console.log(`1.2.1- Lo sentimos. Con tus ${edad} añitos todavía no puedes conducir.`);
})(18);

// Funcion autoejecutable

// apto(edad);

// -------------------EJERCICIO 2

let num1 = 83;
let num2 = 45;

num1 > num2 ? console.log(`1.2.2- ${num1} es mayor que ${num2}.`) : console.log(`1.2.2- ${num1} es menor que ${num2}.`);

// -------------------EJERCICIO 3

let num = 3;

(num === 0) ? console.log(`1.2.3- El número ${num} es cero`) :
    (num % 2 === 0) ? console.log(`1.2.3- El número ${num} es par`) :
        console.log(`1.2.3- El número ${num} es impar`);


function encontrarMaximo(a, b, c) {
    const maximo = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
    return maximo;
}

const resultado = encontrarMaximo(8, 36, 26);
console.log(`1.2.3- El valor máximo es: ${resultado}`);

// -------------------EJERCICIO 4

const parOImparArray = [2, 576, 1001, 47, 10];

function parOImpar() {

    for (let i = 0; i < parOImparArray.length; i++) {

        (parOImparArray[i] % 2 === 0) ? console.log(`1.2.4- El número ${parOImparArray[i]} es par`) :
            console.log(`1.2.4- El número ${parOImparArray[i]} es impar`);

    }
}
parOImpar(parOImparArray);

// 1.3 CALLBACKS

// -------------------EJERCICIO 1

function procesar(numero, callback1) {
    callback1(numero);
}

function miCallback1(numero) {
    console.log(`1.3.1- Callback 1/Resultado: ${numero}`);
}

procesar(42, miCallback1);

// -------------------EJERCICIO 2

function calculadora(number1, number2, callback2) {
    callback2(number1, number2);
}

function miCallback2(number1, number2) {
    console.log(`1.3.2- Callback 2/Resultado suma: ${number1 + number2}`);
}

calculadora(5, 7, miCallback2);

// -------------------EJERCICIO 3

function esperarYSaludar(nombre, callback3) {
    setTimeout(function () {
        callback3(nombre);

    }, 2000);
}

function miCallback3(nombre) {
    console.log(`1.3.3- Callback 3: Hola ${nombre}`);
}

esperarYSaludar("Samanta", miCallback3);

// -------------------EJERCICIO 4

const arrayCallback = [2, 56, 78, 93, 101];

function procesarElementos(arrayCallback, callback4) {
    callback4(arrayCallback);
}

function miCallback4(arrayCallback) {
    for (let i = 0; i < arrayCallback.length; i++) {
        console.log(`1.3.4- Callback 4: ${arrayCallback[i]}`);
    }
}
procesarElementos(arrayCallback, miCallback4);

// -------------------EJERCICIO 5

function procesarCadena(cadena, callback5) {
    callback5(cadena);
}

function miCallback5(cadena) {
    console.log(`1.3.5- Callback 5: ${cadena.toUpperCase()}`);
}

procesarCadena("abcdefg", miCallback5);

// 1.4 REST & SPREAD OPERATORS

// -------------------EJERCICIO 1

const arraySpread1 = [2, 45, 78, 2023];
const arraySpread2 = [4, 90, 83, 2054];

const spread1Resultado = [...arraySpread1, ...arraySpread2];

console.log(`1.4.1- SPREAD 1- Suma 2 arrays: ${spread1Resultado}`);

// -------------------EJERCICIO 2

function sumaRest(...numsRest) {
    let total = 0;
    for (const arg of numsRest) {
        total += arg;
    }
    return total;
}
console.log(`1.4.2- REST 1- Suma de números indetermidados: ${sumaRest(2, 6, 78, 90)}`);


// -------------------EJERCICIO 3

const objetoSpread1 = {
    color: "azul",
    tamaño: 178,
};

const objetoSpread2 = { ...objetoSpread1 };

objetoSpread2.tamaño = 150;

console.log("1.4.3- SPREAD 2- objetoSpread1: ", objetoSpread1);
console.log("1.4.3- SPREAD 2- objetoSpread2: ", objetoSpread2);

// -------------------EJERCICIO 4

const arrayDestructuring = [2, 45, 83, 2023, 209, 3456];

const [elemento1, elemento2, ...restoElementos] = arrayDestructuring;

console.log("1.4.4- REST 2- Primer elemento:", elemento1);
console.log("1.4.4- REST 2- Segundo elemento:", elemento2);
console.log("1.4.4- REST 2- Resto de elementos:", restoElementos);

// -------------------EJERCICIO 5

function ejercicio5(argmt1, argmt2, argmt3) {
    console.log(`1.4.5- SPREAD 3- Argumento 1: ${argmt1}`);
    console.log(`1.4.5- SPREAD 3- Argumento 1: ${argmt2}`);
    console.log(`1.4.5- SPREAD 3- Argumento 1: ${argmt3}`);
}

const array5 = [2, 45, 83];

ejercicio5(...array5);

// -------------------EJERCICIO 6

const vehiculo1 = {
    color: "azul",
    tamaño: "gasoil",
};

const vehiculo2 = {
    sabor: "salado",
    formato: "6-pack",
}

const vehiculoSpread = { ...vehiculo1, ...vehiculo2 };

console.log("1.4.6- SPREAD 4- Fusión de objetos: ", vehiculoSpread);

// 1.5 ARRAY TRANSFORMATIONS

// -------------------EJERCICIO 1

const arrayMap = [1, 2, 3, 4];

const cuadrado = arrayMap.map(function (x) {
    return x * x;
});

console.log(`1.5.1- Array al cuadrado: ${cuadrado}`);

// -------------------EJERCICIO 2

const arrayFilter = [1, 2, 3, 4];

const filtrarPares = arrayFilter.filter(function (numPar) {
    return numPar % 2 === 0;
})

console.log(`1.5.2- Filtrar números pares: ${filtrarPares}`);

// -------------------EJERCICIO 3

const arrayFind = [1, 10, 8, 11];

const encontrar = arrayFind.find(function (elemento) {
    return elemento > 10
})

console.log(`1.5.3- Encontrar primer número mayor de 10: ${encontrar}`);

// -------------------EJERCICIO 4

const arrayReduce = [13, 7, 8, 21];

const sumaReduce = arrayReduce.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(`1.5.4- Suma total de los elementos: ${sumaReduce}`);

// -------------------EJERCICIO 5

const arrayEjercicio5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

function calcularSuma(array) {
    return array.filter(function (num) {
        return num >= 10;
    }).map(function (num) {
        return num * 2;
    }).reduce(function (acumulador, num) {
        return acumulador + num;
    }, 0);
}

const resultados = calcularSuma(arrayEjercicio5);

console.log(`1.5.5- Resultado de varios métodos: ${resultados}`);

// -------------------EJERCICIO 6

const arrayEjercicio6 = [11, 12, 13, 14];

const todos = arrayEjercicio6.every(numero => numero > 10);

const algunos = arrayEjercicio6.some(numero => numero > 10);

console.log("1.5.6- Son todos mayores que 10?", todos);
console.log("1.5.6- Son algunos mayores que 10?", algunos);

// 1.6 ARRAY LOOPS

// -------------------EJERCICIO 1

const arrayLoops1 = ["Anna", "Bernat", "Clara"];

arrayLoops1.forEach((element) => console.log(`1.6.1- ForEach: ${element}`));

// -------------------EJERCICIO 2

const arrayLoops2 = ["Anna", "Bernat", "Clara"];

for (let value of arrayLoops2) {
    value += 1;
    console.log(`1.6.2- For-of: ${value}`);
}

// -------------------EJERCICIO 3

const arrayLoops3 = [1, 2, 3, 4, 5, 6];
const arrayLoopsPares = [];

for (let i = 0; i < arrayLoops3.length; i++) {
    if (arrayLoops3[i] % 2 === 0) {
        arrayLoopsPares.push(arrayLoops3[i]);
    }
}

console.log("1.6.3- Nuevo array con números pares:", arrayLoopsPares);

// -------------------EJERCICIO 4

const objetoLoop1 = {
    nombre: "Ona",
    edad: 25,
    ciudad: "Barcelona",
}

for (const propiedad in objetoLoop1) {
    console.log(`1.6.4- For-in: ${propiedad}:${objetoLoop1[propiedad]}`);
}

// -------------------EJERCICIO 5

const arrayLoops4 = [1, 2, 3, 4, 5, 6];

for (const value of arrayLoops4) {
    console.log(`1.6.5- For-of con break: ${value}`);
    if (value === 5) {
        break;
    }
}

// -------------------EJERCICIO 6

const arrayLoops5 = ["Anna", "Bernat", "Clara"];
const iterator = arrayLoops5.entries();

for (let value of iterator) {
    console.log(`1.6.6- For-of Índex: ${value}`)
}

// 1.7 PROMISES & ASYNC/AWAIT

// -------------------EJERCICIO 1

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola mundo!');
    }, 2000);
});


// -------------------EJERCICIO 2

promesa1.then(resultado => {
    console.log(`1.7.2- PROMISE con 2 segundos de retardo: ${resultado}`);
});

// -------------------EJERCICIO 3

function miPromesa(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hola') {
                resolve('Saludos');
            } else {
                reject('La promesa ha sido rechazada');
            }
        }, 2000);
    });
}

miPromesa('Hola').then(resultado => {
    console.log(`1.7.3- PROMISE aceptada: ${resultado}`);
})
    .catch(error => {
        console.log(`1.7.3- PROMISE rechazada: ${error}`);
    });

// -------------------EJERCICIO 4

function resolveAfter2seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    const x = await resolveAfter2seconds(promesa1);
    console.log(`1.7.4- ASYNC/AWAIT devuelve Promesa: ${x}`);
}

f1();

// -------------------EJERCICIO 5

async function f2() {
    try {
        const x = await resolveAfter2seconds(promesa1);
        console.log(`1.7.5- TRY/CATCH. Es correcto y devuelve Promesa: ${x}`);
    } catch (error) {
        console.error(`1.7.5- TRY/CATCH- Se ha producido un error: ${error}`);
    }
}

f2();

// -------------------EJERCICIO 6

const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hola mundo!');
    }, 2000);
});

const promesa3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Bienvenid@s Programadr@s!');
    }, 3000);
});

Promise.all([promesa2, promesa3]).then((values) => {
    console.log(`1.7.6- Promise.all: ${values}`);
});