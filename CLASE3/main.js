const fs = require('fs');

fs.writeFile('test.json', JSON.stringify({id: 0, nombre: 'hernan'}), (error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Archivo guardado exitosamente");
});

// fs.readFile('test.txt', 'utf8', (error, data) => {
//   if (error) {
//     return console.error(error);
//   }
//   console.log(data);
// });

