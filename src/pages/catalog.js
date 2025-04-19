import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

function ProductCatalogPage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCartClick = (product) => {
    onAddToCart(product);
    navigate('/cart');
  };

  const styles = {
    page: {
      backgroundColor: '#f7fafc',
      minHeight: '100vh',
      fontFamily: 'Segoe UI, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '36px',
      color: '#2f855a',
      padding: '30px 0',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '25px',
      padding: '20px 40px',
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'scale(1.03)',
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.12)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '15px',
    },
    name: {
      fontSize: '20px',
      color: '#2d3748',
      marginBottom: '10px',
    },
    price: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#38a169',
      marginBottom: '15px',
    },
    button: {
      padding: '10px 16px',
      backgroundColor: '#38a169',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '15px',
    },
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>⏳ Loading product catalog...</div>;
  }

  if (error) {
    return <div style={{ color: 'red', textAlign: 'center', padding: '50px' }}>❌ Error loading product catalog: {error.message}</div>;
  }

  return (
    <div style={styles.page}>
      <NavBar />
      <h1 style={styles.title}>🛒 Product Catalog</h1>

      <div style={styles.grid}>
        {products.map(product => (
          <div
            key={product.id}
            style={styles.card}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = styles.cardHover.transform;
              e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
            }}
          >
            {product.image && (
              <img src={product.image} alt={product.name} style={styles.image} />
            )}
            <h3 style={styles.name}>{product.name}</h3>
            <p style={styles.price}>₹{product.price.toFixed(2)}</p>
            <button
              style={styles.button}
              onClick={() => handleAddToCartClick(product)}
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogPage;
