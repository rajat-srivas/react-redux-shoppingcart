import React from 'react';
import './product.style.css'
import { AddItemToCartAction } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
// import ProductImage from '../../assets/Products/product2.jpeg';

const ProductItem = ({ item, addItem }) => (
    <div className="game-card">
        <div className="game-images">
            <img src={item.imageSrc} alt="" />
        </div>
        <div className="game-details">
            <span className="game-title">{item.title}</span>
            <span className="description">{item.desription}</span>
            <span className="price">${item.price}</span>
            <button onClick={() => addItem(item)} className="cta-add">Add To Cart</button>
        </div>
    </div>
)

const mapDispatchToProps = dispath => ({
    addItem: item => dispath(AddItemToCartAction(item))
});

export default connect(null, mapDispatchToProps)(ProductItem);