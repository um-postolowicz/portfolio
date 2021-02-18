import React, { useState } from "react";
import { Consumer } from "../data/LanguageContext";

import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
            <div
              className={isMenuOpen ? "menu menuWhite" : "menu"}
              onClick={handleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isMenuOpen ? "menuList menuOpen" : "menuList"}>
              <li className="listElement listWelcome">
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
              <li className="listElement listAbout">
                <Link to="about" spy={true} smooth={true} onClick={closeMenu}>
                  {listAbout}
                </Link>
              </li>
              <li className="listElement listTech">
                <Link
                  to="technologies"
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}
                >
                  {listTech}
                </Link>
              </li>
              <li className="listElement listProjects">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  onClick={closeMenu}
                >
                  {listProjects}
                </Link>
              </li>
              <li className="listElement listHobbies">
                {" "}
                <Link to="hobbies" spy={true} smooth={true} onClick={closeMenu}>
                  {listHobbies}
                </Link>
              </li>
              <li className="listElement listContact">
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
