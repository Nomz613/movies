const express = require('express')
// const path = require('path')
const volleyball = require('volleyball')
const app = express()

/////logging middleware
////body parsing middleware
const debug = process.env.NODE_ENV === 'test'
app.use(volleyball.custom({debug}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('./api', require('./api'))

module.exports = app;

app.use((err, req, res, next) => {
    if(process.env.NODE_ENV !== 'test')console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error');
});