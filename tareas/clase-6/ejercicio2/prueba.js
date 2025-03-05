function probarValidarSalarios() {
    const resultadoValidarSalarios = validarSalarios([0, -1, 1]);
    const mensajes = Object.values(resultadoValidarSalarios);

    console.assert(
        mensajes[0] === 'El salario ingresado no puede ser cero',
        'Error: validar salarios no valido con el número cero'
    );

    console.assert(
        mensajes[1] === 'El salario ingresado no puede ser un número negativo',
        'Error: validar salarios no valido con un número en negativo'
    );

    console.assert(
        mensajes[2] === '',
        'Error: validar salarios no valido con un número correcto'
    );
}

probarValidarSalarios();