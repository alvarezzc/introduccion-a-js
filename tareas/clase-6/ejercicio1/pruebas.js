function probarValidarCantidadIntegrantes() {
    console.assert(
        validarCantidadIntegrantes(0) === 'La cantidad de integrantes no puede ser cero',
        'Validar la cantidad de integrantes no valido que al menos se ingrese un integrante'
    );

    console.assert(
        validarCantidadIntegrantes(-1) === 'La cantidad de integrantes no puede ser un número negativo',
        'Validar la cantidad de integrantes no valido que se ingrese un número correcto'
    );

    console.assert(
        validarCantidadIntegrantes(15.5) === 'La cantidad de integrantes no puede tener punto decimal',
        'Validar la cantidad de integrantes no valido que no se ingresara un número con punto decimal'
    );

    console.assert(
        validarCantidadIntegrantes(1) === '',
        'Validar cantidad de integrantes fallo con un número válido de integrantes'
    );
}

function probarValidarEdades() {
    const resultadoValidacionEdades = validarEdades([0, 1, -1, 1.1]);

    console.assert(
        resultadoValidacionEdades[0] === 'La edad no puede ser cero',
        'Validar edades no valido que la edad no sea cero'
    );

    console.assert(
        resultadoValidacionEdades[1] === '',
        'Validar edades no valido con una edad correcta'
    );

    console.assert(
        resultadoValidacionEdades[2] === 'La edad no puede ser un número negativo',
        'Validar edad no valido que el usuario no ingrasara un número negativo'
    );

    console.assert(
        resultadoValidacionEdades[3] === 'El campo edades no puede contener números con punto decimal',
        'Validar edades no valido que las edades no tengan punto decimal'
    );

    console.assert(
        resultadoValidacionEdades.length === 4,
        'Validar edades no valido que se ingresaran 4 edades'
    );
}

probarValidarCantidadIntegrantes();
probarValidarEdades();