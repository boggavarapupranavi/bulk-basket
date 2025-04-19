import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the authentication token from localStorage
    localStorage.removeItem('authToken');
    console.log('User logged out');
    // Redirect the user to the login page
    navigate('/login');
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 30px', 
      backgroundColor: '#81C784', /* Light green background */
      borderBottom: '2px solid #4CAF50', /* Darker green border */
    }}>
      <ul style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        display: 'flex', 
        gap: '30px', 
        justifyContent: 'center', /* Center the links */
        flex: 1, /* Make the list take all available space */
      }}>
        <li>
          <Link to="/home" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Home</Link>
        </li>
        <li>
          <Link to="/products" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Products</Link>
        </li>
        <li>
          <Link to="/cart" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Cart</Link>
        </li>
        <li>
          <Link to="/checkout" style={{ textDecoration: 'none', color: '#fff', fontWeight: '500' }}>Checkout</Link>
        </li>
      </ul>
      <button
        style={{ 
          padding: '8px 15px', 
          backgroundColor: '#388E3C', /* Darker green for button */
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: '500',
        }}
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default NavBar;
