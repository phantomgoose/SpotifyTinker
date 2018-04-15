import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopTracks extends Component {
  // componentWillMount() {
  //   console.log('Will mount fired');
  //   this.props.verifyLogin();
  // }

  render() {
    if (!this.props.tracks) {
      return <p>No tracks to show... yet?</p>;
    }
    console.log(this.props.tracks);
    const trackItems = this.props.tracks.map(track => {
      return <li key={track.id}><a href="">Play</a>{track.name} - {track.artists[0].name}</li>;
    });
    console.log(trackItems);
    return <ul>{trackItems}</ul>;
  }
}

const mapStateToProps = state => {
  let tracks = null;
  if (state.user && state.user.items) {
    tracks = state.user.items;
  }
  return {
    tracks,
  };
};

export default connect(mapStateToProps)(TopTracks);
