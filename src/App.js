import React from 'react';
import './App.css';
import CartList from './components/CartList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

class App extends React.Component {

  constructor() {
    super();

    this.state = {

      product: [
        {
          type: 'Mobile',
          model: 'Google pixel',
          price: '40000',
          qty: 0,
          imgSrc : 'https://cdn-icons-png.flaticon.com/512/2586/2586488.png',
          id: 1
        },
        {
          type: 'Laptop',
          model: 'Dell',
          price: '70000',
          qty: 0,
          imgSrc : 'https://cdn-icons-png.flaticon.com/512/610/610021.png',
          id: 2
        },
        {
          type: 'TV',
          model: 'Sony',
          price: '120000',
          qty: 0,
          imgSrc : 'https://cdn-icons-png.flaticon.com/512/1023/1023572.png',
          id: 3
        }
      ]
    }
  }

  increaseQuantity = (productId) => {

    let { product } = this.state;
    let index = this.state.product.findIndex(obj => obj.id === productId);

    product[index].qty = product[index].qty + 1;

    this.setState(
      {
        product: product
      }
    )

  }

  decreaseQuantity = (productId) => {

    let { product } = this.state;
    let index = this.state.product.findIndex(obj => obj.id === productId);

    if(product[index].qty > 0) {
      product[index].qty = product[index].qty - 1;
    }
    
    this.setState(
      {
        product: product
      }
    )
  }

  deleteProduct = (productId) => {
    
    this.setState((prevState) => {

      let newState = prevState.product.filter((obj) => obj.id !== productId);

      return {product: newState};
    },() => {
      this.calculateTotalAmount();
    })
  }

  calculateTotalAmount = () => {

    let { product } = this.state;
    let totalAmount = 0;

    for(let prod of product) {

      if(parseInt(prod.qty) > 0) {
        totalAmount += parseInt(prod.qty) * parseInt(prod.price);
      }
    }
    
    return totalAmount;
  }

  render() {

    return (
      <React.Fragment>
        <Navbar />
        <CartList 
          product = { this.state.product } 
          increaseQuantity = { this.increaseQuantity }
          decreaseQuantity = { this.decreaseQuantity }
          deleteProduct = { this.deleteProduct }
          key={ this.state.product.id }
        />
        <Footer calculateTotalAmount = { this.calculateTotalAmount } />
      </React.Fragment>
    );

  }
}


export default App;
