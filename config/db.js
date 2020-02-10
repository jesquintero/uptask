const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('uptask', 'root', 'rootroot', {
  host: 'localhost',
  dialect:  'mysql',
  operatorsAliases: false,
  define: {
    timestamp: false
  }
});

module.exports = sequelize;