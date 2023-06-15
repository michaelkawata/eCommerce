import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Product from './components/pages/Product';
import Home from './components/pages/Home';
import ProductList from './components/pages/ProductList';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Cart from './components/pages/Cart';

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/register"element={user ? <Navigate to="/" /> : <Register />}/>
      <Route path="/login" element={user ? <Navigate to="/login" /> : <Login />}/>
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
