
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from './pages/Product';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

const App = () => {

const [backendData, setBackendData] = useState([{}]);

useEffect(() => {
  fetch('/').then(
    response => response.json()
  ).then(
    data => {
    setBackendData(data);
    }
  )
}, []);

  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
      <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
       <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:productId" element={<Product />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </div>
    </div>
  );

}

export default App;