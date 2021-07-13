const path = require('path');
import cors  = require('cors');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
import {default as swaggerDoument} from './swagger.json';
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 7000;
const publicPath = path.join(__dirname, '..', 'build');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true
  })
);

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoument));

require('./gateway/index')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, '../build/index.html'));
 });

app.listen(port, () => {
    console.log(`API Gateway Server is up on port ${port}!`);
 });