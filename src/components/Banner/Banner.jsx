import React from "react";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.container}>
      <div className={style.bannerContainer}>
        <img src="/img/banner.jpg" className={style.imgBanner} alt="banner" />
      </div>

      <div className={style.bannerInfoContainer}>
        <div className="textContainer">
          <h3 className={style.bannerText}>
            Rigoberto Israel Alcantar Aguilar
          </h3>
          <h5 className={style.bannerText}>
            Desarrollador Front End
            <br></br>
            rigobertoalcantar95@gmail.com
          </h5>
        </div>
        <div className={style.profileImg}></div>
      </div>

      <div className={style.schoolContainer}>
        <div className={style.scImgLogo}>
            <p>logo - utem</p>
        </div>
        <div className={style.scTextContainer}>
          <h4 className={style.scText}>
            Ingeniero en sistemas computacionales, área de sistemas informáticos
            con amplios conocimientos en desarrollo web y móvil.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
