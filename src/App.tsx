import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import GlobalStyles from './Styles';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
