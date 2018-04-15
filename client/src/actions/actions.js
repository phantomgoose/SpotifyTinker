export const USER_LOGGING_IN = 'USER_LOGGING_IN';
export const USER_LOGGED_IN_SUCCESS = 'USER_LOGGED_IN_SUCCESS';
export const USER_LOGGED_IN_FAILURE = 'USER_LOGGED_IN_FAILURE';

export const getFullProfile = () => async dispatch => {
  // dispatch(userLoggingIn());
  try {
    const res = await fetch('/spotify/info/full', { credentials: 'same-origin' });
    if (!res.ok) {
      throw new Error(res.status);
    }
    const jsonRes = await res.json();
    if (jsonRes.success) {
      dispatch(receiveUser(jsonRes.payload));
    }
  } catch (err) {
    console.log(err);
    // dispatch(receiveUserError(JSON.stringify(err)));
  }
};

export const verifyLogin = () => async dispatch => {
  try {
    const res = await fetch('/spotify/info/basic', { credentials: 'same-origin' });
    if (!res.ok) {
      throw new Error(res.status);
    }
    const jsonRes = await res.json();
    console.log(jsonRes);
    if (jsonRes.success) {
      dispatch(receiveUser(jsonRes.payload));
      dispatch(getFullProfile());
    }
  } catch (err) {
    console.log(err);
    // dispatch(receiveUserError(JSON.stringify(err)));
  }
};

export const receiveUser = user => {
  return {
    type: USER_LOGGED_IN_SUCCESS,
    payload: user,
  };
};

export const userLoggingIn = () => {
  return {
    type: USER_LOGGING_IN,
    payload: null,
  };
};

export const receiveUserError = errorMessage => {
  return {
    type: USER_LOGGED_IN_FAILURE,
    payload: errorMessage,
  };
};
