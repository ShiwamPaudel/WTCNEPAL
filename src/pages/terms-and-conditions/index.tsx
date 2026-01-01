import React from 'react';
import Head from 'next/head';

const TermsAndConditions: React.FC = () => {
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
    marginBottom: '20px',
    borderBottom: '2px solid #ddd',
    paddingBottom: '10px',
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
    <>
      <Head>
        <title>Terms and Conditions</title>
      </Head>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Terms and Conditions</h1>
        
        <section>
          <h3 style={subheadingStyle}>Introduction</h3>
          <p style={paragraphStyle}>
            Welcome to our website. These terms and conditions outline the rules and regulations for the use of our website.
          </p>
        </section>

        <section>
          <h3 style={subheadingStyle}>Intellectual Property Rights</h3>
          <p style={paragraphStyle}>
            Other than the content you own, under these Terms, we own all the intellectual property rights and materials contained in this Website.
          </p>
        </section>

        <section>
          <h3 style={subheadingStyle}>Restrictions</h3>
          <p style={paragraphStyle}>
            You are specifically restricted from all of the following:
          </p>
          <ul style={listStyle}>
            <li>Publishing any Website material in any other media.</li>
            <li>Selling, sublicensing, and/or otherwise commercializing any Website material.</li>
            <li>Using this Website in any way that is or may be damaging to this Website.</li>
            <li>Using this Website contrary to applicable laws and regulations.</li>
          </ul>
        </section>

        <section>
          <h3 style={subheadingStyle}>Your Privacy</h3>
          <p style={paragraphStyle}>
            Please read our Privacy Policy.
          </p>
        </section>

        <section>
          <h3 style={subheadingStyle}>Limitation of Liability</h3>
          <p style={paragraphStyle}>
            In no event shall we, nor any of our officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
          </p>
        </section>

        <section>
          <h3 style={subheadingStyle}>Changes to These Terms</h3>
          <p style={paragraphStyle}>
            We are permitted to revise these Terms at any time as we see fit, and by using this Website you are expected to review these Terms on a regular basis.
          </p>
        </section>

        <section>
          <h3 style={subheadingStyle}>Governing Law & Jurisdiction</h3>
          <p style={paragraphStyle}>
            These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the State for the resolution of any disputes.
          </p>
        </section>
      </div>
    </>
  );
};

export default TermsAndConditions;
