const { muestraDigito, muestraOperador } = require("./muestraDisplay");
const { pulsaIgual } = require("./pulsaIgual");
const { borraDisplay, borraTodo } = require("./borrarDatos");

function inicializaBotones() {

    let botonesNumericos = document.getElementsByClassName("number");
    for (btnNumerico of botonesNumericos) {
        (function (num) {
            btnNumerico.addEventListener("click", () => { muestraDigito(num) });
        }(btnNumerico.dataset.action));
    }

    let botonSuma = document.getElementsByClassName("blue-button")[0];
    let operadorMas = botonSuma.dataset.action;
    botonSuma.addEventListener("click", () => { muestraOperador(operadorMas) });

    let botonResta = document.getElementsByClassName("blue-button")[1];
    let operadorMenos = botonResta.dataset.action;
    botonResta.addEventListener("click", () => { muestraOperador(operadorMenos) });

    let botonIgual = document.getElementsByClassName("calc-button")[14];
    botonIgual.addEventListener("click", pulsaIgual);

    let botonBorradoDisplay = document.getElementsByClassName("red-button")[0];
    botonBorradoDisplay.addEventListener("click", borraDisplay);

    let botonBorradoTotal = document.getElementsByClassName("red-button")[1];
    botonBorradoTotal.addEventListener("click", borraTodo);
}

module.exports = {
     inicializaBotones
}