const express = require('express');
const UserController = require('./controllers/UserController');
const routes = express.Router();

// Status check
routes.get('/status', (req, res) => {
  res.send({ status: 200 });
});

// User
routes.post('/user/register', UserController.createUser);

module.exports = routes;