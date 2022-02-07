import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experiência</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2016 - 2017</h3>
            <h4>Estágio</h4>
            <p>
              Núcleo de Educação à distância - NEAD-UFMA, São Luís, Maranhão
            </p>
            <ul>
              <li>
                Desenvolvimento de Jogos Educativos para inclusão social e
                diminuição da evasão escolar.
              </li>
              <ul>
                <li>Engine de Criação de Jogos (Unity 3D)</li>
                <li>Linguagens de programação (Javascript e C#).</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2017 - 2018</h3>
            <h4>Estágio</h4>
            <p>
              Laboratório de Convergência de Mídias - LABCOM-UFMA, São Luís,
              Maranhão
            </p>
            <ul>
              <li>
                Desenvolvimento de projetos de realidade virtual para a
                utilização em mídias digitais.
              </li>
              <ul>
                <li> Ferramentas de modelagem 3D (Blender e 3Ds Max).</li>
                <li>Engine de Criação de Jogos (Unity 3D)</li>
                <li>Linguagens de programação (Javascript e C#).</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018 - 2019</h3>
            <h4>Estágio Curricular</h4>
            <p>
              Centro de Ciência e Tecnologia - CCET-UFMA, São Luís, Maranhão
            </p>
            <ul>
              <li>Implementação, suporte e gerenciamento de servidores.</li>
              <li>Gerenciamento de laboratório de estudos.</li>
              <li>Instalação e manutenção de computadores e periféricos.</li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019</h3>
            <h4>Estágio</h4>
            <p>Assessoria de Convênios ASCONV - UFMA, São Luís, Maranhão</p>
            <ul>
              <li>
                Suporte de TI e administração de banco de dados com foco em
                Microsoft Access, Microsoft Excel e infraestrutura do banco de
                dados.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
