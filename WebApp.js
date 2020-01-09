'use strict'
const express = require('express');

const App = express();
let port = process.argv[2];
if(!port){
  port = 80;
}

App.use(express.static('public'))
  .listen(port, console.log(`web server stated at ${port}`));
