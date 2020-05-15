import React from "react";
import "./NavFooter.scss";

const NavFooter = () => {
  return (
    <nav className="nav-footer">
      <ul className="nav-footer__list">
        <li className="nav-footer__item">
          <a href="#" className="nav-footer__link">
            About Us
          </a>
        </li>
        <li className="nav-footer__item">
          <a href="#" className="nav-footer__link">
            Privacy Policy
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavFooter;
