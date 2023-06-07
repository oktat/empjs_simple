const { DataTypes } = require('sequelize')
const sequelize = require('../database/mariadb')
 
const Employee = sequelize.define('Employee', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    city: { type: DataTypes.STRING,  allowNull: true  },
    salary: { type: DataTypes.DOUBLE , defaultValue: 0 }
})
 
//A model és az adatbázis szinkronizálása, nem erőltetve.
sequelize.sync({
    force: false
})
module.exports = Employee
