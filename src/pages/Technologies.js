import React from "react";
import TechPiece from "../components/TechPiece";
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
              <TechPiece
                techClassName="htmlTitle"
                techIcon={<AiFillHtml5 />}
                techMain="html"
                techName="HTML5"
              />
              <TechPiece
                techClassName="cssTitle"
                techIcon={<DiCss3Full />}
                techMain="css"
                techName="CSS3"
              />
              <TechPiece
                techClassName="sassTitle"
                techIcon={<DiSass />}
                techMain="sass"
                techName="Sass/Scss"
              />
              <TechPiece
                techClassName="jsTitle"
                techIcon={<SiJavascript />}
                techMain="javascript"
                techName="JavaScript"
              />
              <TechPiece
                techClassName="reactTitle"
                techIcon={<FaReact />}
                techMain="react"
                techName="ReactJS"
              />
              <TechPiece
                techClassName="npmTitle"
                techIcon={<DiNpm />}
                techMain="npm"
                techName="NPM"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Technologies;
