
import {React, Component} from 'react';

import './Product.scss';
import SizeChart from '../../shared/size-chart/SizeChart';
import StarLogo from '../../assets/images/star.svg';
import ForwardLogo from '../../assets/images/forward.svg';

class Product extends Component {
    state = {  }
    render() {
        const product = this.props.product;
        return (
            <div className="product-cls">
                <section className="header">
                    <div className="product-type">{ product.type }</div>
                    <div className="rating">{
                        (Array.from(String('12345'), Number)).map((entry, index) => (
                            <img className="star-img" key={index} src={StarLogo} />
                        ))
                        }
                        <a href="" >{ product.review }</a>
                    </div>
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
                <section className="cart">
                    <button type="button" className="cart-btn"  title="In the shopping cart">In the shopping cart<img src={ForwardLogo} /></button>
                </section>
            </div>
        );
    }
}

export default Product;
