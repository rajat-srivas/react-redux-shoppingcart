import Product_Data from '../../component/product-page/products-data'
const Initial_State = {
    productsCollection: Product_Data
}

const ProductReducer = (state = Initial_State, action) => {
    switch (action.type) {
        case 'Get_All_Product':
            return state
        default:
            return state;
    }
}

export default ProductReducer;