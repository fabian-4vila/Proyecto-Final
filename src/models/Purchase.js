const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Purchase = sequelize.define('purchase', {
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    //usersId
    //productsId
});

module.exports = Purchase;