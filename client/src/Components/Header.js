import React from 'react';
import REQUEST_URL from '../Constants/common';
import './Header.scss';
import './Common.scss';

function Header(props) {
  console.log('in header isLoggedin', props.isLoggedIn);
  const { isLoggedIn, userInfo } = props;

  return (
    <div className="Header">
      {/* <span className="Home-title">Video Example Dictionary</span> */}
      <div className="menu-container">
        {isLoggedIn ? (
          <>
            <img
              className="user-profile-image"
              src={userInfo.profile_image_url}
              alt="user"
            />
            <a className="logout-button" href={REQUEST_URL.LOGOUT}>
              LOGOUT
            </a>
          </>
        ) : (
          <>
            <a className="login-button" href="/login">
              LOGIN
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
