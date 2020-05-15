import React from "react";
import "./UiDropdown.scss";

class UiDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    };
  }

  toggleDropdown = (icon_current, activeIcon, icon) => {
    const { isActive } = this.state;
    if (!isActive) {
      this.setState({ isActive: true });
      icon_current = activeIcon;
    } else {
      this.setState({ isActive: false });
      icon_current = icon;
    }
  };
  render() {
    const { icon, activeIcon = icon, children } = this.props;
    const { isActive } = this.state;
    const icon_current = icon;

    return (
      <div
        className="ui-dropdown"
        onClick={() => this.toggleDropdown(icon_current, activeIcon, icon)}
      >
        <img src={icon_current} alt="" />
        <div className={`${isActive ? "active" : ""}`}>{children}</div>
      </div>
    );
  }
}

export default UiDropdown;
