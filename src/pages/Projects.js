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
          portfolioAlt,
          projectsTitle,
          projectsComment,
          portfolioTitle,
          portfolioTxt,
          rateMovieAlt,
          rateMovieTitle,
          rateMovieTxt,
          todoAlt,
          toDoTitle,
          toDoTxt,
          calculatorAlt,
          calculatorTitle,
          calculatorTxt,
        } = label;
        return (
          <section className="projects">
            <h3 className="projectsTitle">{projectsTitle}</h3>
            <p className="projectsComment">{projectsComment}</p>
            <div className="projectsContainer">
              <Project
                alt={portfolioAlt}
                descClassName="portfolioDesc"
                descTxt={portfolioTxt}
                githubLink="https://github.com/um-postolowicz/portfolio"
                imgClassName="portfolioImg"
                imgSrc={portfolioImg}
                mainClassName="portfolio project"
                projectLink="https://github.com/um-postolowicz/portfolio"
                projectName={portfolioTitle}
                titleClassName="portfolioTitle"
              />
              <Project
                alt={rateMovieAlt}
                descClassName="rateMovieDesc"
                descTxt={rateMovieTxt}
                githubLink="https://github.com/um-postolowicz/rate-a-movie"
                imgClassName="rateMovieImg"
                imgSrc={rateMovieImg}
                mainClassName="rateMovie project"
                projectLink="https://rateamovie-ump.herokuapp.com"
                projectName={rateMovieTitle}
                titleClassName="rateMovieTitle"
              />
              <Project
                alt={todoAlt}
                descClassName="toDoDesc"
                descTxt={toDoTxt}
                githubLink="https://github.com/um-postolowicz/todo"
                imgClassName="toDoImg"
                imgSrc={toDoImg}
                mainClassName="toDo project"
                projectLink="https://todo-ump.herokuapp.com"
                projectName={toDoTitle}
                titleClassName="toDoTitle"
              />
              <Project
                alt={calculatorAlt}
                descClassName="calculatorDesc"
                descTxt={calculatorTxt}
                githubLink="https://github.com/um-postolowicz/calculator"
                imgClassName="calculatorImg"
                imgSrc={calculatorImg}
                mainClassName="calculator project"
                projectLink="https://calculator-ump.herokuapp.com"
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
