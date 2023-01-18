import React from "react";
import SvgMoon from "../svg/svgMoon";

const Header = () => {
  return (
    <header className="header header-flex">
      <h1 className="header__h1">TODO</h1>
      <div className="header__light_scheme">
        <SvgMoon></SvgMoon>
      </div>
    </header>
  );
};

export default Header;
