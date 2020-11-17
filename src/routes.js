const express = require('express');
const routes = express.Router();

// Status check
routes.get('/status', (req, res) => {
  res.send({ status: 200 });
});

module.exports = routes;