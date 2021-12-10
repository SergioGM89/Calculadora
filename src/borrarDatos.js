const { getDisplay, getLog } = require("./iniciaConstantes");

function borraDisplay() {
    getDisplay().textContent = "0";
}

function borraTodo() {
    borraDisplay();
    getLog().textContent = "";
}

module.exports = {
    borraDisplay,
    borraTodo
}