import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const FOOTER = styled.div`
  .Footer {
    background-color: #0d2538;
    border-top: 2px solid #f1f1f1;
    color: #0d2538;
    height: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .footer-link {
    display: flex;
    justify-content: space-around;
    margin: 0 1rem;
  }
  a {
    color: #ffffff;
    font-family: sans-serif;
    font-size: 0.8rem;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    .Footer {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
    .footer-link {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <FOOTER>
        <footer className="Footer">
          <div className="footer-link">
            <a href="https://www.wildcodeschool.com/">Wild Code School</a>
          </div>
          <div className="footer-link">
            <a href="https://github.com/loicbdev/">Mon GitHub</a>
          </div>
        </footer>
      </FOOTER>
    </div>
  );
};

export default Footer;
