import React from "react";
import style from "./Experience.module.css";

const Experience = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerExperience}>
          <h2>Experiencia Laboral</h2>

          <div className={style.worksLabel}>
            <div className={style.works}>
              <h4>MiRobotica</h4>
              <p>(4 meses)</p>
            </div>
            <div className={style.works}>
              <h4>SDOF</h4>
              <p>(1 año)</p>
            </div>
            <div className={style.works}>
              <h4>Tecnosoft</h4>
              <p>(Actual)</p>
            </div>
          </div>
          <img
            src="/img/timeline.svg"
            alt="time"
            className={style.worksArrow}
          />

          <div className={style.worksLabel}>
            <div className={style.works}>
              <h4 className={style.workGold}>2017</h4>
              <p className={style.workName}>Desarrollador Ruby On Rails</p>
              <img
                src="/img/Line 6.svg"
                alt="linedotted"
                className={style.worksLineDottedD}
              />
              <p className={style.workDescription}>
                Encargado del desarrollo de una plataforma web educativa con la
                finalidad de proveer cursos educativos de robótica desde nivel
                básico a intermedio.
              </p>
            </div>
            <div className={style.works}>
              <h4 className={style.workGold}>2018</h4>
              <p className={style.workName}>Desarrollador Laravel</p>
              <img
                src="/img/Line 6.svg"
                alt="linedotted"
                className={style.worksLineDottedV}
              />
              <p className={style.workDescription}>
                Proyecto universitario en el cual se desarrolló un simulador
                para la declaración de obligaciones fiscales con la finalidad de
                ofrecer prácticas realistas a los alumnos de contabilidad, dicho
                proyecto se presentó en el simposio IMPACTA 2018.
              </p>
            </div>
            <div className={style.works}>
              <h4 className={style.workGold}>2019</h4>
              <p className={style.workName}>Desarrollador PL/SQL</p>
              <img
                src="/img/Line 6.svg"
                alt="linedotted"
                className={style.worksLineDottedD}
              />
              <p className={style.workDescription}>
                Analista y programador de base de datos Oracle, con funciones de
                soporte de aplicaciones internas a nivel de base de datos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
