var express = require('express');
var app = express();
const sequelize = require('./conexion.js');

async function deleteRow() {
    sequelize.query('DELETE FROM usuarios WHERE id = ?',
        { replacements: [17] }
    ).then(function (restaurant) {
        console.log(restaurant)
    }).catch(error => console.log('Error: ', error));
}

deleteRow();

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});