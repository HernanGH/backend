const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

let respuesta = {
    error: false,
    codigo: 200,
    mensaje: ''
};

const telefonos = [
    {
        id: 0,
        marca:"Noxia",
        modelo:"1100",
        pantalla:"TFT de 6.5",
        sistema_operativo:"Android 9.0 Pie.",
        precio: 400
    },
    {
        id: 1,
        marca:"Samsung",
        modelo:"Galaxy A20",
        pantalla:"TFT de 6.5",
        sistema_operativo:"Android 9.0 Pie.",
        precio: 600
    },
    {
        id: 2,
        marca:"Alcatel",
        modelo:"One",
        pantalla:"TFT de 5.5",
        sistema_operativo:"Android 5.0 Pie.",
        precio: 800
    }
]

//Creamos el metodo get para obtener todos los telefonos
app.get("/telefonos", (req, res) => {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: 'Listado de Telefonos',
    respuesta: telefonos
  };
  res.status(200).send(respuesta);
});


//Creamos el metodo Post para crear el telefono
app.post('/telefonos', function (req, res) {
    console.log(req.body.nombre);
    if (!req.body.marca || !req.body.modelo) {
        respuesta = {
            error: true,
            codigo: 502,
            mensaje: 'El campo nombre y habitantes son requeridos'
        };
    } else {

            celular = {
                marca: req.body.marca,
                modelo: req.body.modelo,
                pantalla: req.body.pantalla,
                sistema_operativo: req.body.sistema_operativo,
            };
            telefonos.push(celular);
            respuesta = {
                error: false,
                codigo: 200,
                mensaje: 'celular creado',
                respuesta: celular
            };

    }
    //Imrpimimos respuesta
    res.send(respuesta);
});

//Creamos el metodo get para buscar todos los telefonos con precio menor a 500
app.get("/telefonos-search",(req,res) => {
    let searchByPrice = telefonos.filter((telefono)=>{
        return telefono.precio < 500;
    });
    respuesta = {
        error:false,
        codigo:200,
        mensaje: 'Telefonos Encontrados',
        respuesta: searchByPrice
    }
    console.log(searchByPrice);
    res.send(respuesta);   
});

//Creamos el metodo get para obtener todos los telefonos ordenados ascendentemente o descendentemente
app.get("/telefonos-orden", (req, res) => {
  console.log(req.query.orden);
  let arrayOrdenado;
  if (req.query.orden === "DESC") {
    arrayOrdenado = telefonos.sort((telefonoActual, telefonoSiguiente) => {
        if (telefonoActual.precio > telefonoSiguiente.precio) {
            return -1;
        }
        if (telefonoActual.precio < telefonoSiguiente.precio) {
            return 1;
        }
        return 0;
    });
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Telefonos ordenados acendentemente',
      respuesta: arrayOrdenado
    };
  } else if (req.query.orden === "ASC") {
    arrayOrdenado = telefonos.sort((telefonoActual, telefonoSiguiente) => {
      if (telefonoActual.precio < telefonoSiguiente.precio) {
        return -1;
      }
      if (telefonoActual.precio > telefonoSiguiente.precio) {
        return 1;
      }
      return 0;
    });
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: 'Telefonos ordenados acendentemente',
      respuesta: arrayOrdenado
    };
  } else {
    respuesta = {
      error: true,
      codigo: 400,
      mensaje: 'Error ,orden invalido'
    };
  }
  res.status(400);
  res.send(respuesta);
});

// Ultimo middleware global que responde un error por defecto si no se encontro la ruta
app.use((req, res, next) => {
    respuesta = {
        error: true,
        codigo: 404,
        mensaje: 'URL no encontrada'
    };
    res.status(404).send(respuesta);
});
