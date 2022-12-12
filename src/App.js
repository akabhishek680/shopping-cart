import React from 'react';
import './App.css';
import CartList from './components/CartList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import db from './firebase';
import { doc, collection, onSnapshot, updateDoc, deleteDoc  } from 'firebase/firestore';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      product : []
    }
  }

  componentDidMount = () => {

    const collectionReference = collection(db, 'product');
    onSnapshot(collectionReference, (snapshot) => {

      let productData = snapshot.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })

      this.setState({
        product: productData
      });
    })

  }

  increaseQuantity = (productId) => {

    let { product } = this.state;
    let index = this.state.product.findIndex(obj => obj.id === productId);
    
    try {

      const collectionReference = collection(db, 'product');
      const docReference = doc(collectionReference, productId);
      updateDoc(docReference, { qty: product[index].qty + 1});

    } catch(error){

      console.log('error in increasing quantity', error);
    }

  }
  

  decreaseQuantity = (productId) => {

    let { product } = this.state;
    let index = this.state.product.findIndex(obj => obj.id === productId);

    if(product[index].qty > 0) {
      
      try {

        const collectionReference = collection(db, 'product');
        const docReference = doc(collectionReference, productId);
        updateDoc(docReference, { qty: product[index].qty - 1});

      } catch(error) {

        console.log('error in decreasing quantity', error);
      }
    }
    
    
  }

  deleteProduct = (productId) => {

    const docRef = doc(db, 'product', productId);
    deleteDoc(docRef)
      .then(() => {
        console.log('product deleted successfully');
        this.calculateTotalAmount();
      })
      .catch((error) => {
        console.log('error in deleting cart item');
      })
    
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
