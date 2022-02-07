import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col md-6 col-sm-6">
            <div className="d-flex">
              <p>cidade&nbsp;</p>
              <a
                href="https://goo.gl/maps/3Qd33CANHZbJfGPy5"
                target="_blank"
              >
                Urbano Santos, MA
              </a>
            </div>
            <div className="d-flex">
              <a href="tel: +55(98)98853-3149">+55(98)98853-3149</a>
            </div>
            <div className="d-flex">
              <p>email: itsimoes1@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link className="footer-nav" smooth={true} to="home" offset={-110} href="#">
                  Home
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="about" offset={-110} href="#">
                  Sobre mim
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="services" offset={-110} href="#">
                  Serviços
                </Link>
              </div>
              <div className="col">
                <Link className="footer-nav" smooth={true} to="experience" offset={-110} href="#">
                  Experiência
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="portfolio" offset={-110} href="#">
                  Portfolio
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="contacts" offset={-110} href="#">
                  Contato
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="footer-icons d-flex justify-content-center">
              <FacebookShareButton 
                url={"#"}
                quote={"Front-End Developer"}
                hashtag="#ReactJS"
              >
                <FacebookIcon className="mx-3" size={36} borderRadius={10} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"#"}
                quote={"Front-End Developer"}
                hashtag="#ReactJS"
              >
                <TwitterIcon className="mx-3" size={36} borderRadius={10} />
              </TwitterShareButton>
              <RedditShareButton
                url={"#"}
                quote={"Front-End Developer"}
                hashtag="#ReactJS"
              >
                  <RedditIcon className="mx-3" size={36} borderRadius={10} />
              </RedditShareButton>
              <LinkedinShareButton
              url={"#"}
              quote={"Front-End Developer"}
              hashtag="#ReactJS"
              >
                  <LinkedinIcon className="mx-3" size={36} borderRadius={10} />
              </LinkedinShareButton>
            </div>
            <p className="footer-icons pt-3 text-center">
                Copyright&copy;
                {new Date().getFullYear()}&nbsp;Ítalo Simões | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
