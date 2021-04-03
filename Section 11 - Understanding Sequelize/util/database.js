const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'node-complete',
  'root',
  'mysql19', {
    dialect: 'mysql',
    host: 'localhost'
  });

module.exports = sequelize;
