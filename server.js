'use strict';
const express = require('express');
const fbeamer = require('./FBeamer');
const conf = require('./config');
const server = express();
const PORT = process.env.PORT || 3000;
server.get('/',(req,res) => myHook(req,res));
server.listen(PORT,() => console.log(`The bot server is running on port ${PORT}`));

function myHook(req, res) {
  var myBeamer = new fbeamer(conf.FB);
  //res.send(conf.FB);
  myBeamer.registerHook(req, res);
}