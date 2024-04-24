const express = require('express');
const people = require('./peopleRoutes.js');
const categories = require('./categoriesRoutes.js');
const courses = require('./coursesRoutes.js');

module.exports = app => {
  app.use(
    express.json(),
    people,
    categories,
    courses
  );
};