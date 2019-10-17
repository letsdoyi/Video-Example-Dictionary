import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';
import Header from '../Components/Header';
import Home from '../Components/Home';
import axios from 'axios';
import './Common.scss';
import REQUEST_URL from '../Constants/requestUrl';

function App(props) {
  const { request, selected } = props;
  useEffect(props => {
    const fetchLoginData = async () => {
      const response = await axios.get(REQUEST_URL.LOGIN_SUCCESS, {
        withCredentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      });
      console.log(response);
      if (response.data.user) {
        props.getUserData(response.data.user);
      }
    };
    fetchLoginData();
  }, []);

  if (request.isReadyToGetVideos) {
    console.log('READEY');
    const requestVideoData = async () => {
      const postResponse = await axios.post(
        REQUEST_URL.POST_SEARCH_RESULT,
        {
          selected,
        },
      );
    };
    requestVideoData();
    const fetchVideoData = async () => {
      const getResponse = await axios.get(
        REQUEST_URL.GET_VIDEO_SUCCESS,
        {
          withCredentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        },
      );
      console.log('getResponse:', getResponse);
    };
    fetchVideoData();
  }

  return (
    <div className="App">
      {window.location.pathname !== '/login' && (
        <header className="App-header">
          <Header {...props} />
        </header>
      )}

      <Route exact path="/" render={() => <Home {...props} />} />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
