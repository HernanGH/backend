const sequelize = require('./conexion.js');

async function createRow() {

    // let array_insert = ['NULL', '1', 'test 1', 'test 1', 'test 1', 'Prueba', 'Foto.jpg', '2020-07-22 00:00:00', '1'];
    const value_insert = ['federico', 'pezella', 45, 'soltero'];
    
    sequelize.query('INSERT INTO `usuarios` (`nombre`, `apellido`, `edad`, `estado_civil`) VALUES( ?, ?, ?, ?)',
        { replacements: value_insert, type: sequelize.QueryTypes.INSERT }
    ).then(function (usuarios) {
        console.log(usuarios)
    }).catch(error => console.log('ERROR: ', error));
}

createRow();
