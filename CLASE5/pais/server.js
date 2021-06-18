console.log('server');
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const test = require('./routers/test/testRouter');

//Inicializamos un Objeto Pais // OBJETO QUE SIMULA NUESTRA DB
let pais = {
    nombre: '',
    habitantes: ''
};

/// ENDPOINT 1 DE EJEMPLO
// app.get('/mi_ruta', (req, res) => {
//     res.send('Hello World!');
// });

/// ENDPOINT 2 DE EJEMPLO
// app.get('/pais' , (req, res) => {
//     res.send(pais);
// });

//Inicializamos el Server en el puerto 3000
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Inicializamos un Objeto respuesta
let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

//Creamos un metodo Get raiz como punto de inicio
app.get('/', function (req, res) {
    //Creamos la respuesta
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'Punto de inicio'
    };
    res.status(404);
    res.json(respuesta);
});

//Creamos otro metodo Get para ver el pais
app.get('/pais', (req, res)=> {
     //Inicializamos la respuesta
    respuesta = {
        error: false,
        codigo: 200,
        mensaje: ''
    };

    if (pais.nombre === '' || pais.habitantes === '') {
         //Si el pais NO exite modificamos la respuesta
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El pais no ha sido creado'
        };
    } else {
        //Si el pais SI existe generamos la respuesta
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'respuesta del pais',
            respuesta: pais
        };
    }
    // Imprimimos respuesta
    res.send(respuesta);
});

//Creamos el metodo Post para crear el pais
app.post('/pais', (req, res) => {
    console.log('nombre: ', req.body.nombre);
    console.log('habitantes: ', req.body.habitantes);

    if (!req.body.nombre || !req.body.habitantes) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {
        if (pais.nombre !== '' || pais.habitantes !== '') {
            respuesta = {
                error: true,
                codigo: 503,
                mensaje: 'El pais ya fue creado'
            };
        } else {
            
            //Si el pais NO existe, lo creamos y generamos la respuesta
            pais = {
                nombre: req.body.nombre,
                habitantes: req.body.habitantes
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'pais creado',
                respuesta: pais
            };
        }
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

//Creamos el metodo Put para Actualizar el pais
app.put('/pais', (req, res) => {
    if (!req.body.nombre || !req.body.habitantes) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {
        //Si NO tenemos un pais creado para modificar
        if (pais.nombre === '' || pais.habitantes === '') {
            respuesta = {
                error: true,
                codigo: 501,
                mensaje: 'El pais no ha sido creado'
            };
        } else {
            //Si el pais SI existe, lo actualizamos y generamos la respuesta
            pais = {
                nombre: req.body.nombre,
                habitantes: req.body.habitantes
            };
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'pais actualizado',
                respuesta: pais
            };
        }
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

//Creamos el metodo Delete para eliminar el pais
app.delete('/pais', function (req, res) {
    //si no existe el Pais 
    if (pais.nombre === '' || pais.habitantes === '') {
        respuesta = {
            error: true,
            codigo: 501,
            mensaje: 'El pais no ha sido creado'
        };
    } else {
        //Si hay un pais creado, lo eliminamos
        pais = {
            nombre: '',
            habitantes: ''
        };
        respuesta = {
            error: false,
            codigo: 200,
            mensaje: 'pais eliminado'
        };
    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

//Generamos la respuesta para url no encontradas
app.use((req, res, next) => {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
      //Imrpimimos respuesta
    res.status(404);
    res.send(respuesta);
});

//// METODO PARA MODULARIZAR NUESTRA API
app.router('/test', test);
