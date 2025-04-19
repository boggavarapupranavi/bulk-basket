import React from 'react';
import { NavLink} from 'react-router-dom';
import Slider from 'react-slick';
import styles from './HomePage.module.css';
import freepik from './images/freepik.png';

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show only one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1, // Ensure one slide on larger screens too
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Ensure one slide on medium screens
        },
      },
      // You might want to adjust breakpoints and settings further if needed
    ],
  };

  return (
    <div className={styles.container}>
       <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/products" className={styles.navLink} activeClassName="active">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={styles.navLink} activeClassName="active">Cart</NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className={styles.navLink} activeClassName="active">Checkout</NavLink>
          </li>
        </ul>
      </nav>
      <main className={styles.mainContent}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            <div className={styles.carouselItem}>
              <img src="https://img.freepik.com/free-photo/healthy-vegetables-old-dark-background_1150-38010.jpg?t=st=1745042507~exp=1745046107~hmac=2af86718cc1d984d0dd18b940724fc37dc6eceaebe37a15f99bc4d275cc17aa3&w=996" alt="Slide 4" className={styles.carouselImage} />
            </div>
            <div className={styles.carouselItem}>
              <img src="https://img.freepik.com/premium-photo/delivery-man-delivering-grocery_8595-2708.jpg?w=996" alt="Slide 3" className={styles.carouselImage} />
            </div>
            <div className={styles.carouselItem}>
              <img src={freepik} alt="Slide 1" className={styles.carouselImage} />
            </div>
          </Slider>
        </div>

        {/* About Us Section */}
        <section
          className={styles.aboutUsSection}
          style={{
            padding: '40px 20px',
            backgroundColor: '#f8f8f8',
            border: '2px solid green',
            borderRadius: '8px',
            margin: '40px 0',
          }}
        >
          <h2
            className={styles.aboutUsHeading}
            style={{
              fontSize: '24px',
              color: 'green',
              marginBottom: '16px',
            }}
          >
            About Bulk Basket
          </h2>
          <p
            className={styles.aboutUsText}
            style={{
              fontSize: '16px',
              color: '#333',
              lineHeight: '1.6',
            }}
          >
            Welcome to Bulk Basket, your premier online destination for purchasing high-quality goods in bulk. We are committed to providing our customers with a wide selection of products at competitive prices, making it easier and more affordable to stock up on essentials. Whether you're a small business, a large family, or anyone who appreciates value and convenience, Bulk Basket is here to serve your needs. Our mission is to simplify bulk buying and deliver exceptional customer service.
          </p>
        </section>

        {/* Contact Us Section */}
        <section className={styles.contactUsSection}>
          <h2 className={styles.contactUsHeading}>💬 Contact Us</h2>
          <p className={styles.contactUsText}>
            We’re here to help! Whether you have a question about your order, need help with our website, or just want to share feedback—we’d love to hear from you.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '20px',
              padding: '40px 20px',
              backgroundColor: '#f8f8f8',
              
            }}
          >
            <div
              style={{
                flex: '1 1 30%',
                background: '#fff',
                borderRadius: '8px',
                padding: '25px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
                textAlign: 'center',
                color: 'green',
                border: '2px solid green',
              }}
            >
              <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>📞 Phone Support</h3>
              <p style={{ margin: 0, fontSize: '16px' }}>
                Call us: <strong>(123) 456-7890</strong>
              </p>
              <p style={{ margin: 0, fontSize: '16px' }}>Mon–Sat: 9 AM – 6 PM</p>
            </div>

            <div
              style={{
                flex: '1 1 30%',
                background: '#fff',
                borderRadius: '8px',
                padding: '25px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
                textAlign: 'center',
                color: 'green',
                border: '2px solid green',
              }}
            >
              <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>📧 Email Support</h3>
              <p style={{ margin: 0, fontSize: '16px' }}>Email us at:</p>
              <p style={{ margin: 0, fontSize: '16px' }}>
                <a
                  href="mailto:support@bulkbasket.com"
                  style={{ color: 'green', textDecoration: 'none' }}
                >
                  support@bulkbasket.com
                </a>
              </p>
              <p style={{ margin: 0, fontSize: '16px' }}>We reply within 24 hours.</p>
            </div>

            <div
              style={{
                flex: '1 1 30%',
                background: '#fff',
                borderRadius: '8px',
                padding: '25px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.06)',
                textAlign: 'center',
                color: 'green',
                border: '2px solid green',
              }}
            >
              <h3 style={{ marginBottom: '15px', fontSize: '20px' }}>💬 Live Chat</h3>
              <p style={{ margin: 0, fontSize: '16px' }}>
                Click the chat icon at the bottom right corner.
              </p>
              <p style={{ margin: 0, fontSize: '16px' }}>
                Available during business hours.
              </p>
            </div>
          </div>
        </section>

        {/* You can add more content for your homepage here */}
      </main>
    </div>
  );
}

export default HomePage;
