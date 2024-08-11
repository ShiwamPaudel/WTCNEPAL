// components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <p>DMS House - 148, Kumari Marga, Tripureshwor, Kathmandu</p>
          <br />
          <p>01 - 5362654 / 5319205</p>
          <p><a href="mailto:info@wtcnepal.com">info@wtcnepal.com</a></p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/WTC.Pvt.Ltd"><img src="assets/facebook.png" alt="Facebook" /></a>
            <a href="https://www.linkedin.com/company/web-trading-concern-pvt-ltd/"><img src="assets/linkedin.png" alt="LinkedIn" /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About us</a></li>
            <li><a href="">Our products</a></li>
            <li><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Customer</h4>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><a href="/contact">Inquiry</a></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Pages</h4>
          <ul>
            <li><a href="">Terms and Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
