'use strict';

const Sequelize = require('sequelize');

const config = require(__dirname + '/../config/config.json')['development'];

const db = {};

const sequelize = new Sequelize(
  config.database, // sessac2
  config.username, // user
  config.password, // 1234
  config
  );

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);

module.exports = db;
