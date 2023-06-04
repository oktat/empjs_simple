const { DataTypes } = require('sequelize')
const sequelize = require('../database/mariadb')

const Employee = sequelize.define('Employee', {
    name: { type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: true  },
    salary: { type: DataTypes.DOUBLE , defaultValue: 0 }
})

sequelize.sync({
    force: false
})
module.exports = Employee