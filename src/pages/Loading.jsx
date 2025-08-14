import React, { useState } from 'react';
import '../App.css';

function Loading() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
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
        <br />
        <br />
        <br />

        {/* Loading SVG */}
        <div className="loading-container">
          <img src="loading.svg" alt="Loading..." className="loading-spinner" />
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

export default Loading;
