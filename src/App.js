import React, { Component, lazy, Suspense, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import store from "./redux/redux-store.js"
import MessengerContainer from './components/Messenger/MessengerContainer';

const App = (props) => {
  return (
    <div>
      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="/:userId" element={<MessengerContainer />} />
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
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default AppContainer;
