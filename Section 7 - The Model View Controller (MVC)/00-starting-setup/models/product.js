/* eslint-disable no-unused-vars */
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this); //é importante usar a arrow function para o this não perder o contexto
      fs.writeFile(p, JSON.stringify(products), (err) => { //JSON.stringify() transofrma de um objeto JS para JSON
        console.log(err);
      });
    });
  }

  //keyword static permite chamar o metodo this na class em si e não num objeto instanciado.
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};