
import React from 'react';
import NavBar from '../components/NavBar'; 

function CartDisplay({ cart, onQuantityChange, onRemoveItem }) {
    if (cart.length === 0) {
        return (
          <div style={{
            textAlign: 'center',
            marginTop: '60px',
            padding: '30px',
            color: '#4CAF50',
            backgroundColor: '#f0fdf4',
            borderRadius: '12px',
            maxWidth: '600px',
            margin: '60px auto'
          }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              style={{ width: '150px', marginBottom: '20px', opacity: 0.8 }}
            />
            <h2 style={{ fontSize: '28px', marginBottom: '10px' }}>Your cart is empty</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>Looks like you haven't added anything yet.</p>
            <a
              href="/products"
              style={{
                padding: '10px 20px',
                backgroundColor: '#4CAF50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '16px'
              }}
            >
              🛍️ Continue Shopping
            </a>
          </div>
        );
      }
      

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px', color: '#333' }}>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid #ddd',
          borderRadius: '10px',
          padding: '15px 20px',
          marginBottom: '15px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ flex: '1', fontWeight: '500', fontSize: '16px' }}>{item.name}</div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              style={{
                backgroundColor: '#e0f5e0',
                color: '#2e7d32',
                border: '1px solid #c8e6c9',
                borderRadius: '5px',
                padding: '4px 10px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >−</button>

            <span style={{ fontSize: '16px' }}>{item.quantity}</span>

            <button
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              style={{
                backgroundColor: '#e0f5e0',
                color: '#2e7d32',
                border: '1px solid #c8e6c9',
                borderRadius: '5px',
                padding: '4px 10px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >+</button>
          </div>

          <div style={{ fontSize: '16px', width: '100px', textAlign: 'right' }}>
            ₹{(item.price * item.quantity).toFixed(2)}
          </div>

          <button
            onClick={() => onRemoveItem(item.id)}
            style={{
              marginLeft: '15px',
              backgroundColor: '#ffebee',
              color: '#c62828',
              border: '1px solid #ffcdd2',
              borderRadius: '5px',
              padding: '5px 10px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >Remove</button>
        </div>
      ))}

      <div style={{
        textAlign: 'right',
        fontSize: '20px',
        fontWeight: '600',
        marginTop: '30px',
        color: '#2e7d32'
      }}>
        Total: ₹{total}
      </div>
    </div>
  );
}

function CartPage({ cart, onQuantityChange, onRemoveItem }) {
  return (
    <div style={{ backgroundColor: '#f4fdf4', minHeight: '100vh' }}>
      <NavBar />
      <div style={{ padding: '40px 20px' }}>
        <CartDisplay
          cart={cart}
          onQuantityChange={onQuantityChange}
          onRemoveItem={onRemoveItem}
        />
      </div>
    </div>
  );
}

export default CartPage;
