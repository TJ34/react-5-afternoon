import React, { Component } from 'react';
import './App.css';
import router from './router';
import { HashRouter } from 'react-router-dom';
import store from './store';
import {Provider} from 'react-redux';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <HashRouter>
      <div>
        { router }
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

export default App;