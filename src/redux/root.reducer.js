import { combineReducers } from "redux";
import CartReducer from './cart/cart.reducer';
import ProductReducer from './product/product.reducer';

export default combineReducers({
    product: ProductReducer,
    cart: CartReducer
})