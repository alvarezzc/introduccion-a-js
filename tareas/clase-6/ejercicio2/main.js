let contador = 0;

document.querySelector('#agregar-integrante').onclick = function(event) {
    contador++;
    crearIntegrante(contador);

    if (contador > 0) {
        mostrarBotonQuitarIntegrantes();
        mostrarBotonCalcular();
    }
    event.preventDefault();
}

document.querySelector('#quitar-integrante').onclick = function(event) {
    
    if (contador > 0) {
        contador--;
        borrarIntegrante(contador);
        ocultarResultado();
        borrarErroresAnteriores();
    }

    if (contador === 0){
        ocultarBotonQuitarIntegrantes();
        ocultarBotonCalcular();
    }

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event) {
    const SALARIOS_ANUALES = obtenerSalarios();
    const SALARIOS_MENSUALES = obtenerSalarioMensual(SALARIOS_ANUALES);
 
    const salariosValidados = validarSalarios(SALARIOS_ANUALES);
    const esExito = errorMensajes(salariosValidados) === 0;
    
    if (esExito) {
        obtenerResultado('mayor', obtenerSalarioAnualMayor(SALARIOS_ANUALES));
        obtenerResultado('menor', obtenerSalarioAnualMenor(SALARIOS_ANUALES));
        obtenerResultado('anual', obtenerSalarioAnualPromedio(SALARIOS_ANUALES));
        obtenerResultado('mensual', obtenerSalarioMensualPromedio(SALARIOS_MENSUALES));
    
        mostrarResultado();
    }

    event.preventDefault();
}

function crearIntegrante(contador) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = `Ingrese su salario anual integrante #${contador}: $`;

    const $input = document.createElement('input');
    $input.type = 'number';

    const $br = document.createElement('br');

    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($br);

    const $familiares = document.querySelector('#familiares');
    $familiares.appendChild($div);
}

function borrarIntegrante(contador) {
    const $integrante = document.querySelectorAll('.integrante');
    $integrante[contador].remove();
}

function obtenerSalarios() {
    const $salarioIntegrantes = document.querySelectorAll('.integrante input');
    const SALARIOS = [];

    for (let i = 0; i < $salarioIntegrantes.length; i++) {
        if ($salarioIntegrantes[i].value !== "") {
            SALARIOS.push(Number($salarioIntegrantes[i].value));
        }
    }

    return SALARIOS;
}

function obtenerSalarioMensual(salarioAnual) {
    const SALARIO_MENSUAL = [];

    for (let i = 0; i < salarioAnual.length; i++) {
        let SALARIOS = salarioAnual[i] / 12;
        SALARIO_MENSUAL.push(SALARIOS);
    }

    return SALARIO_MENSUAL;
}

function validarSalarios(salarios) {
    const mensajeSalarios = {};
    
    salarios.forEach((salario, indice) => {
    
        if (salario === 0) {
            mensajeSalarios[`mensaje${indice}`] = 'El salario ingresado no puede ser cero';
        } else if (salario <= -1) {
            mensajeSalarios[`mensaje${indice}`] = 'El salario ingresado no puede ser un número negativo';
        } else {
            mensajeSalarios[`mensaje${indice}`] = '';
        }
    });

    return mensajeSalarios;
}

function errorMensajes(mensajes) {
    borrarErroresAnteriores();

    const $inputs = document.querySelectorAll('.integrante input');
    const keys = Object.keys(mensajes);

    let cantidadErrores = 0;

    keys.forEach((key, indice) => {
        const error = mensajes[key];
        const input = $inputs[indice];

        if (error) {
            cantidadErrores++;
            input.className = 'error';
            mostrarError(error);
        } else {
            input.className = '';
        }
    });
    
    return cantidadErrores;
}

function mostrarError(error) {
    const $error = document.createElement('li');
    $error.textContent = error;

    const $errores = document.querySelector('#errores');
    $errores.appendChild($error);
}

function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li');
    $errores.forEach(error => error.remove());
}

function obtenerResultado(texto, valor) {
    document.querySelector(`#${texto}-salario`).textContent = valor;
}

function ocultarResultado() {
    document.querySelector('#resultado').className = 'oculto';
}
function mostrarResultado() {
    document.querySelector('#resultado').className = '';
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
}
function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonQuitarIntegrantes() {
    document.querySelector('#quitar-integrante').className = 'oculto';
}
function mostrarBotonQuitarIntegrantes() {
    document.querySelector('#quitar-integrante').className = '';
}