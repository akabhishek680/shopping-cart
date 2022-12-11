import React from 'react';

class CartItems extends React.Component {

    
    increaseQuantity = (prodId) => this.props.increaseQuantity(prodId);
    decreaseQuantity = (prodId) => this.props.decreaseQuantity(prodId);
    deleteProduct = (prodId) => this.props.deleteProduct(prodId);

    render() {
        const { type, model, price, qty, imgSrc } = this.props.product;

        return (
            <React.Fragment>
                <div style = {style.product}>
                    <div><img style = { style.productIcon } src={imgSrc}/></div>
                    <div>
                        <strong>{type}: </strong> {model} <br/>
                        <strong>Rs: </strong> {price}/- <br/>
                        <strong>Qty: </strong> {qty} <br/>
                        <span>
                            <img style = {style.qtyIcon} onClick={ () => {this.increaseQuantity(this.props.product.id)}} src="https://cdn-icons-png.flaticon.com/512/8979/8979048.png" />
                            <img style = {{...style.qtyIcon, ...style.qtyIconMargin}} onClick={ () => {this.decreaseQuantity(this.props.product.id)}} src="https://cdn-icons-png.flaticon.com/512/56/56889.png" />
                            <img style = {{...style.qtyIcon, ...style.qtyIconMargin}} onClick={ () => {this.deleteProduct(this.props.product.id)}} src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png" />
                        </span>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const style = {

    product: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 15
    },

    productIcon: {
        width: 100,
        height: 100,
        padding: '0px 60px 0px 40px'
    },

    qtyIcon: {

        width: 20,
        height: 20,
        marginTop: 10,
        cursor: 'pointer',
    },

    qtyIconMargin: {
        marginLeft: 5
    },

    productDetails: {

    }
}


export default CartItems;