import React, { useState } from 'react';

const UserPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Knock Nok 🛠️ User Dashboard</h1>

      {step === 1 && (
        <div style={styles.card}>
          <h2>🔐 Register / Login</h2>
          <input type="text" placeholder="Username" style={styles.input} />
          <input type="password" placeholder="Password" style={styles.input} />
          <button onClick={handleNext} style={styles.button}>Login</button>
        </div>
      )}

      {step === 2 && (
        <div style={styles.card}>
          <h2>📝 Post Your Problem</h2>
          <textarea placeholder="Describe your issue..." style={styles.textarea} />
          <div style={styles.navigation}>
            <button onClick={handleBack} style={styles.backButton}>Back</button>
            <button onClick={handleNext} style={styles.button}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={styles.card}>
          <h2>📍 Find Nearest Worker</h2>
          <input type="text" placeholder="Your Location" style={styles.input} />
          <div style={styles.navigation}>
            <button onClick={handleBack} style={styles.backButton}>Back</button>
            <button onClick={handleNext} style={styles.button}>Next</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div style={styles.card}>
          <h2>📆 Select Date & Time</h2>
          <input type="date" style={styles.input} />
          <input type="time" style={styles.input} />
          <div style={styles.navigation}>
            <button onClick={handleBack} style={styles.backButton}>Back</button>
            <button onClick={handleNext} style={styles.button}>Next</button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div style={styles.card}>
          <h2>💳 Payment</h2>
          <input type="text" placeholder="Card Number" style={styles.input} />
          <input type="text" placeholder="Expiry Date" style={styles.input} />
          <input type="text" placeholder="CVV" style={styles.input} />
          <div style={styles.navigation}>
            <button onClick={handleBack} style={styles.backButton}>Back</button>
            <button onClick={handleNext} style={styles.button}>Next</button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div style={styles.card}>
          <h2>📡 GPS Tracking</h2>
          <p>Worker is on the way! 🚗</p>
          <iframe
            title="Map"
            width="100%"
            height="200"
            style={{ borderRadius: '10px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.6351694015!2d88.20683839777034!3d22.535564903122875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02764e3f73a891%3A0xf26ab3daefb6e9a!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1616918348020!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div style={styles.navigation}>
            <button onClick={handleBack} style={styles.backButton}>Back</button>
            <button onClick={handleNext} style={styles.button}>Next</button>
          </div>
        </div>
      )}

      {step === 7 && (
        <div style={styles.card}>
          <h2>🗣️ Feedback</h2>
          <textarea placeholder="How was your experience?" style={styles.textarea} />
          <div style={styles.navigation}>
            <button onClick={handleBack} style={styles.backButton}>Back</button>
            <button style={styles.button}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial',
    backgroundColor: '#e8f0fe',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    resize: 'vertical',
    margin: '10px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  backButton: {
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  navigation: {
    marginTop: '15px',
  },
};

export default UserPage;
