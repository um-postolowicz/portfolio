import React from "react";
import { Consumer } from "../data/LanguageContext";
import Project from "../components/Project";

import portfolioImg from "../images/avatar.svg";
import rateMovieImg from "../images/moviesFav.PNG";
import toDoImg from "../images/todoFav.png";
import calculatorImg from "../images/calculatorFav.png";

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
            <div className="projectsContainer">
              <Project
                alt="Portfolio IMG"
                descClassName="portfolioDesc"
                descTxt={portfolioTxt}
                imgClassName="portfolioImg"
                imgSrc={portfolioImg}
                mainClassName="portfolio project"
                projectName={portfolioTitle}
                titleClassName="portfolioTitle"
              />
              <Project
                alt="Rate a movie IMG"
                descClassName="rateMovieDesc"
                descTxt={rateMovieTxt}
                imgClassName="rateMovieImg"
                imgSrc={rateMovieImg}
                mainClassName="rateMovie project"
                projectName={rateMovieTitle}
                titleClassName="rateMovieTitle"
              />
              <Project
                alt="To Do IMG"
                descClassName="toDoDesc"
                descTxt={toDoTxt}
                imgClassName="toDoImg"
                imgSrc={toDoImg}
                mainClassName="toDo project"
                projectName={toDoTitle}
                titleClassName="toDoTitle"
              />
              <Project
                alt="The Calculator IMG"
                descClassName="calculatorDesc"
                descTxt={calculatorTxt}
                imgClassName="calculatorImg"
                imgSrc={calculatorImg}
                mainClassName="calculator project"
                projectName={calculatorTitle}
                titleClassName="calculatorTitle"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Projects;
