const logger = require('../logger');

interface Metadata {
    title: string[];
    description: string;
    seo: Seo;
}

interface Seo {
    keywords: string[];
    description: string;
    robots?: string;
    title: string;
    url: string;
}

module.exports = function(app){
    app.get("/api/metadata", (req, res) => {
        logger.log('info', '%s', req.originalUrl);
    
        const mockData: Metadata = {
            title:['Shoes'],
            description:'Volleyball Shoes',
            seo: {
            keywords: ['Sports Shoe', 'Shoes'],
            description: 'Sports Shoe',
            title: 'Sports Shoe',
            url: '/shoes',
            }
        };
    
        res
        .header("")
        .status(200)
        .json(mockData);
    });
};