import React from 'react';
import './cart-item.style.css'
import { connect } from 'react-redux';
import { DecreaseItemCountInCartAction, IncreaseItemCountInCartAction } from '../../redux/cart/cart.action';

const CartItem = ({ item, increaseItem, decreaseItem }) => (

    <div className="cart-item">
        <div className="image">
            <img src={item.imageSrc} alt="" />

        </div>

        <div className="info">
            <div className="detail">
                <p className='title'>{item.title}</p>
                <p className='price' >Price: ${item.price}</p>
            </div>

            <div className="counter-btn">
                <button onClick={() => increaseItem(item)} className='plus'>+</button>
                <button onClick={() => decreaseItem(item)} className='minus'>-</button>
                <p className="quantity">Quantity: {item.count}</p>
            </div>
        </div>

    </div >

);

const mapPropsToState = dispath => ({
    increaseItem: item => dispath(IncreaseItemCountInCartAction(item)),
    decreaseItem: item => dispath(DecreaseItemCountInCartAction(item))
})

export default connect(null, mapPropsToState)(CartItem);