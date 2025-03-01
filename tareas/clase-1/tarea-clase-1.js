/*
Crear una función que tome como parámetro el año actual y el año de nacimiento
y calcule la edad del usuario (más o menos).
Preguntarle estos datos al usuario y guardarlos en 2 variables
Ejecutar la función con estos datos
Impriman el resultado en la consola */


function calcularEdadUsuario(numero1, numero2) {
    return numero1 - numero2;
}

const ANIO_NACIMIENTO = Number(prompt('Ingrese el año de su nacimiento'));
const ANIO_ACTUAL = Number(prompt('Ingrese el año en el que estamos'));
const EDAD_USUARIO = calcularEdadUsuario(ANIO_ACTUAL, ANIO_NACIMIENTO);

console.log("El usuario tiene " + EDAD_USUARIO + " años.");

/*
Preguntar el salario anual y calcular el salario mensual
Preguntar el salario mensual y calcular el anual
diario... semanal, por hora. etc. */


function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_UN_ANIO = 12;

    return salarioAnual / MESES_EN_UN_ANIO;
}

function calcularSalarioAnual(salarioMensual) {
    const MESES_EN_UN_ANIO = 12;

    return salarioMensual * MESES_EN_UN_ANIO;
}

function calcularSalarioSemanal(salarioMensual) {
    const SEMANAS_EN_UN_MES = 4;

    return salarioMensual / SEMANAS_EN_UN_MES;
}

function calcularSalarioDiario(salarioMensual) {
    const DIAS_EN_UN_MES = 28;

    return salarioMensual / DIAS_EN_UN_MES;
}

function calcularSalarioPorHora(salarioMensual) {
    const HORAS_EN_UN_MES = 224;
    
    return salarioMensual / HORAS_EN_UN_MES;
}

let salarioAnual = Number(prompt('Ingrese su salario anual'));

const SALARIO_DEL_MES = calcularSalarioMensual(salarioAnual);
const SALARIO_DEL_ANIO = calcularSalarioAnual(SALARIO_DEL_MES);
const SALARIO_DE_LA_SEMANA = calcularSalarioSemanal(SALARIO_DEL_MES);
const SALARIO_DEL_DIA = calcularSalarioDiario(SALARIO_DEL_MES);
const SALARIO_POR_HORA = calcularSalarioPorHora(SALARIO_DEL_MES);

console.log('Su salario al año es de $' + SALARIO_DEL_ANIO);
console.log('Su salario al mes es de $' + SALARIO_DEL_MES);
console.log('Su salario a la semana es de $' + SALARIO_DE_LA_SEMANA);
console.log('Su salario al día es de $' + SALARIO_DEL_DIA);
console.log('Su salario por hora es de $' + SALARIO_POR_HORA);


/// SCOPE

// Variable hoisting -> izar
// console.log(hola); // Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra un undefined... Por qué?
// var mensaje = 'Hola, mundo'; // Porque iza a var mensaje (sin asignarle el valor) arriba del todo y por eso muestra undefined 
// console.log(mensaje);

// Y con let?
//console.log(mensaje); //error, no se puede acceder a mensaje antes de la inicialización.
//let mensaje = 'Hola, mundo';

// function hoisting

/*
pruebaHoisting(); //funciona! Porque iza la funcion arriba del todo 
function pruebaHoisting(){
    console.log('prueba');
}
*/

/*
var a = 1; // Variable global
let b = 2; // Variable global

function prueba(c) { // c es un parametro de la función. Es decir variable local
    let d = 4; // Variable local a la función

    if(c === 3){
        var e = 5; // Por variable hoisting termina siendo local a la función 
        let f = 6; // Variable local al if

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // Es lo que le pasen al parametro c (pero para que lo muestre c debe ser exactamente igual a 3)
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // Es lo que le pasen al parametro c
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // Por variable hoisting es 5
    //console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // Error, la variable no está definida
}

prueba(3);


console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
console.log('c vale: ' + c); // Error, la variable no está definida
console.log('d vale: ' + d); // Error, la variable no está definida
console.log('e vale: ' + e); // Error, la variable no está definida
console.log('f vale: ' + f); // Error, la variable no está definida
*/