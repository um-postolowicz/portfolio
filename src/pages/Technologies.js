import React from "react";
import { Consumer } from "../data/LanguageContext";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiNpm, DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Technologies = () => {
  return (
    <Consumer>
      {({ label }) => {
        return (
          <section className="technologies">
            <h3 className="technologiesTitle">{label.technologies}</h3>
            <div className="technologiesContainer">
              <div className="html">
                <AiFillHtml5 />
                <p className="htmlTitle">HTML5</p>
              </div>
              <div className="css">
                <DiCss3Full />
                <p className="cssTitle">CSS3</p>
              </div>
              <div className="sass">
                <DiSass />
                <p className="sassTitle">Sass/Scss</p>
              </div>
              <div className="javascript">
                <SiJavascript />
                <p className="jsTitle">JavaScript</p>
              </div>
              <div className="react">
                <FaReact />
                <p className="reactTitle">ReactJS</p>
              </div>
              <div className="npm">
                <DiNpm />
                <p className="npmTitle">NPM</p>
              </div>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Technologies;
