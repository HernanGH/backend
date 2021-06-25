const express = require('express');
const bodyParser = require('body-parser');
const server = express();

let contactos = [];

server.use(bodyParser.json());

const logger = (req, res, next) => {
    const { method, path, query, body } = req;
    console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`);
    next();
};

// Middleware global a todos los endpoints
server.use(logger);

// definicion del  middleware validarContacto
const validarContacto = (req, res, next) => {
    const { nombre, apellido, email } = req.body;

    if (!nombre || !apellido || !email) {
        return res.status(400)
            .json('Datos del contacto invalido!!!');
    }

    return next();
}

// definicion del  middleware validarSiExiste
const validarSiExiste = (req, res, next) => {
    const { email } = req.body;
    const indiceDelUsario = contactos.findIndex(c => {
        return c.email == email;
    });

    if (indiceDelUsario >= 0) {
        return res.status(409)
            .json('El contacto ya existe!!!');
    }

    return next();
};

// definicion del  middleware validarVersion
const validarVersion = (req, res, next) => {
    const { version } = req.query;
    const versionNumeric = Number(version);

    if (!version || !versionNumeric || versionNumeric < 5) {
        return res.status(422)
            .json('Versión invalida!!!');
    }

    return next();
};

// Middlewares particulares al endpoint /contacto
server.post('/contacto', validarContacto, validarSiExiste, (req, res) => {
    contactos.push(req.body);
    res.json("Contacto agregado");
});

// Middlewares particulares al endpoint /demo
server.get('/demo', validarVersion, (req, res) => {
    res.json("Hola mundo!!!");
});

server.use((err, req, res, next) => {
    if (!err) {
        return next();
    }

    console.log(JSON.stringify(err));

    return res.status(500)
        .json("Se ha producido un error inesperado.");
});

server.listen(3000, () => {
    console.log('Servidor iniciado...');
});
