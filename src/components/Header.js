import React, { useEffect, useState } from "react";
import LanguageChoice from "./LanguageChoice";
import Menu from "./Menu";

const Header = () => {
  const [size, setSize] = useState(false);
  const showMenu = () => {
    if (window.innerWidth <= 1023) {
      setSize(false);
    } else {
      setSize(true);
    }
  };

  useEffect(() => {
    showMenu();
  }, []);
  return (
    <header className="header">
      {size ? null : <LanguageChoice />}
      <Menu />
    </header>
  );
};

export default Header;
