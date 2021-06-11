//Hola Mundo 
console.log("Hola Mundo");

//Creamos un array de frutas
let frutas = ['Pera', 'Banana', 'Limones'];

//muestro las frutas
console.log(frutas);

//verificamos cuantos items tiene el array 
let cant = frutas.length
console.log(cant);

//Buscamos la fruta que esta antes de Banana
let found = frutas.find(element => element > 'Banana');
console.log(found);


//agregamos un nueva fruta 
frutas.push('Naranja');
console.log(frutas);
// expected output: Array [ 'java', 'c', 'python', 'node' ]