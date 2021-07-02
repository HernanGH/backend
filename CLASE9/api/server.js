const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const SECRETO = 'ACAMICA_COPATE_CON_LAS_LIBRERIAS';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const usuarios = [
  {
    usuario: 'hernan',
    contraseña: '1234',
    id: 0,
    email: 'asd@mail.com',
    edad: 28
  }
];

app.use(expressJwt({ secret: SECRETO, algorithms: ['HS256'] }).unless({path: ['/login']}));

let respuesta = {
  error: false,
  status: 200,
  mensaje: '',
  data: {} 
};

app.post("/login", (request, response) => {
  console.log(request.body);
  if (!request.body.usuario) {
    respuesta = {
      error: true,
      mensaje: 'debe ingresar un usuario',
      status: 400,
      data: {}
    };

    response.status(400);
    response.json(respuesta);
  } else {
    const usuario = usuarios
      .find((usuarioItem) =>
        usuarioItem.usuario === request.body.usuario
        && usuarioItem.contraseña === request.body.contraseña);

    if (usuario) {
      const token = jwt.sign(usuario, SECRETO);
      console.log('TOKEN: ', token);

      respuesta = {
        error: false,
        data: usuario,
        token: token,
        status: 200,
        mensaje: 'sesion iniciada'
      };

      response.status(200);
      response.json(respuesta);
    } else {
      respuesta = {
        error: true,
        mensaje: 'usuario y/o contraseña incorrectos',
        status: 401,
        data: {}
      };

      response.status(401);
      response.json(respuesta);
    }
  }
});

// const verToken = (req, res, next) => {
//   console.log(req.headers);
//   const token = req.headers.authorization;
//   // var decoded = jwt.verify(token, SECRETO);
//   next();
// };

app.get('/usuarios', (req, res) => {
  respuesta = {
    error: false,
    data: usuarios,
    status: 200,
    mensaje: 'lista de usuarios'
  };
  res.status(200).json(respuesta);
});

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({message: 'invalid token...'});
  }
  next();
});

app.listen(3000, () => {
  console.log('Servidor en el puerto 3000');
});
