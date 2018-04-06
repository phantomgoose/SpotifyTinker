import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <a href="/auth/spotify">Log in</a>
        <a href="/spotify/play">Play</a>
        <a href="spotify/pause">Pause</a>
      </div>
    );
  }
}

export default App;
