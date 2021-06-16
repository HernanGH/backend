
var moment = require('moment');
const coolImages = require("cool-images");
const fs = require('fs');

var list = coolImages.many(600, 800, 10);
const mensaje = list.join("\n");
console.log(mensaje);

const log = `\n${moment().format("YYYY/MM/DD HH:mm:ss")}\n${mensaje}`;
console.log(log);

fs.appendFile("log.txt", log, (error) => {
    if(error){
        console.error(error);
    }else {
        console.log("se cargo bien");
    }
})


