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
                        Hello, i'm Ítalo. I have been developing Websites since 2022. I'm Front-End web developer. These are some technologies I use: ReactJS, VueJS, Bootstrap and AngularJS.
                        </p>
                        <p>
                        I create responsive websites that are displayed on all devices desktops and smartphones.
                        </p>
                        <p>
                        Before I begin developing any webapp, Landing Page, Business Website or E-commerce, I need to have a ready-made project layout (sketch).
                        </p>
                        <p>
                        And I'm ready to do this for you, before we start developing your Website, we will discuss all the details of your niche with you, I will conduct a survey of your competitors and make a list of their advantages and weakness.
                        </p>
                        <p>
                        All this is necessary to give your costumers something tath your competitors do not provide, or to present it too, but better!
                        </p>
                        <p>
                        After the website is finished, and ready to deploy and sell a product or service. It is essential that your potential clients know about you. I will create an advertising campaign for you in Google Adwords and Facebook!
                        </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
