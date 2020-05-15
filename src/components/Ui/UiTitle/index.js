import React from "react";
import "./UiTitle.scss";

const UiTitle = ({ title, excerpt }) => {
  return (
    <div className="ui-title">
      <h2 className="ui-title__title">{title}</h2>
      {excerpt && <p className="ui-title__excerpt">{excerpt}</p>}
    </div>
  );
};

export default UiTitle;
