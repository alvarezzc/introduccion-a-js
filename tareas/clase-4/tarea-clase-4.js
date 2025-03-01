// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno.
/*
let numero = 11;

while (numero > 1) {
    numero--;

    console.log(numero);
}
*/

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.
/*
for (let i = 3; i < 22; i += 3) {
    console.log(i);
}
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
/*
for (let i = 1; i <= 50; i++) {

    if (i % 3 === 0 && i % 5 === 0 ) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }

}
*/
/*
for (let i = 1; i <= 50; i++) {
    let texto = '';

    if (i % 3 === 0) {
        texto = 'Fizz';
    }

    if (i % 5 === 0) {
        texto += 'Buzz'
    }

    console.log(texto || i);
}
*/

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])
/*
function calcularPromedio(numeros) {
    let sumaTotalNotas = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotalNotas = sumaTotalNotas + numeros[i];
    }

    return sumaTotalNotas / numeros.length;
}

const NOTAS = [10, 5, 4, 2, 8];
const PROMEDI0_NOTAS = calcularPromedio(NOTAS);

console.log(`Las notas de los parciales fueron de ${NOTAS} y tu promedio es de ${PROMEDI0_NOTAS}`);
*/