import React from "react";
// import PropTypes from "prop-types";
import style from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={style.Home}>
      <div className={style.img}>
        <div className={style.containerhome}>
          <h1 className={style.title}>Atelier &quot;auth-register&quot;</h1>
          <p className={style.presentation}>
            Atelier dédié à l&apos;identification, la connexion et l&apos;accès
            aux pages privées
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
