const Sequelize = require('sequelize');
const database = require('./database')

const Student = database.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: { min: 0.0, max: 4.0 }
    },
    fullName: {
        type: Sequelize.VIRTUAL,
        get: function () {
            return this.getDataValue('firstName') + ' ' + this.getDataValue('lastName')
        }
    }
})



module.exports = Student;