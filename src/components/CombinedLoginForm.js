import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CombinedLoginForm.module.css'; // Import the CSS module

function CombinedLoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to BulkBasket</h1>
      <p style={{ marginBottom: '20px', color: '#555' }}>Please choose an option:</p>
      <div className={styles.options}>
        <Link to="/login/form" className={styles.loginButton}>
          Login
        </Link>
        <Link to="/signup/form" className={styles.signupButton}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default CombinedLoginForm;