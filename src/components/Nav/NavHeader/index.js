import React from "react";
import "./NavHeader.scss";

const NavHeader = () => {
  return (
    <nav className="nav-header__nav">
      <ul className="nav-header__list">
        <li className="nav-header__item">
          <a href="#" className="nav-header__link">
            About
          </a>
        </li>
        <li className="nav-header__item nav-header__item--complex">
          <a href="#" className="nav-header__link">
            Help
          </a>
        </li>
        <li className="nav-header__item">
          <a href="#" className="nav-header__link">
            Features
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
