
import {React, Component} from 'react';

import './Product.scss';
import SizeChart from '../../shared/size-chart/SizeChart';

class Product extends Component {
    state = {  }
    render() {
        const product = this.props.product;
        return (
            <div className="product-cls">
                <section className="header">
                    <div className="product-type">{ product.type }</div>
                    <div>Rating: { product.rating }</div>
                    <div>Reviews: { product.review }</div>
                </section>
                <section className="title">
                    <div>{ product.title }</div>
                </section>
                <section className="sub-title">
                    <div>{ product.description.join(' / ') }</div>
                </section>
                <section className="price">
                    <div>&#8364; { product.price}</div>
                </section>
                <section className="size-chart">
                    <SizeChart options={product.size}></SizeChart>
                </section>
                <section className="cart"></section>
            </div>
        );
    }
}

export default Product;
