import React, {Component} from 'react'

class CartContainer extends Component {
    render() {
        const count = this.props.cart.data.length;

        return (
            <div className="cart">
                <h2>Cart ({count})</h2>
                <ul>
                    {this.props.cart.data.map((item) => (
                        <li key={item.id}>{item.quantity} x {item.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CartContainer;