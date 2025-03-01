// Nivel 1

/*
    Comentarios
    ========

    Empecemos con los  comentarios. Esto es un comentario. Comentarios son notas que la gente puede leer,
    pero las computadoras las van a ignorar.

    Un comentario puede ser de 1 sola línea, o multi-línea.
*/

/*
    Mostrando texto
    ===============

    Empecemos mostrando el resultado de tu código en la pantalla.

    Hay algunas maneras de hacerlo, vamos a ver algunas:

    alert('Hola Mundo!');
        Esta línea de código va a mostrar un cartelito en tu navegador con el texto 'Hola Mundo!'
        una vez que se recargue index.html.

    console.log('Hola Mundo!');
        Esta línea de código va a mostrar 'Hola Mundo!' en la consola del navegador,
        una vez que  se recargue index.html.
*/

//alert('Hola, Mundo!');
//console.log('Hola, Mundo!');

/*
    Variables
    =========

    Una variable es un lugar para guardar información. Para crear (o mejor dicho DECLARAR) una variable usamos 'let',

    let nombreDeVariable;

    Con esto creamos una variable llamada nombreDeVariable. pero no tiene información o valor, está indefinida.
    JavaScript le llama a estos valores indefinidos 'undefined'.

    Si imprimimos la variable en la consola, podemos verlo.
    console.log("nombreDeVariable es " + nombreDeVariable);

    El resultado va a ser "nombreDeVariable es undefined".

    Para darle un valor a nuestra variable (o mejor dicho ASIGNAR un valor), usamos el signo '='.

    nombreDeVariable = 'Hola Mundo!';

    También podemos crear (declarar) y darle valor (asignar) a una variable en un solo paso (la INICIALIZAMOS).

    let nuevaVariable = 1;

    Tipo de variables:
    String - Un set de caracteres, palabras), o frases que ponemos entre comillas (dobles o simples, no importa), ejemplo 'hola mundo!'.

    Números - Pueden ser enteros (ej.: 5) o decimales (ej.: 5.21). No van entre comillas.

    Booleano - representa un valor VERDADERO o FALSO. TRUE o FALSE.
*/

// TAREA: Creá 2 variables indefinidas, llamadas numeroUno y numeroDos.

//let numeroUno;
//let numeroDos;

// Crear 2 variables nuevas, una con tu nombre, la segunda con tu edad. Dales un nombre apropriado y
// mostralas con un alert.

//let nombre = "Cristian";
//let edad = 26;
//alert('Me llamo ' + nombre + ' y tengo ' + edad + ' años.');

/*
    Constantes
    =========

    Una constante es como una variable, pero se le da un valor cuando es creado y luego no se puede cambiar mientras
    se ejecuta el programa.
    En otras palaras, una constante siempre tiene la misma información durante la ejecución de un programa.

    Para declarar (crear) una constante, usamos la palabra reservada (keyword) `const`.

    Ejemplo:

    const circunferenciaTierraKm = 6371;

    Asignar un nuevo valor a la constante nos va a dar un error, no podemos hacer:
    circunferenciaTierraKm = 6400;

*/

/*
    Funciones
    =========

    Una función es un set de instrucciones que hace la misma tarea cada vez que la llamamos.
    Las funciones toman parámetros de entrada (ARGUMENTOS o INPUT), y calculan el resultado basado en esos valores y devuelven (RETURN) un resultado ó OUTPUT.

    Para crear una función vamos a usar el siguiente formato:

    function nombreFuncion(nombreArgumento) {
        return nombreArgumento * 2;
    };

    Nuestra función acaba de ser DEFINIDA, pero no se va a ejecutar/correr si no la 'llamamos'.

    nombreFuncion(10); // nombreDeFuncion(argumento1);

    console.log(nombreFuncion(10));

    Consejo: La palabra reservada (keyword) 'return' es usada para definir el valor que devuelve la función,podemos hacer cosas ANTES de ejecutar un 'return', pero después de ejecutar 'return' la función termina.

    Ejemplo:

    function codigoDespuesDelReturn(){
        return 1;
        console.log('hola!'); //Esta línea nunca se ejecuta
    }
*/

/*
    Condicionales If-Else
    ==================

    Qué pasa si en nuestro programa queremos decidir sobre qué función debería ejecutarse? Tenemos que usar condicionales!

    "Si (if) tenés una televisión, podés mirarla. Si no (else), hacés otra cosa."

    Es lo mismo con el código. Le podés dar una condición 'if' a una máquina para que haga una decisión acerca de qué
    parte del código tiene que ejecutarse.

    Estructura:

    if (condición) {
        // hacer esto (la condición se cumplió)
    } else {
        // hacer otra cosa, porque la condición no se cumplió
    }

    Necesitamos que la condición sea un Booleano, recordemos: TRUE o FALSE. Es decir, verdadero o falso.

    Por ejemplo, si tenemos un número, lo podemos comprar con algo.

    Ejemplo

    const numero = 7;
    if (numero >= 7) {
        console.log('Nuestro número es mayor o igual que 7');
    } else {
        console.log('Nuestro número es menor que 7');
    }
*/

/*
    Operadores de comparación
    ====================
    Son usados para comparar valores:
    >   // Mayor que
    <   // Menor que
    <=  // Menor o igual que (se escribe en este orden, =< no existe)
    >=  //Mayor o igual que (se escribe en este orden, => es usado para otra cosa)
    === //Exactamente igual que (1 y "1" no son iguales, pero 1 es exactamente igual a 1 y "1" es exactamente igual a  "1"). Este operador compara el valor y el TIPO del valor.
    !== //Distinto que (dándole importancia al TIPO)

    El resultado de un operador de comparación es un valor Booleano (true o false, verdadero o falso)
*/

/*
    'If' - 'Else if' - 'Else'
    ===================

    Bueno, y qué pasa si tenemos 4 operaciones aritméticas en nuestra calculadora? Bueno, entonces usamos una estructura así

    const numero = 7;
    if (numero > 7) {
        console.log('Nuestro número es mayor a 7');
    } else if (number < 7) {
        console.log('Nuestro número es menor a 7');
    } else {
        console.log('Nuestro número es igual a 7');
    }

*/

/*
    Operadores Booleanos
    =================
    Poner un signo de exclamación (!) antes de un valor Booleano nos da el valor OPUESTO.
    Este operador ! se llama el operador "not".
    
    const bool = (1 < 2);

    Después podemos chequear si 'bool' es verdadero o falso (true o false) usando console.log

    console.log(bool); // Devuelve veradero (TRUE), porque 1 es menor a 2
    console.log(!bool); // devuelve "no verdadero"... es decir falso (FALSE)

    También podemos asignar un valor booleano directamente a una variable o constante con true y false:
*/

////////////////////////////////////////////////////////////////////////////
// Felicitaciones! Terminaste el Nivel 1 de la introducción a JavaScript! //
// El siguiente nivel es el que está en nivel2.js                         //
////////////////////////////////////////////////////////////////////////////