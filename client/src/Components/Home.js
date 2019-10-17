import React, { useEffect } from 'react';
import Popup from '../Components/Popup';
import './Home.scss';
import './Common.scss';
import CONSTANTS from '../Constants/common';

function Home(props) {
  const { selected, onRadioChange, onCheckboxChange, onTextChange, onSearchSubmit } = props;
  const { SELECTION } = CONSTANTS;

  return (
    <div className="Home">
      <div className="headline">Search words, Enjoy reality</div>

      <form
        className="search-form"
        onSubmit = {(ev) => { onSearchSubmit(ev) }}
      >
        <div className="input-search-wrapper">
          <input
            onChange={ev => {
              onTextChange(ev);
            }}
            className="input-search"
            placeholder="Start Typing"
            type="text"
          />

          <input className="input-search" type="submit" />
        </div>

        <div className="search-option-list-container">
          <div className="search-option-list language-wrapper">
            <div className="list language-list">
              <label>
                ENGLISH
                <input
                  onChange={ev => {
                    onRadioChange(ev);
                  }}
                  type="radio"
                  id="ENGLISH"
                  value="en"
                  name="language"
                  checked={'en' === selected.language}
                />
              </label>
              <label>
                KOREAN
                <input
                  onChange={ev => {
                    onRadioChange(ev);
                  }}
                  type="radio"
                  id="korean"
                  value="ko"
                  name="language"
                  checked={'ko' === selected.language}
                />
              </label>

              <label>
                ARABIC
                <input
                  onChange={ev => {
                    onRadioChange(ev);
                  }}
                  type="radio"
                  id="arabic"
                  value="ar"
                  name="language"
                  checked={'ar' === selected.language}
                />
              </label>
            </div>
          </div>

          <div className="search-option-list categories-wrapper">
            <h1>CATEGORIES - 3 Selections Only</h1>
            <div className="list categories-list">
              <label>
                COMEDY
                <input
                  onChange={ev => {
                    onCheckboxChange(ev, 'CATEGORY');
                  }}
                  type="checkbox"
                  id="comedy"
                  value="comedy"
                  name="category"
                  checked={selected.categories.includes('comedy')}
                />
              </label>
              <label>
                FILM
                <input
                  onChange={ev => {
                    onCheckboxChange(ev, 'CATEGORY');
                  }}
                  type="checkbox"
                  id="film"
                  value="film"
                  name="category"
                  checked={selected.categories.includes('film')}
                />
              </label>
              <label>
                ENTERTANINMENT
                <input
                  onChange={ev => {
                    onCheckboxChange(ev, 'CATEGORY');
                  }}
                  type="checkbox"
                  id="entertainment"
                  value="entertainment"
                  name="category"
                  checked={selected.categories.includes(
                    'entertainment',
                  )}
                />
              </label>
              <label>
                TECH
                <input
                  onChange={ev => {
                    onCheckboxChange(ev, 'CATEGORY');
                  }}
                  type="checkbox"
                  id="tech"
                  value="tech"
                  name="category"
                  checked={selected.categories.includes('tech')}
                />
              </label>
              <label>
                TALK
                <input
                  onChange={ev => {
                    onCheckboxChange(ev, 'CATEGORY');
                  }}
                  type="checkbox"
                  id="talk"
                  value="talk"
                  name="category"
                  checked={selected.categories.includes('talk')}
                />
              </label>
            </div>
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
