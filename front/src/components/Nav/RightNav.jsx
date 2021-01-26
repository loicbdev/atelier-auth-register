import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    background-color: #0d2538;
    color: #f5f5f5;
    font-family: sans-serif;
    font-size: 0.8rem;
    padding: 5px;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      text-align: center;
      border-bottom: 3px solid;
    }
    a {
      color: #ffffff;
      text-decoration: none;
      font-family: sans-serif;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/login">Se connecter</Link>
      </li>
      <li>
        <Link to="/register">S&apos;enregistrer</Link>
      </li>
      <li>
        <Link to="/private">Articles (page privée)</Link>
      </li>
      <li>
        <Link to="/logout">Se déconnecter</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
