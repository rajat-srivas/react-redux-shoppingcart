const Initial_State = {
    cartItem: [],
    showCart: false
};

const CartReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case 'Add_To_Cart':
            return {
                ...state,
                cartItem: addItemToCart(state.cartItem, action.payload)
            }
        case 'Show_Cart_Items':
            return {
                ...state,
                showCart: !state.showCart
            }
        case 'Increase_Item_Count_Cart':
            return {
                ...state,
                cartItem: AddExistingItemToCart(state.cartItem, action.payload)
            }
        case 'Decrease_Item_Count_Cart':
            return {
                ...state,
                cartItem: RemoveExistingItemFromCart(state.cartItem, action.payload)
            }
        default:
            return state;
    }
}

const AddExistingItemToCart = ((cartItems, itemToAdd) => {
    return cartItems.map(item =>
        item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
    )
});

const RemoveExistingItemFromCart = ((cartItems, itemToRemove) => {

    const existingItem = cartItems.find(item => item.id === itemToRemove.id);
    console.log(existingItem);
    let newItem = [];
    if (existingItem.count <= 1) {
        newItem = cartItems.filter((item) => (item.id !== existingItem.id))
    }
    else {
        newItem = cartItems.map(item =>
            item.id === itemToRemove.id ? { ...item, count: item.count - 1 } : item
        )
    }
    return newItem;
});

const addItemToCart = ((cartItems, itemToAdd) => {
    const existingItem = cartItems.find(item => item.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(item =>
            item.id === itemToAdd.id ? { ...item, count: item.count + 1 } : item
        )
    }
    else {
        return [...cartItems, { ...itemToAdd, count: 1 }]
    }
});

export default CartReducer;