import { connect } from 'react-redux';
import App from '../Components/App';

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    userInfo: state.userInfo,
    selected: state.selected,
    request: state.request,
    videos: state.videos,
    videoState: state.videoState,
    dictionary: state.dictionary,
    myWords: state.myWords
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: userInfo => {
      dispatch({ type: 'LOGIN', data: userInfo });
    },
    getVideoData: videoData => {
      dispatch({ type: 'LOADED_VIDEO_DATA', data: videoData });
    },
    getDictionaryData: result => {
      dispatch({ type: 'LOADED_DICTIONARY_DATA', data: result });
    },
    onTextChange: function(ev) {
      dispatch({
        type: 'TYPED_WORD',
        data: ev.currentTarget.value,
      });
    },
    onRadioChange: function(ev) {
      dispatch({
        type: 'CHECKED LANGUAGE',
        data: ev.currentTarget.value,
      });
    },
    onCheckboxChange: function(ev, field) {
      dispatch({
        type: `CHECKED ${field}`,
        data: ev.currentTarget.value,
      });
    },
    onSearchSubmit: function(ev) {
      dispatch({ type: 'REQUEST_VIDEOS' });
      ev.preventDefault();
    },
    onAddWordClick: function(word, myWords) {
      dispatch({ type: 'REQUEST_POST_WORD',
      data: {word, myWords}});
    },
    updateStartTimeTo: function(time, duration) {
      dispatch({
        type: 'MOVE_VIDEO_START_TIME',
        data: { time, duration },
      });
    },
    updateCurrentTo: function(currentValue) {
      dispatch({
        type: 'UPDATE_CURRENT_VALUE',
        data: currentValue,
      });
    },
    updateMyWords: function (word) {
      dispatch({
        type: 'ADD_WORD',
        data: word,
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
