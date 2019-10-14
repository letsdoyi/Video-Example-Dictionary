import { connect } from 'react-redux';
import App from '../Components/App';
// import * as actions from '../actions'

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: userInfo => {
      dispatch({ type: 'LOGIN', data: userInfo });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
