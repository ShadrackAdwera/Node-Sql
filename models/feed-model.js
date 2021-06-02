const { DataTypes } = require('sequelize');

const sequelize = require('../db/db');

const Feed = sequelize.define('feed',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: true
})

module.exports = Feed;