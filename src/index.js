import React from 'react';
import Routes from './navigation/routes';
import {Provider} from 'react-redux';
import store from './config/stories';

const App = () => <Provider store={store}><Routes/></Provider>

export default App;
