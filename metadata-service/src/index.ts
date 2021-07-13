const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 7201;
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./metadata/index')(app);

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });