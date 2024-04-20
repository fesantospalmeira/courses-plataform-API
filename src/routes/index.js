const express = require('express');
const people = require('./peopleRoutes.js');

module.exports = app => {
  app.use(
    express.json(),
    people,
  );
};