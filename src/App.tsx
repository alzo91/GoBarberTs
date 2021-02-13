import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './Styles';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    <GlobalStyles />
  </>
);

export default App;
