import React, { Component, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import MessengerContainer from './components/Messenger/MessengerContainer';

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/" element={<MessengerContainer />} />
        </Routes>
      </Suspense>
    </div>
  );
}

class AppContainer extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    );
  }
}

export default AppContainer;
