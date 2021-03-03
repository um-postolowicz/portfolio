import React, { useEffect, useState } from "react";
import LanguageContext, { Consumer } from "../data/LanguageContext";
import LanguageChoice from "./LanguageChoice";

import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [size, setSize] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
    <Consumer>
      {({ label }) => {
        const {
          listWelcome,
          listAbout,
          listTech,
          listProjects,
          listHobbies,
          listContact,
        } = label;
        return (
          <>
            {size ? null : (
              <div
                className={
                  isMenuOpen
                    ? "header__menu-bars header__menu-bars--white"
                    : "header__menu-bars"
                }
                onClick={handleMenu}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            )}
            <div
              className={
                size
                  ? "header__menu-wide"
                  : isMenuOpen
                  ? "header__menu header__menu--open"
                  : "header__menu"
              }
            >
              <LanguageChoice />
              <ul className="header__menu-list">
                <li
                  className={
                    size
                      ? "header__menu-list-element header__menu-list-element--big"
                      : "header__menu-list-element"
                  }
                >
                  <Link
                    activeClass="active"
                    to="welcome"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {listWelcome}
                  </Link>
                </li>
                <li
                  className={
                    size
                      ? "header__menu-list-element header__menu-list-element--big"
                      : "header__menu-list-element"
                  }
                >
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {listAbout}
                  </Link>
                </li>
                <li
                  className={
                    size
                      ? "header__menu-list-element header__menu-list-element--big"
                      : "header__menu-list-element"
                  }
                >
                  <Link
                    activeClass="active"
                    to="technologies"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {listTech}
                  </Link>
                </li>
                <li
                  className={
                    size
                      ? "header__menu-list-element header__menu-list-element--big"
                      : "header__menu-list-element"
                  }
                >
                  <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {listProjects}
                  </Link>
                </li>
                <li
                  className={
                    size
                      ? "header__menu-list-element header__menu-list-element--big"
                      : "header__menu-list-element"
                  }
                >
                  {" "}
                  <Link
                    activeClass="active"
                    to="hobbies"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {listHobbies}
                  </Link>
                </li>
                <li
                  className={
                    size
                      ? "header__menu-list-element header__menu-list-element--big"
                      : "header__menu-list-element"
                  }
                >
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    onClick={closeMenu}
                  >
                    {listContact}
                  </Link>
                </li>
              </ul>
            </div>
          </>
        );
      }}
    </Consumer>
  );
};

export default Menu;
