import React from 'react';

const PrivacyPolicy: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '5px',
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
    borderBottom: '1px solid #ddd',
    paddingBottom: '5px',
  };

  const paragraphStyle: React.CSSProperties = {
    marginBottom: '10px',
  };

  const listStyle: React.CSSProperties = {
    marginLeft: '20px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Privacy Policy</h1>
      <p>Effective Date: August 13, 2024</p>

      <section>
        <h3 style={subheadingStyle}>Introduction</h3>
        <p style={paragraphStyle}>
          This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website. By using our site, you agree to the collection and use of information in accordance with this policy.
        </p>
      </section>

      <section>
        <h3 style={subheadingStyle}>Information We Collect</h3>
        <p style={paragraphStyle}>
          We don't collect personal and non-personal information unless you try to request for the Product's Brochure or our Portfolio.
        </p>
        <ul style={listStyle}>
          <li><strong>Personal Information:</strong> Such as your name, email address, and phone number, which you voluntarily provide to us.</li>
          <li><strong>Non-Personal Information:</strong> Such as your browser type, IP address, and usage data.</li>
        </ul>
      </section>

      <section>
        <h3 style={subheadingStyle}>How We Use Your Information</h3>
        <p style={paragraphStyle}>
          The information we collect may be used for various purposes, including:
        </p>
        <ul style={listStyle}>
          <li>To provide and maintain our website</li>
          <li>To notify you about your interested category or product.</li>
          <li>To provide customer support</li>
          <li>To monitor the usage of our website</li>
          <li>To detect, prevent, and address technical issues</li>
        </ul>
      </section>

      <section>
        <h3 style={subheadingStyle}>Sharing Your Information</h3>
        <p style={paragraphStyle}>
          We do not share your personal information with third parties except as necessary to provide our services or comply with the law.
        </p>
      </section>

      <section>
        <h3 style={subheadingStyle}>Your Rights</h3>
        <p style={paragraphStyle}>
          You have the right to access, update, or delete the personal information we have on you. If you wish to exercise any of these rights, please contact us.
        </p>
      </section>

      <section>
        <h3 style={subheadingStyle}>Changes to This Privacy Policy</h3>
        <p style={paragraphStyle}>
          We may update our Privacy Policy from time to time.
        </p>
        <p style={paragraphStyle}>
          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
        </p>
      </section>

      <section>
        <h3 style={subheadingStyle}>Contact Us</h3>
        <p style={paragraphStyle}>
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <ul style={listStyle}>
          <li>By email: info@wtcnepal.com</li>
          <li>By phone: 01-5362654</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
