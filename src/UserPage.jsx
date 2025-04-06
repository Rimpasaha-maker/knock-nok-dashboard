import React, { useState, useEffect } from 'react';

const UserPage = () => {
  const [step, setStep] = useState('signin');
  const [theme, setTheme] = useState('light');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [worker, setWorker] = useState({ name: 'XXXXXXX', phone: 'XXXXXXX', photo: 'https://via.placeholder.com/100' });
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amount, setAmount] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [user, setUser] = useState({ username: '', password: '', confirmPassword: '', email: '', phone: '' });
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    if (step === 'location' && !location) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, [step]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleGenerateOtp = () => {
    if (user.password !== user.confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    } else {
      setPasswordError('');
    }
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    setOtpSent(true);
    alert(`Your OTP is: ${generatedOtp}`);
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      alert('OTP Verified!');
      setStep('problem');
    } else {
      alert('Invalid OTP. Try again.');
    }
  };

  const categories = ['Plumber', 'Electrician', 'Carpenter', 'Painter', 'Cleaner', 'Mechanic', 'AC Repair', 'Gardener'];

  const inputStyle = {
    display: 'block',
    padding: '10px',
    margin: '10px 0',
    width: '100%',
    maxWidth: '400px'
  };

  return (
    <div style={{ backgroundColor: theme === 'light' ? '#f0f8ff' : '#222', color: theme === 'light' ? '#000' : '#fff', minHeight: '100vh', padding: '20px' }}>
      <h1>🛠️ Knock Nok - User Dashboard</h1>
      <button onClick={toggleTheme}>Change the Theme Option ({theme})</button>

      {step === 'signin' && (
        <div>
          <h2>Sign In</h2>
          <input style={inputStyle} placeholder="Username" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
          <input type="password" style={inputStyle} placeholder="Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <button style={inputStyle} onClick={() => alert('OTP sent for password recovery')}>Forgot Password? Send OTP</button>
          <button onClick={() => setStep('register')} style={inputStyle}>Don't have an account? Sign Up</button>
        </div>
      )}

      {step === 'register' && (
        <div>
          <h2>Register</h2>
          <input style={inputStyle} placeholder="First Name" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
          <input style={inputStyle} placeholder="Middle Name" value={user.middleName} onChange={(e) => setUser({ ...user, middleName: e.target.value })} />
          <input style={inputStyle} placeholder="Last Name" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
          <input style={inputStyle} placeholder="Email or Phone Number" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <input type="password" style={inputStyle} placeholder="Set Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
          <input type="password" style={inputStyle} placeholder="Confirm Password" value={user.confirmPassword} onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
          {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          <button onClick={handleGenerateOtp} style={inputStyle}>Generate OTP</button>
          {otpSent && (
            <>
              <input style={inputStyle} placeholder="Enter OTP" value={enteredOtp} onChange={(e) => setEnteredOtp(e.target.value)} />
              <button onClick={handleVerifyOtp} style={inputStyle}>Verify OTP</button>
            </>
          )}
          <button onClick={() => setStep('signin')} style={inputStyle}>Back to Sign In</button>
        </div>
      )}

      {step === 'problem' && (
        <div>
          <h2>Select Your Problem</h2>
          <select style={inputStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=''>Select Category</option>
            {categories.map(cat => <option key={cat}>{cat}</option>)}
          </select>
          <textarea style={inputStyle} placeholder="Describe your problem" value={description} onChange={(e) => setDescription(e.target.value)} />
          <input type="file" multiple style={inputStyle} />
          <button onClick={() => setStep('location')} style={inputStyle}>Next</button>
        </div>
      )}

      {step === 'location' && (
        <div>
          <h2>Work Location</h2>
          <input style={inputStyle} placeholder="Work Location" value={location} onChange={(e) => setLocation(e.target.value)} />
          <button onClick={() => setStep('worker')} style={inputStyle}>Assign Worker</button>
          <button onClick={() => setStep('problem')} style={inputStyle}>Back</button>
        </div>
      )}

      {step === 'worker' && (
        <div>
          <h2>Found Worker</h2>
          <img src={worker.photo} alt="Worker" width="100" height="100" /><br />
          <strong>Name:</strong> {worker.name}<br />
          <strong>Phone:</strong> {worker.phone}<br />
          <button onClick={() => setStep('payment')} style={inputStyle}>Book/Confirm</button>
          <button onClick={() => setStep('location')} style={inputStyle}>Back</button>
        </div>
      )}

      {step === 'payment' && (
        <div>
          <h2>Payment</h2>
          <input style={inputStyle} placeholder="Amount to be paid" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <select style={inputStyle} value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value=''>Select Payment Method</option>
            <option>UPI</option>
            <option>Credit/Debit Card</option>
            <option>Cash on Work Completion</option>
          </select>
          <button onClick={() => setStep('feedback')} style={inputStyle}>Make Payment</button>
          <button onClick={() => setStep('worker')} style={inputStyle}>Back</button>
        </div>
      )}

      {step === 'feedback' && (
        <div>
          <h2>Feedback</h2>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} style={{ fontSize: '24px', cursor: 'pointer', color: star <= rating ? 'gold' : '#ccc' }} onClick={() => setRating(star)}>★</span>
            ))}
          </div>
          <textarea style={inputStyle} placeholder="Leave your feedback here" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          <div style={{ marginTop: '20px', fontSize: '18px', color: 'green' }}>🎉 Thank you for using Knock Nok! Hope to see you again!</div>
          <button style={inputStyle} onClick={() => setStep('signin')}>Go Home</button>
        </div>
      )}
    </div>
  );
};

export default UserPage;














