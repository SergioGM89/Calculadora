/**
 * 
 * @jest-environment jsdom 
 * */

const { pulsaIgual } = require("../src/pulsaIgual");
const { getDisplay, getLog } = require("../src/iniciaConstantes");

const fs = require("fs");
const HTML_FROM_FILE = fs.readFileSync('./src/index.html');

describe("Cuando se pulsa el operador igual (=)...", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = HTML_FROM_FILE;
        getDisplay().textContent = "25+8";
        pulsaIgual();
    });

    it("Debería devolver el resultador de la operación que había en el display.", () => {
        expect(getDisplay().textContent).toBe("33");
    });

    it("Debería mostrar en el log la operación seguida de '=' y el resultados de la misma.", () => {
        expect(getLog().innerHTML).toBe("\n      <p>25+8 = 33</p>");
        expect(getLog().textContent).toBe("\n      25+8 = 33");
    });

});