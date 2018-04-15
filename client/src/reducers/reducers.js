import { combineReducers } from 'redux';
import { USER_LOGGED_IN_FAILURE, USER_LOGGED_IN_SUCCESS, USER_LOGGING_IN } from '../actions/actions';

const user = (state = null, action) => {
  switch (action.type) {
    case USER_LOGGED_IN_FAILURE:
      return null;
    case USER_LOGGED_IN_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const isLoggingIn = (state = false, action) => {
  if (action.type !== USER_LOGGING_IN) {
    return false;
  }
  return true;
};

const rootReducer = combineReducers({
  user,
  isLoggingIn,
});

export default rootReducer;
