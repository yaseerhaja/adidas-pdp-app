const logger = require('../logger');

interface Product {
    title: string;
    description: string[];
    price: number;
    size: number[];
    rating: number;
    type: string;
    review: number;
    specification: Specification
}

interface Specification {
    title: string;
    subtitle: string;
    content: string[];
}

module.exports = function(app){
    app.get("/api/product", (req, res) => {
        logger.log('info', '%s', req.originalUrl);
    
        const mockData: Product = {
            title: 'Court Team Bounce Indoor Shoes',
            description: ['Core Black', 'Cloud White', 'Grey Four'],
            price: 70,
            size: [3, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
            rating: 5,
            review: 25,
            type: 'Volleyball',
            specification: {
                title: 'Court Team Bounce Indoor Shoes',
                subtitle:'Cushioned Shoes for Owning Indoor Courts',
                content:[
                    'Flying takes on a new meaning. With a lightweight mesh upper that locks your foot in with every jump and a responsive Bounce midsole, which is perfectly tuned for vertical movement, this adidas Novaflight indoor shoe helps you dominate in the air.',
                    'The Court Performance System outsole keeps you in the game when you return to earth. Flattened edges and multi-directional grip let you move responsively in a way that feels natural.'
                ]
            }
        };
    
        res
        .header("")
        .status(200)
        .json(mockData);
    });
};