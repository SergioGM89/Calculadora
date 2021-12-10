/**
 * 
 * @jest-environment jsdom 
 * */

const { muestraDigito, muestraOperador } = require("../src/muestraDisplay");
const { getDisplay } = require("../src/iniciaConstantes");

const fs = require("fs");
const HTML_FROM_FILE = fs.readFileSync('./src/index.html');

describe("Comprueba si muestra los datos en el display.", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = HTML_FROM_FILE;
    });

    it("Debería mostrar en el display el número pulsado (si había un '0').", () => {   
        muestraDigito("5")     
        expect(getDisplay().textContent).toBe("5");
    });

    it("Debería mostrar en el display el número pulsado concatenado "
    + "con el número u operador que ya hubiera.", () => {  
        getDisplay().textContent = "10+4";
        muestraDigito("5")
        expect(getDisplay().textContent).toBe("10+45");
    });

    it("Debería mostrar en el display el operador pulsado si el último caracter del display" 
    + " no es otro operador. De lo contrario, no añade el operador pulsado.", () => {
        getDisplay().textContent = "10+4";
        muestraOperador("+")
        expect(getDisplay().textContent).toBe("10+4+")
        muestraOperador("-")
        expect(getDisplay().textContent).toBe("10+4+");
    });

});