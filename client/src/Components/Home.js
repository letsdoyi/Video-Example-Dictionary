import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import './Common.scss';
import axios from 'axios';

function Home(props) {
  const $App = document.querySelector('.App');
  console.log('$App', $App);

  function handleControlClick() {
    $App.classList.toggle('search-active');
  }

  function handleCloseClick() {
    $App.classList.toggle('search-active');
  }

  return (
    <div className="Home">
      <div className="search-bar-container">
        <form>
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <input className="search-bar"></input>
        </form>
      </div>

      {/* //page content + floating button */}
      <div className="container p-y-md">
        <div className="control" onClick={() => handleControlClick()}>
          <div className="btn-material"></div>
          <FontAwesomeIcon
            className="material-icons icon-material-search"
            icon={faSearch}
          />
        </div>
      </div>

      {/* <!-- full screen form controls --> */}
      {/* <i class='icon-close material-icons'>close</i> */}
      <FontAwesomeIcon
        className="icon-close material-icons"
        icon={faTimes}
        onClick={() => handleCloseClick()}
      />
      <div className="search-input">
        <form>
          <input
            className="input-search"
            placeholder="Start Typing"
            type="text"
          />
          <div className="search-option-list">
            <h1>LANGUAGE</h1>
            <ul>
              <li>ENGLISH</li>
              <li>KOREAN</li>
              <li>ARABIC</li>
            </ul>
          </div>
          <div className="search-option-list">
            <h1>GENRE</h1>
            <ul>
              <li>NEWS</li>
              <li>LECTURE</li>
              <li>DOCUMENTARY</li>
            </ul>
            <ul>
              <li>VLOG</li>
              <li>ENTERTANINMENT</li>
              <li>TEENAGERS</li>
            </ul>
            <ul>
              <li>KIDS</li>
              <li>ADVERTISEMENT</li>
              <li>GAMES</li>
            </ul>
          </div>

          <input className="input-option" type="button" />
        </form>
      </div>

      {/* <!-- video controller --> */}
      <div className="video-container">
        <div className="video-cover"></div>
        <iframe
          src={`https://www.youtube.com/embed/Oa7BvzZZP0g?autoplay=1&loop=1&controls=0&disablekb=0&start=4&iv_load_policy=3&ref=0`}
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>

      <a href="http://localhost:4000/api/auth/google/logout">
        구글 로그아웃
      </a>
    </div>
  );
}

export default Home;
