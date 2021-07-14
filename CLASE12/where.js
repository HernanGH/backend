var express = require('express');
var app = express();
const sequelize = require('./conexion.js');


async function findFilterRows() {
    sequelize.query('SELECT * FROM usuarios WHERE estado_civil like ?',
        { replacements: ['casad%'], type: sequelize.QueryTypes.SELECT }
    ).then(function (usuarios) {
        console.log(usuarios)
    }).catch(error => console.log('Error: ', error));
}

findFilterRows();

app.listen(3000, function () {
    console.log('Sistema armado en el puerto 3000!');
});