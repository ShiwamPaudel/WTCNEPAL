import React from 'react';
import Link from 'next/link'; // Import the Link component from Next.js
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <p>DMS House - 148, Kumari Marga, Tripureshwor, Kathmandu</p>
          <br />
          <p>01 - 536 2654 / 410 0634</p>
          <p>01 - 597 1654 (Service Inquiries)</p>
          <p><a href="mailto:info@wtcnepal.com">info@wtcnepal.com</a></p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/WTC.Pvt.Ltd"><img src="assets/facebook.png" alt="Facebook" /></a>
            <a href="https://www.linkedin.com/company/web-trading-concern-pvt-ltd/"><img src="assets/linkedin.png" alt="LinkedIn" /></a>
          </div>
        </div>
        <div className={styles.column}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/about">About us</Link></li>
            <li><a href="">Our products</a></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Customer</h4>
          <ul>
            <li><a href="">FAQ</a></li>
            <li><Link href="/contact">Inquiry</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Pages</h4>
          <ul>
            <li><Link href="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
