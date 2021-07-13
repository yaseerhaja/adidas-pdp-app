const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 7100;
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
require('./pdp/index')(app);

app.listen(port, () => {
    console.log(`Product Description Page Service Server is up on port ${port}!`);
 });