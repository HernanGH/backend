var express = require('express');
var app = express();
const sequelize = require('./conexion.js');

async function updateRow() {
    sequelize.query('UPDATE usuarios SET edad = 28 WHERE id = ?',
        { replacements: [5]}
    ).then(function (restaurant) {
        console.log(restaurant)
    }).catch(error => console.log('Error: ', error));
}

updateRow();

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});