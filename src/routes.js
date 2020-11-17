const express = require('express');
const LoginController = require('./controllers/LoginController');
const UserController = require('./controllers/UserController');
const routes = express.Router();

// Status check
routes.get('/status', (req, res) => {
  res.send({ status: 200 });
});

// Login
routes.post('/login', LoginController.login)

// User
routes.post('/user/register', UserController.createUser);
routes.get('/users', UserController.getAllUsers);
routes.get('/user/:userId', UserController.getUserById);

module.exports = routes;