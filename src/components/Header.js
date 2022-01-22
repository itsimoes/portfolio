import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>web development and interactive apps.</h1>
        <Typed
            className="typed-text"
            strings={["Web design", "Web development", "Interactive Apps."]}
            typeSpeed={40}   
            loop         
        />
        <a href="#" className="btn-main-offer">contact me</a>
      </div>
    </div>
  );
};

export default Header;
