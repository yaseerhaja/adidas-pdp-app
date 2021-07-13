const path = require('path');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 7301;
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({
    extended: true
}));

require('./product/index')(app);

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });