import React, { useEffect, useState } from "react";
import { Consumer } from "../data/LanguageContext";
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
                className={isMenuOpen ? "menu menuWhite" : "menu"}
                onClick={handleMenu}
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            )}

            <ul
              className={
                size
                  ? "menuWide"
                  : isMenuOpen
                  ? "menuList menuOpen"
                  : "menuList"
              }
            >
              <LanguageChoice />
              <li
                className={
                  size
                    ? "listElement listWelcome listBig"
                    : "listElement listWelcome"
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
                    ? "listElement listAbout listBig"
                    : "listElement listAbout"
                }
              >
                <Link to="about" spy={true} smooth={true} onClick={closeMenu}>
                  {listAbout}
                </Link>
              </li>
              <li
                className={
                  size ? "listElement listTech listBig" : "listElement listTech"
                }
              >
                <Link
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
                    ? "listElement listProjects listBig"
                    : "listElement listProjects"
                }
              >
                <Link
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
                    ? "listElement listHobbies listBig"
                    : "listElement listHobbies"
                }
              >
                {" "}
                <Link to="hobbies" spy={true} smooth={true} onClick={closeMenu}>
                  {listHobbies}
                </Link>
              </li>
              <li
                className={
                  size
                    ? "listElement listContact listBig"
                    : "listElement listContact"
                }
              >
                <Link to="contact" spy={true} smooth={true} onClick={closeMenu}>
                  {listContact}
                </Link>
              </li>
            </ul>
          </>
        );
      }}
    </Consumer>
  );
};

export default Menu;
