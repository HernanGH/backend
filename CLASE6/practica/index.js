const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Declaro el Array con los contactos
const contactos = [
    {
        id: 1,
        nombre: "Pepe",
        email: "pepe@nada.com"
    }, {
        id: 2,
        nombre: "Hugo",
        email: "hugo@nada.com"
    }, {
        id: 3,
        nombre: "Juan",
        email: "juan@nada.com"
    }
];

// Middleware que verifica si el dato por el que busco es correcto y el metodo usado
const verifica = (req, res, next) => {
    if (req.body.id && req.method === 'GET') {
        next();
    } else if (req.body.nombre && req.method === 'POST') {
        next();
    } else {
        res.status(403).send(`Sorry but you do not have access to route ${req.url}`);
    }
};

// middleware de bodyParser: Permite recibir parámetros en formato JSON y mete los dados de la request adentro de req.body.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Se agrega el middleware en la aplicación.
app.use(verifica);

// Ruta a la cual solo pueden acceder las request o los usuarios que pasaron la verficacion
app.get('/persona', (req, res, next) => {
    let contacto = contactos.find(contactoItem => contactoItem.id === req.query.id);
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: 'Contacto',
        respuesta: contacto
    };
    res.send(respuesta);
});

// Ruta a la cual solo pueden acceder las request o los usuarios que pasaron la verficacion
app.post('/persona', (req, res, next) => {
    resultado = contactos.find(contactoItem => contactoItem.nombre === req.body.nombre);
    if (resultado){
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'Contacto',
            respuesta: resultado
        };
    }else{
        respuesta = {
            error: false,
            codigo: 502,
            mensaje: 'Contacto',
        };
    }

    res.send(respuesta);
});


app.listen(port, () => {
    console.log(`Server listeting on port ${port}`)
});


