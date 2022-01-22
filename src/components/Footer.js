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
    <div className="footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col md-6 col-sm-6">
            <div className="d-flex">
              <p>city&nbsp;</p>
              <a
                href="https://www.google.com/maps/d/embed?mid=1XH_bAZUfA2ykSenaRYg8GRbDWwA&ehbc=2E312F"
                target="_blank"
              >
                São Luís, MA
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
                  About me
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="services" offset={-110} href="#">
                  My Services
                </Link>
              </div>
              <div className="col">
                <Link className="footer-nav" smooth={true} to="experience" offset={-110} href="#">
                  My Experience
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="portfolio" offset={-110} href="#">
                  Portfolio
                </Link>
                <br />
                <Link className="footer-nav" smooth={true} to="contacts" offset={-110} href="#">
                  Contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
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
            <p className="pt-3 text-center">
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
