import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.divTitle}>
        <Link className={style.link} to="/">
          <span className={style.title}>My Web App</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
