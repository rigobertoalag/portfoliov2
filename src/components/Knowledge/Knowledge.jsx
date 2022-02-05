import React from "react";
import style from "./Knowledge.module.css";

const Knowledge = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.knContainer}>
          <h1>Concimientos</h1>

          <div className={style.knSkillContainer}>
              <div className={style.knSkillPrincipal}>
                  <p>esfera</p>
                  <p>Conocimientos Fundamentales</p>
              </div>
              <div className={style.knSkillPrincipal}>
                  <p>esfera</p>
                  <p>Basico</p>
              </div>
              <div className={style.knSkillPrincipal}>
                  <p>esfera</p>
                  <p>Intermedio</p>
              </div>
              <div className={style.knSkillPrincipal}>
                  <p>esfera</p>
                  <p>Avanzado</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Knowledge;
