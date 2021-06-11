const sumar = (primerNumeroUno, segundoNumero) => {
  return primerNumeroUno + segundoNumero;
};

const restar = (primerNumeroUno, segundoNumero) => {
  return primerNumeroUno - segundoNumero;
};

const multiplicar = (primerNumeroUno, segundoNumero) => {
  return primerNumeroUno * segundoNumero;
};

const dividir = (primerNumeroUno, segundoNumero) => {
  return primerNumeroUno / segundoNumero;
};

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  mostrar: (value) => console.log(value)
};
