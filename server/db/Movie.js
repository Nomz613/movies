const Sequelize = require('sequelize')
const db = require('./database')

const Movie = db.define('movie', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ratings: {
        type: Sequelize.ENUM([1, 2, 3, 4, 5]),

    }
});

module.exports = Movie;