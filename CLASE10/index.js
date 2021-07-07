const mongoose = require('mongoose');
const express = require('express');
const app = express();

// const productos = [
//   { id: 0, name: 'Papa fritas' },
//   { id: 1, name: 'hamburguesa' }
// ];

mongoose.connect('mongodb://localhost/dalila', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const Schema = mongoose.Schema;

const Products = new Schema({
  id: Number,
  name: String
});

const ProductModel = mongoose.model('products', Products);

// ProductModel.find({}, (error, products) => {
//   console.log('error: ', error);
//   console.log('products: ', products);
// });

app.get('/productos', (request, response) => {
  ProductModel.find({}).then((products) => {
    console.log('then products: ', products);
    response.send(products);
  });
});

app.listen(3000, () => {
  console.log('Api corriendo...');
});
