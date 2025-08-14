import React, { useState } from 'react';
import '../App.css';

function Login({ socket }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [errors, setErrors] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({ username: '', password: '' });
    
    // Validate fields
    let hasErrors = false;
    const newErrors = { username: '', password: '' };
    
    if (!username.trim()) {
      newErrors.username = language === 'EN' ? 'Username is required' : 'प्रयोगकर्ता नाम आवश्यक छ';
      hasErrors = true;
    }
    
    if (!password.trim()) {
      newErrors.password = language === 'EN' ? 'Password is required' : 'पासवर्ड आवश्यक छ';
      hasErrors = true;
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, emit the login event
    socket.emit('login', { username, password });
  };

  const toggleLanguage = (lang) => setLanguage(lang);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (errors.username) {
      setErrors(prev => ({ ...prev, username: '' }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors(prev => ({ ...prev, password: '' }));
    }
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

        {/* Login Form */}
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
              style={{ borderColor: errors.username ? '#dc3545' : '' }}
            />
            {errors.username && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.username}
              </div>
            )}
          </div>

          <label htmlFor="password">{language === "EN" ? "Password" : "पासवर्ड"}</label>
          <div className="input-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder={language === "EN" ? "Enter Password" : "पासवर्ड प्रविष्ट गर्नुहोस्"}
              value={password}
              onChange={handlePasswordChange}
              style={{ borderColor: errors.password ? '#dc3545' : '' }}
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
            {errors.password && (
              <div style={{ color: '#dc3545', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                {errors.password}
              </div>
            )}
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

export default Login;
