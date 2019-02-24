'use strict';
const fbeamer = require('./FBeamer');
const conf = require('./config');
const express = require('express');
const server = express();
const PORT = process.env.PORT || 3000;
server.get('/',(req,res) => res.send(conf.FB));
server.listen(PORT,() => console.log(`The bot server is running on port ${PORT}`));