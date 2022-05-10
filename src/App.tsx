import React from 'react';
import { AuthProvider } from 'react-oidc-context';
import { oidc } from './config/oidc';
import { Router } from './router/router';

function App() {
  return (
    <React.StrictMode>
      <AuthProvider {...oidc}>
        <Router />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
