const Sequelize = require('sequelize')
const db = require('./database')


const Movie = db.define('movie', {
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ratings: {
        type: Sequelize.INTEGER,

    }
});

module.exports = Movie;