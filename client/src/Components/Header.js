import React from 'react';
import './Common.scss';

function Header(props) {

  return (
    <>
      <span className="Home-title">Video Example Dictionary</span>
      <a href="/login" className="login-botton">
        LOGIN
      </a>
      <img
        src="https://lh3.googleusercontent.com/-Ewlh2CY16so/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdfHSXYRSzfjV_L1m-HDRNqDLJWLw/photo.jpg?sz=46"
        className="user-profile-image"
        alt="user"
      />
    </>
  );
}

export default Header;
