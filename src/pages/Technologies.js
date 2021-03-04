import React from "react";
import TechPiece from "../components/TechPiece";
import { Consumer } from "../data/LanguageContext";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3Full, DiNpm, DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Technologies = () => {
  const height = window.screen.height;
  return (
    <Consumer>
      {({ label }) => {
        return (
          <section className="technologies" style={{ minHeight: height }}>
            <h3 className="technologies__title">{label.technologies}</h3>
            <div className="technologies__container">
              <TechPiece
                techIcon={<AiFillHtml5 />}
                techMain="technologies__piece technologies__piece-html"
                techName="HTML5"
              />
              <TechPiece
                techIcon={<DiCss3Full />}
                techMain="technologies__piece technologies__piece-css"
                techName="CSS3"
              />
              <TechPiece
                techIcon={<DiSass />}
                techMain="technologies__piece technologies__piece-sass"
                techName="Sass/Scss"
              />
              <TechPiece
                techIcon={<SiJavascript />}
                techMain="technologies__piece technologies__piece-javascript"
                techName="JavaScript"
              />
              <TechPiece
                techIcon={<FaReact />}
                techMain="technologies__piece technologies__piece-react"
                techName="ReactJS"
              />
              <TechPiece
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
