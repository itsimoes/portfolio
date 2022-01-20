import React from "react";
import example01 from "../img/ex01.jpg";
import example02 from "../img/ex02.jpg";

/* FONT AWESOME IMPORT */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

/* REACT POPUPBOX */
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  /* Project 01 */
  const openPopupbox01 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={example01} alt="Example 01 Project..." />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit eum
          ut deleniti sit velit, magni veniam dolorem optio recusandae earum
          minus molestiae. Quia corrupti error animi nemo expedita
          necessitatibus.
        </p>
        <b>GitHub: </b>
        <a className="hyper-link" onClick={() => window.open("#link")}>
          link here...
        </a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
            text: "My first project...",
        },
      },
    });
    
  };

  const popupboxConfigExample01 = {
    titleBar: {
        enable: true,
        text: "My first project..."
    },
    fadeIn: true,
    fadeInSpeed: 900
  };

  /* Project 02 */
  const openPopupbox02 = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={example02} alt="Example 02 Project..." />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit eum
          ut deleniti sit velit, magni veniam dolorem optio recusandae earum
          minus molestiae. Quia corrupti error animi nemo expedita
          necessitatibus.
        </p>
        <b>GitHub: </b>
        <a className="hyper-link" onClick={() => window.open("#link")}>
          link here...
        </a>
      </>
    )
    PopupboxManager.open({ content });
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
              text: "My second project...",
          },
        },
      });
  };

  const popupboxConfigExample02 = {
    titleBar: {
        enable: true,
        text: "My second project..."
    },
    fadeIn: true,
    fadeInSpeed: 900
  };

  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row row-cols-auto justify-content-center">
          <div className="portfolio-image-box " onClick={openPopupbox01}>
            <img
              className="portfolio-image"
              src={example01}
              alt="Project 01..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupbox02}>
            <img
              className="portfolio-image"
              src={example02}
              alt="Project 02..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigExample01}/>
      <PopupboxContainer {...popupboxConfigExample02}/>
    </div>
  );
};

export default Portfolio;
