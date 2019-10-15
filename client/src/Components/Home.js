import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import './Common.scss';

function Home(props) {
  let $Home = document.querySelector('.Home');
  console.log('$App');

  useEffect(() => {}, []);

  function handleControlClick() {
    $Home.classList.toggle('search-active');
  }

  function handleCloseClick() {
    $Home.classList.toggle('search-active');
  }

  return (
    <div className="Home">
      <div className="headline">Search words, Enjoy reality</div>
      <form className="search-form">
        <div className="input-search-wrapper">
          <input
            className="input-search"
            placeholder="Start Typing"
            type="text"
          />
        </div>

        <div className="search-option-list-container">
          <div className="search-option-list language-wrapper">
            <h1>LANGUAGE</h1>
            <ul className="list language-list">
              <li>ENGLISH</li>
              <li>KOREAN</li>
              <li>ARABIC</li>
            </ul>
          </div>
          <div className="search-option-list categories-wrapper">
            <h1>CATEGORIES</h1>
            <ul className="list categories-list">
              <li>NEWS</li>
              <li>LECTURE</li>
              <li>DOCUMENTARY</li>
              <li>VLOG</li>
              <li>ENTERTANINMENT</li>
              <li>TEENAGERS</li>
              <li>KIDS</li>
              <li>ADVERTISEMENT</li>
              <li>GAMES</li>
            </ul>
          </div>
          <div className="search-option-list recommendation-wrapper">
            <h1>RECOMMENDATION</h1>
            <ul className="list recommendation-list">
              <li>NEWS</li>
              <li>LECTURE</li>
              <li>DOCUMENTARY</li>
              <li>VLOG</li>
              <li>ENTERTANINMENT</li>
              <li>TEENAGERS</li>
              <li>KIDS</li>
              <li>ADVERTISEMENT</li>
              <li>GAMES</li>
            </ul>
          </div>
        </div>
      </form>

      {/* <!-- video controller --> */}
      <div className="video-background-container">
        <div className="video-cover"></div>
        <iframe
          src={`https://www.youtube.com/embed/Oa7BvzZZP0g?autoplay=1&loop=1&controls=0&disablekb=0&start=4&iv_load_policy=3&ref=0&mute=1`}
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
