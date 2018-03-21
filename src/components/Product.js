import React, {Component} from 'react'

class Product extends Component {
    
    render() {

        const product = this.props.data;

        return (
            <div className="product">
                <h3 className="product-title">{product.name}</h3>
                <div className="product-description">{product.description}</div>
                <div className="product-price">{product.meta.display_price.with_tax.formatted}</div>
            </div>
        );
    }
}

export default Product;