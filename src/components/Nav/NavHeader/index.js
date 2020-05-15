import React from "react";
import "./NavHeader.scss";

const NavHeader = ({ nav }) => {
  return (
    <nav className="nav-header__nav">
      <ul className="nav-header__list">
        {nav.map((i) => (
          <li className="nav-header__item">
            <a href={i.url} className="nav-header__link">
              {i.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavHeader;
