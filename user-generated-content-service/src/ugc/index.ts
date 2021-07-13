const logger = require('../logger');

interface Content {
    cdnURL: string;
    images:string[];
    videos?:string[];
}

module.exports = function(app){
    app.get("/api/ugc", (req, res) => {
        logger.log('info', '%s', req.originalUrl);
    
        const mockData: Content = {
            cdnURL: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4adf0d31263d46dd97c7ac050099e2a6_9366',
            images: [
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_01_standard.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_02_standard_hover.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_03_standard.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_04_standard.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_05_standard.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_06_standard.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_41_detail.jpg',
               'Court_Team_Bounce_Indoor_Schoenen_Zwart_FX1804_42_detail.jpg'
            ]
        };
    
        res
        .header("")
        .status(200)
        .json(mockData);
    });
};