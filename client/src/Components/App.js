import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Login from '../Components/Login';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Videos from '../Components/Videos';
import axios from 'axios';
import secondsConverter from 'seconds-converter';
import { oneToTwoDigits } from '../Utility';
import './Common.scss';
import REQUEST_URL from '../Constants/requestUrl';

function App(props) {
  console.log(props);
  const {
    request,
    selected,
    getUserData,
    getVideoData,
    getDictionaryData,
  } = props;

  useEffect(props => {
    //requestLoginData

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
        getUserData(response.data.user);
      }
    };
    fetchLoginData();
  }, []);
  console.log(request.isReadyToGetVideos);

  if (request.isReadyToGetVideos) {
    console.log('READEY');
    const requestVideoData = async () => {
      const postResponse = await axios.post(
        REQUEST_URL.POST_SEARCH_RESULT_FOR_VIDEO,
        {
          selected,
        },
      );
    };
    requestVideoData();

    //requestVideoData
    const fetchVideoData = async () => {
      console.log('fetchVideoData 실행');
      const getResponse = await axios.get(
        REQUEST_URL.GET_VIDEO_SUCCESS,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Credentials': true,
          },
        },
      );
      console.log('fromServer:', getResponse.data.searched);
      const foundWord = getResponse.data.searched.word;
      let info = getResponse.data.searched.videosInfo;

      if (info) {
        info.forEach(videoInfo => {
          videoInfo.captions.forEach(caption => {
            const startTime = Math.floor(Number(caption.start));
            const time = secondsConverter(startTime, 'sec');
            console.log(time);
            const mins = oneToTwoDigits(
              time.hours / 60 + time.minutes,
            );
            const secs = oneToTwoDigits(time.seconds);
            caption.startForDisplay = `${mins}:${secs}`;
          });
        });
      }
      getVideoData({ foundWord, info });
    };
    fetchVideoData();

    //requestDictionaryData

    const requestDictionaryData = async () => {
      //check vaild word - input 에서 미리 확인하기
      if (selected.word) {
        const postDictionaryResponse = await axios.post(
          REQUEST_URL.POST_SEARCH_RESULT_FOR_DICTIONARY,
          {
            word: selected.word,
          },
        );
        console.log('사전 결과:', postDictionaryResponse.data.dictionary);
        let dictionary = postDictionaryResponse.data.dictionary
        getDictionaryData(dictionary);
      } else {
        console.log('selected word is not valid');
      }
    };
    requestDictionaryData();
  }

  // const fetchDictionaryData = async () => {
  //   console.log('fetchDictionary Data실행');
  //   const getDictionaryResponse = await axios.get(
  //     REQUEST_URL.GET_DICTIONARY_SUCCESS,
  //     {
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Credentials': true,
  //       },
  //     },
  //   );
  //   console.log('사전 결과:', getDictionaryResponse);

  //   getDictionaryData(getDictionaryResponse.result);
  // };
  // fetchDictionaryData();

  return (
    <div className="App">
      {window.location.pathname !== '/login' && (
        <header className="App-header">
          <Header {...props} />
        </header>
      )}

      <Route
        exact
        path="/"
        render={renderProps => <Home {...props} {...renderProps} />}
      />
      <Route exact path="/login" render={() => <Login />} />
      <Route
        exact
        path="/videos"
        render={() => <Videos {...props} />}
      />
    </div>
  );
}

export default App;
