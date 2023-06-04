const Sequelize = require('sequelize')
var sequelize = new Sequelize('mariadb://emp:titok@127.0.0.1:3306/emp')

module.exports = sequelize


