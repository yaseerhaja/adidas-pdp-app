import './App.scss';

import UserGeneratedContent from './user-generated-content/UserGeneratedContent';
import Product from './product/Product';
import ProductDescription from './product-description/ProductDescription';
import { Component } from 'react';

const initialState = {
  ugc: null,
  product: null,
  metadata: null
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount(){
    this.getProductDetails();
  }

  getProductDetails(){
    fetch('http://localhost:7000/api/product')
          .then(res => res.json())
          .then(data => {
            this.setState({
              ugc: data.ugc,
              product: data.product,
              metadata: data.metadata,
            });
          });
  }
  render() {
    return (
      <div className="App">
        <section className="flex-container">
            <div className="flex-item-product">
                {
                  this.state.ugc && 
                  <UserGeneratedContent usercontent={this.state.ugc}></UserGeneratedContent>
                }
                {
                  this.state.product && 
                  <Product product={this.state.product}></Product>
                }
              
            </div>
            <div className="flex-item-product-description">
              {
                this.state.product && 
                <ProductDescription specification={this.state.product.specification}></ProductDescription>
              }
              
            </div>
        </section>
      </div>
    )
  }
  
  reset() {
    this.setState(initialState);
  }
}

export default App;
