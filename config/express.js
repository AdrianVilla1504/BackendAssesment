const express = require('express');
const morgan = require('morgan');

function expressConfiguration(app){
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = expressConfiguration;
