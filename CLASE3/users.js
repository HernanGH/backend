const User = require('./user_module.js');

// const User = userModule.User;
// const Test = userModule.Test;
// console.log(Test);
const person = new User(); 

// //Inprimo objeto completo 
console.log(person);

// //Imprimo propiedad
console.log(person.nombre);
console.log(person.apellido);
console.log(person.email);

// //Ejecuto metodo
console.log(person.fullname());
