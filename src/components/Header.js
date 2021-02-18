import React from "react";
import LanguageChoice from "./LanguageChoice";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="header">
      <LanguageChoice />
      <Menu />
    </header>
  );
};

export default Header;
