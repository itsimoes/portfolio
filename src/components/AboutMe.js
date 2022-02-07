import React from "react";
import author from "../img/avatar.png";

const AboutMe = () => {
  return (
    <div id="about" className="container-fluid py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">Sobre mim</h1>
          <p>
            Olá, me chamo Ítalo, desenvolvo Websites e aplicações Web desde
            2022. Sou um desenvolvedor Front-End. Atualmente utilizo algumas
            tecnologias como ReactJS, VueJS, Bootstrap e AngularJS.
          </p>
          <p>
            Crio Websites responsivos que podem ser acessados em diversos
            dispositivos como desktops e smartphones.
          </p>
          <p>
            Antes de começar o desenvolvimento de um Webapp, Landing Page,
            Business Website ou E-commerce, é preciso criar um layout de projeto
            (sketch).
          </p>
          <p>
            E estou pronto para fazê-lo por você, antes de começarmos a
            desenvolver seu projeto, iremos discutir todos os detalhes, como seu
            público alvo, objetivo e detalhes específicos de cada etapa do
            projeto. Avaliaremos as vantagens e desvantagens de seus
            competidores em relação ao seu produto.
          </p>
          <p>
            Tudo isso é necessário para dar a seus clientes algo que seus
            competidores não apresentam, ou apresentar o mesmo, porém de maneira melhorada!          
          </p>          
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
