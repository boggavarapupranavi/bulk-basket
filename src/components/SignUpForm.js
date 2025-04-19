import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './SignUpForm.module.css'; // Import the CSS module

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    setError(''); // Clear any previous errors

    if (!username || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Basic email validation (you might want a more robust solution)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration successful:', data);
        // Optionally redirect to login page or display a success message
        navigate('/login/form');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}> {/* Use styles.container */}
      <h2 className={styles.heading}>Sign Up</h2> {/* Use styles.heading */}
      {error && <p className={styles.error}>{error}</p>} {/* Use styles.error */}
      <form onSubmit={handleSignUp}>
        <div className={styles.formGroup}> {/* Use styles.formGroup */}
          <label htmlFor="signup-username" className={styles.label}>Username:</label> {/* Use styles.label */}
          <input
            type="text"
            id="signup-username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.input} // Use styles.input
            required
          />
        </div>
        <div className={styles.formGroup}> {/* Use styles.formGroup */}
          <label htmlFor="signup-email" className={styles.label}>Email:</label> {/* Use styles.label */}
          <input
            type="email"
            id="signup-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input} // Use styles.input
            required
          />
        </div>
        <div className={styles.formGroup}> {/* Use styles.formGroup */}
          <label htmlFor="signup-password" className={styles.label}>Password:</label> {/* Use styles.label */}
          <input
            type="password"
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input} // Use styles.input
            required
          />
        </div>
        <div className={styles.formGroup}> {/* Use styles.formGroup */}
          <label htmlFor="signup-confirm-password" className={styles.label}>Confirm Password:</label> {/* Use styles.label */}
          <input
            type="password"
            id="signup-confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.input} // Use styles.input
            required
          />
        </div>
        <button type="submit" className={styles.button}>Create Account</button> {/* Use styles.button */}
        <p className={styles.loginLink}> {/* Use styles.loginLink */}
          Already have an account? <Link to="/login/form">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;