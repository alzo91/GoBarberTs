import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './Styles';
import AppProvider from './hooks';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
