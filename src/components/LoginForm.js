import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginForm.module.css'; // Import the CSS module

function LoginForm() {
    const [identifier, setIdentifier] = useState(''); // Could be username or email
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setError(''); // Clear any previous errors

        if (!identifier || !password) {
            setError('Please enter your username/email and password.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ identifier, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Login successful:', data);
                const token = data.token;
                if (token) {
                    localStorage.setItem('authToken', token);
                    navigate('/home'); // Redirect to the homepage
                } else {
                    setError('Login successful, but no token received.');
                }
            } else {
                setError(data.message || 'Login failed. Invalid credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            setError('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <div className={styles.container}> {/* Use styles.container */}
            <h2 className={styles.heading}>Login</h2> {/* Use styles.heading */}
            {error && <p className={styles.error}>{error}</p>} {/* Use styles.error */}
            <form onSubmit={handleLogin}>
                <div className={styles.formGroup}> {/* Use styles.formGroup */}
                    <label htmlFor="login-identifier" className={styles.label}>Username or Email:</label> {/* Use styles.label */}
                    <input
                        type="text"
                        id="login-identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                        className={styles.input} // Use styles.input
                        required
                    />
                </div>
                <div className={styles.formGroup}> {/* Use styles.formGroup */}
                    <label htmlFor="login-password" className={styles.label}>Password:</label> {/* Use styles.label */}
                    <input
                        type="password"
                        id="login-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input} // Use styles.input
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>Login</button> {/* Use styles.button */}
                <p className={styles.signupLink}> {/* Use styles.signupLink */}
                    Don't have an account? <Link to="/signup/form">Sign Up</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;