const logger = require('../logger');
const got = require('got');

const PDP_SERVICE_URI = process.env.PDP_SERVICE_URI;

module.exports = function(app){
    app.get("/api/product", async (req, res) => {
        logger.log('info', '%s', req.originalUrl);
    
        const dataResult = await got.get(`${PDP_SERVICE_URI}/api/pdp`).json();
       
        res
        .header("")
        .status(200)
        .json(dataResult);
    });
};