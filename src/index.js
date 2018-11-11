import React from 'react';
import {Provider} from 'react-redux';
import Routes from './navigation/routes';
import store from './config/stories';

const App = () => (
  <Provider store={store}>
    {/* $FlowFixMe */}
    <Routes/>
  </Provider>
);

export default App;
