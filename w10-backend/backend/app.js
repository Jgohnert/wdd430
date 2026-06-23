// run server: node server.js
// run server: npm run start:server

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('First middleware')
    next();
});

app.use((req, res, next) => {
    res.send('Express Hello');
});

module.exports = app;