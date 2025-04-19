// bulkbasket-frontend/src/App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CombinedLoginForm from './components/CombinedLoginForm';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ProductCatalogPage from './pages/catalog';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './components/HomePage';
import logo from './components/images/logo.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('bulkBasketCart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('bulkBasketCart', JSON.stringify(cart));
  }, [cart]);

  // ✅ Handle Add to Cart
  const handleAddToCart = (productToAdd) => {
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === productToAdd.id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  // ✅ Handle Quantity Change
  const handleQuantityChange = (itemId, newQuantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  };

  // ✅ Handle Remove Item
  const handleRemoveItem = (itemIdToRemove) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemIdToRemove));
  };

  return (
    <Router>
      <div>
        {/* ✅ Header */}
        <header
          style={{
            backgroundColor: '#f8f8f8',
            padding: '10px',
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/vegetables-doodle-pattern-illustration-backgrounds-card-posters-banners-vector-icons_668389-1546.jpg?w=996')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '10px',
            }}
          >
            <img
              src={logo}
              alt="BulkBasket Logo"
              style={{
                height: '60px',
                width: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <h1
              style={{
                color: '#28a745',
                fontFamily: 'cursive',
                margin: 0,
              }}
            >
              BulkBasket
            </h1>
          </div>
        </header>

        {/* ✅ Main */}
        <main
          style={{
            padding: '20px',
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/vegetables-doodle-pattern-illustration-backgrounds-card-posters-banners-vector-icons_668389-1546.jpg?w=996')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
          }}
        >
          <Routes>
            <Route path="/" element={<CombinedLoginForm />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<CombinedLoginForm />} />
            <Route path="/login/form" element={<LoginForm />} />
            <Route path="/signup" element={<CombinedLoginForm />} />
            <Route path="/signup/form" element={<SignUpForm />} />
            <Route
              path="/products"
              element={<ProductCatalogPage onAddToCart={handleAddToCart} />}
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  onQuantityChange={handleQuantityChange}
                  onRemoveItem={handleRemoveItem}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          </Routes>
        </main>

        {/* ✅ Footer */}
        <footer
          style={{
            textAlign: 'center',
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f8f8f8',
            borderTop: '1px solid #ccc',
          }}
        >
          <p>&copy; 2025 BulkBasket</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
