const { getDisplay, getLog } = require("./iniciaConstantes");

function pulsaIgual() {

    let result = calculaOperacion(getDisplay().textContent);
    muestraResultado(result, getDisplay().textContent);

}

function calculaOperacion(str) {
    let total = 0;
    str = str.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (str.length) {
        total += parseFloat(str.shift());
    }
    return total;
}

function muestraResultado(result, operacion) {
    if(/[\+\-]{1}$/.test(operacion)){
        operacion = operacion.substring(0, operacion.length -1);
    }
    getDisplay().textContent = result;
    let p = document.createElement("p");
    p.textContent = operacion + " = " + result;
    getLog().appendChild(p);
}

module.exports = {
    pulsaIgual
}