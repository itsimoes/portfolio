import React from "react";
import author from "../avatar.png";

const AboutMe = () => {
    return (
        <div className="container py-5"> 
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={ author } alt="author..." />
                    </div>
                </div>                
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">about me</h1>
                    <p>
                        Hello, i'm Ítalo. I have been developing websites since 2022. I'm Front-End web developer.Technologies i use: ReactJS, VueJS, Bootstrap and AngularJS.

                        I create responsive websites that are displayed on all devices desktops and smartphones.

                        Before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch).

                        And I'm ready to do this for you, before we start developing your Website, we sill discuss all the details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weakness.

                        All this is necessary to give your costumers something taht your competitors do not provide, or to present it too, but better!

                        After the website is finished, and ready to deply and sell a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you in Google Adwords and Facebook!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
