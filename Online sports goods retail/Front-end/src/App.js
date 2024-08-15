import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Blog from './components/Blog';
import Profilepage from './components/Profilepage';
import SportItem from './components/SportItem';
import Football from './components/Football';
import Basketball from './components/Basketball';
import Tennis from './components/Tennis';
import Baseball from './components/Baseball';
import Hockey from './components/Hockey';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import RegistrationPage from './components/Registration';
import ConfirmationPage from './components/Confirm';
import Chatbot from './components/Chatbot';
import MyStore from './components/MyStore';
import StoreInfo from './components/MyStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';



function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalAmount(totalAmount + parseFloat(item.price.slice(1)));
  };

  const removeFromCart = (index) => {
    const item = cart[index];
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    setTotalAmount(totalAmount - parseFloat(item.price.slice(1)));
  };

  const handleCheckout = () => {
    // Simulate placing the order
    setCart([]);
    setTotalAmount(0);
    alert('Your order has been placed successfully!');
  };

  return (
    <div>
      <Router>
        <Navbar cart={cart} totalAmount={totalAmount} removeFromCart={removeFromCart} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/reg' element={<Register />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path="/my-store" element={<MyStore />} />
          <Route exact path='/prof' element={<Profilepage />} />
          
          <Route exact path='/item/:id' element={<SportItem />} />
          <Route exact path='/football' element={<Football addToCart={addToCart} />} />
          <Route exact path='/basketball' element={<Basketball addToCart={addToCart} />} />
          <Route exact path='/tennis' element={<Tennis addToCart={addToCart} />} />
          <Route exact path='/baseball' element={<Baseball addToCart={addToCart} />} />
          <Route exact path='/hockey' element={<Hockey addToCart={addToCart} />} />
          <Route exact path='/register' element={<RegistrationPage addToCart={addToCart} />} />
          <Route exact path='/cart' element={<Cart cart={cart} totalAmount={totalAmount} removeFromCart={removeFromCart} handleCheckout={handleCheckout} />} />
          <Route exact path='/confirm' element={<ConfirmationPage/>} />
          <Route exact path='/store' element={<StoreInfo/>} />
          
        </Routes>
      </Router>
      <Chatbot/>
    </div>
  );
}

export default App;
