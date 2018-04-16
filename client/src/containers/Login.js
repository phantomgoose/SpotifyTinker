import React, { Component } from 'react';
import { connect } from 'react-redux';
import { verifyLogin } from '../actions/actions';
import TopTracks from './TopTracks';

class Login extends Component {
  componentWillMount() {
    console.log('Will mount fired');
    this.props.verifyLogin();
  }

  render() {
    if (this.props.isLoggingIn) {
      return <p>Loading...</p>;
    }
    if (!this.props.loggedIn) {
      return <a href="/auth/spotify">Log in</a>;
    }
    return (
      <div>
        <p>Hi, {this.props.user.username}</p>
        <p>Your top tracks:</p>
        <TopTracks />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user, isLoggingIn } = state;
  const loggedIn = !!user;
  return {
    user,
    isLoggingIn,
    loggedIn,
  };
};

export default connect(mapStateToProps, { verifyLogin })(Login);
