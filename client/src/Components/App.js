import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';
import Header from '../Components/Header';
import Home from '../Components/Home';
import axios from 'axios';
import './Common.scss';

function App(props) {
  useEffect(() => {
    console.log(props);
    const fetchLoginData = async () => {
      const userData = await axios.get(
        'http://localhost:4000/api/auth/google/login/success',
        {
          withCredentials: 'include',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        },
      );
      console.log(userData);
    };
    fetchLoginData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/login" render={() => <Login />} />
    </div>
  );
}

export default App;
