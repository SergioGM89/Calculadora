/**
 * 
 * @jest-environment jsdom 
 * */

const { borraDisplay, borraTodo } = require("../src/borrarDatos");
const { getDisplay, getLog } = require("../src/iniciaConstantes");

const fs = require("fs");
const HTML_FROM_FILE = fs.readFileSync('./src/index.html');

describe("Comprueba si borra los datos.", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = HTML_FROM_FILE;
        getDisplay().textContent = "5"; //Para comprobar que inicializa el display
        getLog().innerHTML = '<p>5+5 = 10</p>'; //Para comprobar que borra el log
    });

    it("Debería poner a '0' el display.", () => {
        borraDisplay()
        expect(getDisplay().textContent).toBe("0");

    });

    it("Debería poner a '0' el display y dejar el log vacío.", () => {
        borraTodo()
        expect(getLog().textContent).toBe("")
        expect(getDisplay().textContent).toBe("0");

    });

});