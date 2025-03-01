// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

const MI_NOMBRE = 'cristian';
const NOMBRE_AMIGO = 'julian';

const nombreUsuario = (prompt('Ingresa tu nombre') || '').toLowerCase();

if (nombreUsuario === MI_NOMBRE) {
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}.`);
} else if (nombreUsuario === NOMBRE_AMIGO) {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi amigo.`);
} else if (nombreUsuario.trim().length === 0) {
    console.log('No ingresaste ningún nombre.');
} else {
    console.log(`Hola ${nombreUsuario}.`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

const edadUsuario = Number(prompt('Ingresa tu edad:'));
const MI_EDAD = 26;

if (edadUsuario > MI_EDAD) {
    console.log('Sos más grande que yo.');
} else if (edadUsuario < MI_EDAD) {
    console.log('Sos menor que yo.');
} else if (edadUsuario === MI_EDAD) {
    console.log('Tenemos la misma edad.');
} else {
    console.log(`No entendi la respuesta: ${edadUsuario}`);
}


//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

const EDAD_MINIMA_PARA_ENTRAR = 18;
const RESPUESTA_SI = 'si';
const RESPUESTA_NO = 'no';

const usuarioTieneDocumento = (prompt('Tenes el documento?', 'si o no') || '').toLowerCase();

if (usuarioTieneDocumento === RESPUESTA_SI) {
    const edadUsuario = Number(prompt('Cuántos años tenes?'));

    if (edadUsuario >= EDAD_MINIMA_PARA_ENTRAR) {
        console.log('Podes entrar al bar.');
    } else if (edadUsuario < EDAD_MINIMA_PARA_ENTRAR) {
        console.log('No podes entrar al bar.');
    } else {
        console.log(`No entendí la respuesta ${edadUsuario}`);
    }

} else if (usuarioTieneDocumento === RESPUESTA_NO) {
    console.log('No podes entrar al bar.');
} else {
    console.log(`No entendi la respuesta ${usuarioTieneDocumento}`);
}
