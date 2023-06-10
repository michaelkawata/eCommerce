import React from 'react'; // Import React
import { Routes, Route } from 'react-router-dom';
import Product from './frontend/pages/Product';
import Home from './frontend/pages/Home';
import ProductList from './frontend/pages/ProductList';
import Register from './frontend/pages/Register';
import Login from './frontend/pages/Login';
import Cart from './frontend/pages/Cart';

const App = () => {
  return (
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
  );
};

export default App;