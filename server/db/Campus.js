const Sequelize = require('sequelize');
// const db = require('./db').database;
// import database from '../db'
const database = require('./database')
const Students = require('./Students')

const Campus = database.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        defaultValue: 'imageURL'
    },
    description: {
        type: Sequelize.TEXT
    },
}, {
    defaultScope: {
        include: [{ model: Students }]
    }
    })


module.exports = Campus;