import React from "react";
import copyright from "../../../images/logo-copyright.svg";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.divTeam}>
        <span className={style.team}>WCS / Team Super Five</span>
      </div>
      <div className={style.divCopyright}>
        <img className={style.copyrightLogo} src={copyright} alt="Copyright" />
        <span className={style.copyrightText}>Copyright</span>
        <span>2021</span>
      </div>
    </footer>
  );
};

export default Footer;
