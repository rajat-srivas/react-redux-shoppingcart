import React from 'react'
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg'
import './header.style.css'
import { connect } from 'react-redux';
import Cart from '../cart/cart.component'
import { ShowCartItemAction } from '../../redux/cart/cart.action';

const Header = ({ cartItems, showCart, showCartClick }) => (
    <div className="container">
        <div className="navbar">
            <h2 className="logo">Gamerz</h2>
            <div className="cart-header">
                <CartIcon className='cart-icon' onClick={showCartClick} />
                {
                    getItemsCount(cartItems) > 0 ?
                        <span className='item-counter'>{getItemsCount(cartItems)}</span> : ''
                }
            </div>
        </div>
        {
            showCart ? <Cart /> : ''
        }
    </div>

)


const getItemsCount = (cartItems) => {
    let cartItemCount = 0;
    cartItems.forEach(item => {
        cartItemCount = cartItemCount + item.count
    });
    return cartItemCount;
}

const getStateForProps = (state) => ({
    cartItems: state.cart.cartItem,
    showCart: state.cart.showCart
})

const mapStateToProps = dispath => ({
    showCartClick: () => dispath(ShowCartItemAction())
})

export default connect(getStateForProps, mapStateToProps)(Header);