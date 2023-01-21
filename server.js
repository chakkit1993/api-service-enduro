'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
var bodyparser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const config = require('./config');


app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));



    
 app.use("/api/v1/", require("./routes/todos-route"));
 app.use('/api/doc/', swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
