import React from "react";
import SvgMoon from "../svg/svgMoon";
import SvgSun from "../svg/SvgSun";

const Header = ({ setLightMode, lightMode }) => {
  function handleLight() {
    if (lightMode === "light") {
      setLightMode("dark");
    } else {
      setLightMode("light");
    }
  }

  return (
    <header className="header header-flex">
      <h1 className="header__h1">TODO</h1>
      <div className="header__light_scheme" onClick={handleLight}>
        {lightMode === "light" ? <SvgMoon></SvgMoon> : <SvgSun />}
      </div>
    </header>
  );
};

export default Header;
