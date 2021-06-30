const express = require('express');
const server = express();
const bodyParser = require('body-parser');
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.listen(2000, () => {
    console.log('Conectado al servidor');
})
let usuarios = [
    {
        nombre: 'Facu',
        apellido: 'Arce',
        email: 'facuarce96@gmail.com',
        edad: 24,
        contraseña: 'asdasd'
    }
]
//Enpoint usuarios
server.get('/usuarios', (req, res) => {
    res.send(usuarios);
})
//Enpoint registro
server.post('/registro', (req, res) => {
    const newUser = req.body ;
    usuarios.push(newUser);
    res.send('Registro completado');
})
server.post('/login', (req, res) => {
    const loggedUser = usuarios.find(({email, contraseña}) => {
        return (req.body.email === email && req.body.contraseña === contraseña);
    })
    res.send(loggedUser);
})