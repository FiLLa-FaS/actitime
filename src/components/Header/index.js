import React from "react";
import { NavHeader, UiButton, Container } from "../";
import "./Header.scss";
import icn_logo from "../../assets/icons/icn_logo.svg";
import icn_burger from "../../assets/icons/icn_burger.svg";

const Header = () => {
  return (
    <Container>
      <header>
        <div className="header__left">
          <img src={icn_logo} alt="" />
          <div className="header__nav">
            <NavHeader />
          </div>
        </div>
        <div className="header__right">
          <UiButton>Sign Up</UiButton>
          <img className="header__burger" src={icn_burger} alt="" />
        </div>
      </header>
    </Container>
  );
};

export default Header;
