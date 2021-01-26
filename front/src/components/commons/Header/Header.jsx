import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import home from "../../../images/logo-accueil.svg";
import cart from "../../../images/logo-panier.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.home}>
        <Link className={style.link} to="/">
          <img className={style.logoHome} src={home} alt="Accueil" />
        </Link>
      </div>
      <div className={style.divTitle}>
        <Link className={style.link} to="/">
          <span className={style.title}>Magic Pills</span>
        </Link>
      </div>
      <div className={style.cart}>
        <Link className={style.link} to="/panier">
          <img className={style.logoCart} src={cart} alt="Panier" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
