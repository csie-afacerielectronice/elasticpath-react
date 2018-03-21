import React, {Component} from 'react';
import Product from '../components/Product';

class ProductsContainer extends Component {
    render() {

        return (
            <div className="products">
                <h2>Products</h2>
                {this.props.products.map((product) => (
                    <Product data={product} key={product.id} AddProduct={this.props.AddProduct}/>
                ))}
            </div>
        );
    }
}

export default ProductsContainer;