import React from 'react'; // Import React
import { Routes, Route } from 'react-router-dom';
import Product from './frontend/components/pages/Product';
import Home from './frontend/components/pages/Home';
import ProductList from './frontend/components/pages/ProductList';
import Register from './frontend/components/pages/Register';
import Login from './frontend/components/pages/Login';
import Cart from './frontend/components/pages/Cart';

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