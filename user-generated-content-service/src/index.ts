const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 7401;
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./ugc/index')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`User Generated Service Server is up on port ${port}!`);
 });