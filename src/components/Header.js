import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="home" className="header-wraper" >
      <div className="main-info">
        <p className="header-text">Olá !</p>
        <h1>Sou Ítalo Simões</h1>
        <Typed
            className="typed-text header-text"
            strings={[" Web developer e Web designer."]}
            typeSpeed={40}                      
        />
        <Link className="btn-main-offer" smooth={true} to="portfolio"  offset={-110 } href="#">Veja meu Portfolio</Link>        
      </div>
    </div>
  );
};

export default Header;
