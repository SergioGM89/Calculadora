const { getDisplay } = require("./iniciaConstantes");

function muestraDigito(num) {
    if (getDisplay().textContent === "0") {
        getDisplay().textContent = num;
    } else {
        getDisplay().textContent += num;
    }
}

function muestraOperador(operador) {
    if (/[0-9]{1}$/.test(getDisplay().textContent)) {
        getDisplay().textContent += operador;
    }
}

module.exports = {
    muestraDigito,
    muestraOperador
}