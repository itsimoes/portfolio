import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
/* AVATARS IMPORTS */
import avatar1 from "../img/avatars/avatar-1.png";
import avatar2 from "../img/avatars/avatar-2.png";
import avatar3 from "../img/avatars/avatar-3.png";
import avatar4 from "../img/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return (
    <Carousel
        showArrows={true}
        infiniteLoop={false}    /* false because breaks acessibility */
        showThumbs={false}
        showStatus={false}
        autoPlay={false}        /* false because breaks acessibility */
        interval={3000}     
    >
      <>
        <img src={avatar1} alt="John Doe 1" />
        <div className="myCarousel">
          <h3>John Doe 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            omnis reiciendis quae illo fugiat maxime nam natus hic tenetur modi
            minima dolor. Facilis labore accusantium dolore et quo fugit
            obcaecati.
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Jane Doe 2" />
        <div className="myCarousel">
          <h3>Jane Doe 2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            omnis reiciendis quae illo fugiat maxime nam natus hic tenetur modi
            minima dolor. Facilis labore accusantium dolore et quo fugit
            obcaecati.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="John Doe 3" />
        <div className="myCarousel">
          <h3>John Doe 3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            omnis reiciendis quae illo fugiat maxime nam natus hic tenetur modi
            minima dolor. Facilis labore accusantium dolore et quo fugit
            obcaecati.
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="John Doe 4" />
        <div className="myCarousel">
        <h3>John Doe 4</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, omnis
          reiciendis quae illo fugiat maxime nam natus hic tenetur modi minima
          dolor. Facilis labore accusantium dolore et quo fugit obcaecati.
        </p>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
