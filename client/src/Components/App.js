import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';
import Header from '../Components/Header';
import Home from '../Components/Home';
import axios from 'axios';
import './Common.scss';
import REQUEST_URL from '../Constants/common';

function App(props) {
  useEffect(() => {
    console.log('props:', props);
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

  console.log('props', props);
  console.log('window', window);

  return (
    <div className="App">
      {
        window.location.pathname !== '/login' && (
          <header className="App-header">
            <Header {...props} />
          </header>
        )
      }

      <Route exact path="/" render={() => <Home {...props} />} />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
