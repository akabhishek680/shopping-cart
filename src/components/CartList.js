import React from 'react';
import CartItems from './CartItems';

class CartList extends React.Component {

    constructor() {

        super();
    }

    render() {
        const { product } = this.props;
        
        return(
            <React.Fragment>
                {
                    product.map((prod) => {
                        return <CartItems 
                                    product = { prod } 
                                    increaseQuantity = { this.props.increaseQuantity } 
                                    decreaseQuantity = { this.props.decreaseQuantity }
                                    deleteProduct = { this.props.deleteProduct }
                                    key = { prod.id }
                                />
                    })
                }
                
            </React.Fragment>
        )
    }
}

export default CartList;