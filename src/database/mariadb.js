const Sequalize = require('sequelize')
require('dotenv').config()
 
const sequalize = new Sequalize(
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mariadb',
        dialectOptions: {}
    }
)
 
module.exports = sequalize
