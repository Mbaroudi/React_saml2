import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  useEffect(() => {
    window.location.href = 'http://localhost:8080/saml/sso';
  }, []);

  return null;  // render nothing, the page will redirect
};

const ProtectedResource = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = checkAuthentication(); 

    if (!isAuthenticated) {
      navigate('/login');  // navigate to LoginPage, which will redirect the user
    }
  }, []);

  function checkAuthentication() {
    const token = localStorage.getItem('authToken');
    return token !== null;
  }

  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedResource />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
