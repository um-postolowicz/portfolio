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
            <h3 className="technologies__title">{label.technologies}</h3>
            <div className="technologies__container">
              <TechPiece
                techClassName="technologies__piece-title"
                techIcon={<AiFillHtml5 />}
                techMain="technologies__piece technologies__piece-html"
                techName="HTML5"
              />
              <TechPiece
                techClassName="technologies__piece-title"
                techIcon={<DiCss3Full />}
                techMain="technologies__piece technologies__piece-css"
                techName="CSS3"
              />
              <TechPiece
                techClassName="technologies__piece-title"
                techIcon={<DiSass />}
                techMain="technologies__piece technologies__piece-sass"
                techName="Sass/Scss"
              />
              <TechPiece
                techClassName="technologies__piece-title"
                techIcon={<SiJavascript />}
                techMain="technologies__piece technologies__piece-javascript"
                techName="JavaScript"
              />
              <TechPiece
                techClassName="technologies__piece-title"
                techIcon={<FaReact />}
                techMain="technologies__piece technologies__piece-react"
                techName="ReactJS"
              />
              <TechPiece
                techClassName="technologies__piece-title"
                techIcon={<DiNpm />}
                techMain="technologies__piece technologies__piece-npm"
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
