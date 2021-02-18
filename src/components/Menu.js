import React, { useState } from "react";
import { Consumer } from "../data/LanguageContext";

import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = () => setIsMenuOpen(!isMenuOpen);

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
            <div className="menu" onClick={handleMenu}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isMenuOpen ? "menuOpen" : "menuClose"}>
              <li className="listElement listWelcome">
                <Link
                  activeClass="active"
                  to="welcome"
                  spy={true}
                  smooth={true}
                >
                  {listWelcome}
                </Link>
              </li>
              <li className="listElement listAbout">
                <Link to="about" spy={true} smooth={true}>
                  {listAbout}
                </Link>
              </li>
              <li className="listElement listTech">
                <Link to="technologies" spy={true} smooth={true}>
                  {listTech}
                </Link>
              </li>
              <li className="listElement listProjects">
                <Link to="projects" spy={true} smooth={true}>
                  {listProjects}
                </Link>
              </li>
              <li className="listElement listHobbies">
                {" "}
                <Link to="hobbies" spy={true} smooth={true}>
                  {listHobbies}
                </Link>
              </li>
              <li className="listElement listContact">
                <Link to="contact" spy={true} smooth={true}>
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
