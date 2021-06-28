import React from 'react';
import './cart.style.css';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component'


class Cart extends React.Component {


    render() {
        const { cartItems } = this.props;
        return (
            <div className="cart">
                {
                    cartItems.length > 0 ?
                        <section>
                            <div className="cart-products">
                                {
                                    cartItems.map(
                                        (item) => (
                                            <CartItem className='cartitem' key={item.id} item={item} />
                                        )
                                    )
                                }
                            </div>

                            <div className="checkout">
                                <div className="price">
                                    <span className='label'>Subtotal:</span>
                                    <span className='subtotal'> ${getSubtotalPrice(cartItems)}</span>
                                </div>
                                <button>Checkout</button>
                            </div>
                        </section>
                        : <h2 className='empty'>Your Gamerz Cart is empty!</h2>
                }
            </div>
        )
    }
}

const getSubtotalPrice = (items) => {
    let subtotal = 0;
    items.forEach(item => {
        subtotal = subtotal + (item.price * item.count)
    })
    return subtotal;
}

const getStateForProps = (state) => ({
    cartItems: state.cart.cartItem
})

export default connect(getStateForProps)(Cart);