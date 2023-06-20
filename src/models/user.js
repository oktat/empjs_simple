const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const User = sequelize.define('User', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    email: { type: DataTypes.STRING,  allowNull: true  },
    password: { type: DataTypes.STRING , allowNull: false }
})
 
//A model és az adatbázis szinkronizálása, nem erőltetve.
sequelize.sync({
    force: false
})
module.exports = User
