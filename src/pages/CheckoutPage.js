import React, { useState } from 'react';
import NavBar from '../components/NavBar';

function CheckoutPage({ cart }) {
  const [form, setForm] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateCardNumber = (num) => /^\d{16}$/.test(num);
  const validateExpiry = (date) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(date);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, address, cardNumber, expiryDate } = form;

    if (!name || !address || !cardNumber || !expiryDate) {
      setError('Please fill out all fields.');
      setSubmitted(false);
      return;
    }

    if (!validateCardNumber(cardNumber)) {
      setError('Invalid card number. It must be 16 digits.');
      setSubmitted(false);
      return;
    }

    if (!validateExpiry(expiryDate)) {
      setError('Invalid expiry date. Use MM/YY format.');
      setSubmitted(false);
      return;
    }

    // If all validations pass
    setError('');
    setSubmitted(true);
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '30px auto',
      padding: '20px',
      backgroundColor: '#f7fff7',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Segoe UI, sans-serif',
    },
    sectionTitle: {
      fontSize: '24px',
      marginBottom: '15px',
      color: '#2f855a',
      borderBottom: '2px solid #c6f6d5',
      paddingBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '15px',
      border: '1px solid #cbd5e0',
      borderRadius: '5px',
      fontSize: '16px',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
      color: '#2f855a',
    },
    button: {
      backgroundColor: '#38a169',
      color: 'white',
      padding: '12px 20px',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
    error: {
      color: '#e53e3e',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    success: {
      color: '#38a169',
      fontWeight: 'bold',
      fontSize: '20px',
      textAlign: 'center',
      backgroundColor: '#e6fffa',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '20px',
    },
  };

  const total = cart?.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <NavBar />
      <div style={styles.container}>
        <h1 style={{ color: '#2f855a', textAlign: 'center' }}>Checkout</h1>

        {!cart || cart.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#718096' }}>Your cart is empty.</p>
        ) : (
          <>
            <h2 style={styles.sectionTitle}>🧾 Order Summary</h2>
            <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', border: '1px solid #c6f6d5' }}>
              {cart.map(item => (
                <div key={item.id} style={{ marginBottom: '10px' }}>
                  <strong>{item.name}</strong> × {item.quantity} — ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              ))}
              <hr />
              <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Total: ₹{total}</div>
            </div>

            <h2 style={styles.sectionTitle}>🚚 Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={styles.label}>Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                style={styles.input}
              />

              <label htmlFor="address" style={styles.label}>Address:</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={form.address}
                onChange={handleChange}
                style={{ ...styles.input, resize: 'vertical' }}
              ></textarea>

              <h2 style={styles.sectionTitle}>💳 Payment Information</h2>

              <label htmlFor="cardNumber" style={styles.label}>Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                style={styles.input}
              />

              <label htmlFor="expiryDate" style={styles.label}>Expiry Date (MM/YY):</label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                value={form.expiryDate}
                onChange={handleChange}
                style={styles.input}
              />

              {error && <div style={styles.error}>❌ {error}</div>}
              <button type="submit" style={styles.button}>Submit Order</button>

              {submitted && (
                <div style={styles.success}>
                  ✅ Order placed successfully!
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
