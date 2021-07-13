const logger = require('../logger');
const got = require('got');

const METADATA_SERVICE_URI = process.env.METADATA_SERVICE_URI;
const PRODUCT_SERVICE_URI = process.env.PRODUCT_SERVICE_URI;
const UGC_SERVICE_URI = process.env.UGC_SERVICE_URI;

module.exports = function(app){
    app.get("/api/pdp", async (req, res) => {
        logger.log('info', '%s', req.originalUrl);

        const metaDataResult = await got.get(`${METADATA_SERVICE_URI}/api/metadata`).json();
        const productResult = await got.get(`${PRODUCT_SERVICE_URI}/api/product`).json();
        const ugcResult = await got.get(`${UGC_SERVICE_URI}/api/ugc`).json();
    
        res
        .header("")
        .status(200)
        .json({
            metadata: metaDataResult,
            product: productResult,
            ugc: ugcResult
        });
    });
};