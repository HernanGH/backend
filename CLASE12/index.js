var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findAllRows() {

    sequelize.query("SELECT * FROM usuarios", { type: sequelize.QueryTypes.SELECT })
        .then(function (usuarios) {
            console.log(usuarios);
        })
}

findAllRows();


app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});