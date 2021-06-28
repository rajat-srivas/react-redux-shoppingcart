import React from 'react';
import './product-page.style.css';
// import Product_Data from './products-data';
import ProductItem from '../product/product.component';
import { connect } from 'react-redux';


class ProductPage extends React.Component {

    render() {
        const { collections } = this.props;
        return (
            <div className="products-page">
                {
                    collections.map(
                        (item) => (
                            <ProductItem className='product-item' key={item.id} item={item} />
                        )
                    )
                }
            </div>
        )
    }
}

const getStateForProps = (state) => ({
    collections: state.product.productsCollection
})

export default connect(getStateForProps)(ProductPage);