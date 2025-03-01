// Desafío de programación #11: Calcula el promedio de todos los números en un array de números.

function calcularPromedio(numeros) {
    let sumaTotal = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    return sumaTotal / numeros.length;
}

//const NUMEROS = [8, 10, 9, 6];
//const promedio = calcularPromedio(NUMEROS);

//console.log(`Notas: ${NUMEROS} y tu promedio es de ${promedio}`);

// Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos

function selectorDeNumerosPrimos(numeros) {
    const  NUMEROS_SELECCIONADOS = [];
    const NUM_NEUTRO = 0;

    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] > NUM_NEUTRO){
            NUMEROS_SELECCIONADOS.push(numeros[i]);
        }
    }

    return NUMEROS_SELECCIONADOS;
}

//const NUMEROS = [-10, 4, -64, 4, 11, 74, 45, -287, 0, 7];
//const NUMEROS_POSITIVOS = selectorDeNumerosPrimos(NUMEROS);

//console.log(`${NUMEROS} - Los positivos son: ${NUMEROS_POSITIVOS}`);

// Desafío de programación #13: Find the maximum number in an array of numbers

function selectorDeNumerosGrandes(numeros) {
    let numeroMaximo = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > numeroMaximo) {
            numeroMaximo = numeros[i];
        }
    }

    return numeroMaximo
}

//const NUMEROS = [7, 100, 8, 4, 200, 744, 500, 554, 10, 2];
//const NUMERO_GRANDE = selectorDeNumerosGrandes(NUMEROS);

//console.log(`${NUMEROS} - El número más grande es: ${NUMERO_GRANDE}`);

// Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión/    
//  Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
//  El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

function Fibonacci() {
    const NUMEROS = [0, 1];
    let sumarNumero;

    for (let i = 0; i < NUMEROS.length; i++) {
        
        if (NUMEROS.length < 11) {
            sumarNumero = NUMEROS[i] + NUMEROS[i+1];
    
            NUMEROS.push(sumarNumero);
        }
    
    }
    return NUMEROS;
}

//const NUM_FIBONACCI = Fibonacci();
//console.log(NUM_FIBONACCI);

// Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión

// Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.

