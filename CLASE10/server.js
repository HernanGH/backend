const express = require('express');
const { ProductModel, UserModel } = require('./models');

const app = express();

app.get('/productos', (request, response) => {
  ProductModel.find({}).then((products) => {
    console.log('then products: ', products);
    response.send(products);
  });
});

app.get('/usuarios', (request, response) => {
  UserModel.find({}).then((users) => {
    console.log('then users: ', users);
    response.send(users);
  });
});

app.listen(3000, () => {
  console.log('Api corriendo...');
});