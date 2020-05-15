import React from "react";
import "./UiLink.scss";
import icn_arrow_link from "../../../assets/icons/icn_arrow_link.svg";

const UiLink = ({ url, children }) => {
  return (
    <a href={url} class="ui-link">
      {children}
      <img src={icn_arrow_link} alt="" class="ui-link__icon" />
    </a>
  );
};

export default UiLink;
