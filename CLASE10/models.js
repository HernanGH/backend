const mongoose = require('./connection');

const Schema = mongoose.Schema;

// Products
const Products = new Schema({
  id: Number,
  name: String
});

const ProductModel = mongoose.model('products', Products);

// Users
const Users = new Schema({
  name: String,
  lastName: String,
  mail: String,
  userName: String
});

const UserModel = mongoose.model('users', Users);

module.exports = {
  ProductModel,
  UserModel
};