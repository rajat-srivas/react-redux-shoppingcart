export const AddItemToCartAction = item => ({
    type: 'Add_To_Cart',
    payload: item
});

export const ShowCartItemAction = item => ({
    type: 'Show_Cart_Items'
})

export const IncreaseItemCountInCartAction = item => ({
    type: 'Increase_Item_Count_Cart',
    payload: item
})

export const DecreaseItemCountInCartAction = item => ({
    type: 'Decrease_Item_Count_Cart',
    payload: item
})