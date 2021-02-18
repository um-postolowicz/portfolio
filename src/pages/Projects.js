import React from "react";
import { Consumer } from "../data/LanguageContext";

import portfolioImg from "../images/avatar.svg";
import rateMovieImg from "../images/rateamovie.PNG";
import toDoImg from "../images/todolist.PNG";
import calculatorImg from "../images/calculatorSmall.PNG";

const Projects = () => {
  return (
    <Consumer>
      {({ label }) => {
        const {
          projectsTitle,
          portfolioTitle,
          portfolioTxt,
          rateMovieTitle,
          rateMovieTxt,
          toDoTitle,
          toDoTxt,
          calculatorTitle,
          calculatorTxt,
        } = label;
        return (
          <section className="projects">
            <h3 className="projectsTitle">{projectsTitle}</h3>
            <div className="portfolio">
              <h4 className="portfolioTitle">{portfolioTitle}</h4>
              <img
                src={portfolioImg}
                alt="Portfolio IMG"
                className="portfolioImg"
              />
              <p className="portfolioDesc">{portfolioTxt}</p>
            </div>
            <div className="rateMovie">
              <h4 className="rateMovieTitle">{rateMovieTitle}</h4>
              <img
                src={rateMovieImg}
                alt="Rate a movie IMG"
                className="rateMovieImg"
              />
              <p className="rateMovieDesc">{rateMovieTxt}</p>
            </div>
            <div className="toDo">
              <h4 className="toDoTitle">{toDoTitle}</h4>
              <img src={toDoImg} alt="To Do IMG" className="toDoImg" />
              <p className="toDoDesc">{toDoTxt}</p>
            </div>
            <div className="calculator">
              <h4 className="calculatorTitle">{calculatorTitle}</h4>
              <img src={calculatorImg} alt="To Do IMG" className="toDoImg" />
              <p className="calculatorDesc">{calculatorTxt}</p>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Projects;
