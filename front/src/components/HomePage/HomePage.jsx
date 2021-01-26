import React from "react";
// import PropTypes from "prop-types";
import style from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={style.Home}>
      <div className={style.img}>
        <div className={style.containerhome}>
          <h1 className={style.title}>My Web App</h1>
          <p className={style.presentation}>
            Bienvenue sur le site que j&apos;utilise pour m&apos;entrainer à
            différentes technos (Front et Back).
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
