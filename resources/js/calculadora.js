let operacion = '';
let resultado = '';

function agregarNumero(num) {
    resultado += num;
    document.getElementById('resultado').value = resultado;
}

function operar(op) {
    if (resultado === '') return;
    operacion = op;
    resultado += ` ${op} `;
    document.getElementById('resultado').value = resultado;
}

function calcular() {
    if (resultado === '') return;
    try {
        let resultadoFinal = eval(resultado.replace(/ /g, ''));
        document.getElementById('resultado').value = resultadoFinal;
        resultado = resultadoFinal.toString();
    } catch (error) {
        alert('Error en la operación');
        resetear();
    }
}

function resetear() {
    resultado = '';
    operacion = '';
    document.getElementById('resultado').value = '';
}
