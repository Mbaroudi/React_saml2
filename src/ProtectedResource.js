import React, { useEffect } from 'react';

const ProtectedResource = () => {


useEffect(() => {
    const isAuthenticated = checkAuthentication();

    if (!isAuthenticated) {
        // Redirection to the SAML authentication endpoint.
        window.location.href = 'http://localhost:8080/saml/sso';
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

export default ProtectedResource;

