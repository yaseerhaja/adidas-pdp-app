
import {React, Component} from 'react';

import './ProductDescription.scss';

class ProductDescription extends Component {
    state = {  }
    render() {
        const specification = this.props.specification
        return (
            <div className="product-description-cls">
                <h3>{specification?.title}</h3>
                <span>{specification?.subtitle}</span>
                {
                    specification?.content.map((entry, index) => (
                        <p key={index}>{entry}</p>
                    ))
                }
            </div>
        );
    }
}

export default ProductDescription;
