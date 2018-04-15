import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Playback from './components/Playback';
import Login from './containers/Login';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Login />
          <Playback />
        </div>
      </Provider>
    );
  }
}

export default App;
