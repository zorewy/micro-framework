const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const config = require('./config/index');
let app = express();

app.listen(config.port, () => console.log(111))