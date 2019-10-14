import { combineReducers } from 'redux';
import loginReducer from '../Reducers/loginReducer';
import userReducer from './userReducer';

export default combineReducers({
  isLoggedIn: loginReducer,
  userInfo: userReducer
});
