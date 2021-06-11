const calculator = require('./calculator');

const resultadoSuma = calculator.sumar(5, 5);
console.log('Resultado suma: ', resultadoSuma);

const resultadoResta = calculator.restar(5, 5);
console.log('Resultado resta: ', resultadoResta);

const resultadoMultiplicacion = calculator.multiplicar(5, 5);
console.log('Resultado multiplicacion: ', resultadoMultiplicacion);

const resultadoDivicion = calculator.dividir(5, 5);
console.log('Resultado division:', resultadoDivicion);

calculator.mostrar('hola mundo');