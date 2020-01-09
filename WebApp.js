'use strict'
const express = require('express');

const App = express();
const port = process.argv[2];
App.use(express.static('public'))
  .listen(port, console.log(`web server stated at ${port}`));
