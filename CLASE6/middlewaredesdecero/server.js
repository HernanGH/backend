const express = require('express');
const bodyParser = require('body-parser');
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const contactos = [
  {
    id: 0,
    nombre: 'asdasd',
    email: 'asdasdas@mail.com'
  },
  {
    id: 1,
    nombre: 'segundo',
    email: 'segundo@mail.com'
  },
  {
    id: 2,
    nombre: 'tercero',
    email: 'tercero@mail.com'
  }
];

const logger = (req, res, next) => {
  console.log(`Metodo: ${req.method} url: ${req.url} query: ${JSON.stringify(req.query)} body: ${JSON.stringify(req.body)} path: ${req.path}`);
  next();
};

const validarDemo = (req, res, next) => {
  if (req.query.version > 5) {
    next(); // SALTO AL SIGUIENTE MIDDLEWARE
  } else {
    res.status(400);
    res.send('Error: version invalida');
  }
};

const validarContacto = (req, res, next) => {
  const contactoRepetido = contactos.some((contacto) => contacto.id === req.body.id); // TRUE OR FALSE
  
  if (
    req.body.id > 0
    && contactoRepetido === false
    && req.body.nombre !== ""
    && req.body.email !== ""
  ) {
    next();
  } else {
    res.status(400);
    res.send('Error: datos incorrectos o contacto repetido');
  }
}

const segundaValidacion = (req, res, next) => {
  console.log('segundaValidacion');
  next();
};

server.use(logger);

server.get('/demo', validarDemo, (req, res) => {
  res.send('demo exitosa');
});

server.post('/contactos', validarContacto, segundaValidacion, (req, res) => {
  contactos.push(req.body);
  res.send('contacto guardado');
});

server.listen(3000, () => {
  console.log('Servidor iniciado...');
});