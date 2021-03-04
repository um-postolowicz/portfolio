import React from "react";
import { Consumer } from "../data/LanguageContext";
import Project from "../components/Project";

import portfolioImg from "../images/avatar.svg";
import rateMovieImg from "../images/moviesFav.PNG";
import toDoImg from "../images/todoFav.png";
import calculatorImg from "../images/calculatorFav.png";

const Projects = () => {
  const height = window.outerHeight;
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
          <section className="projects" style={{ height: height }}>
            <h3 className="projects__title">{projectsTitle}</h3>
            <p className="projects__comment">{projectsComment}</p>
            <div className="projects__container">
              <Project
                alt={portfolioAlt}
                descTxt={portfolioTxt}
                githubLink="https://github.com/um-postolowicz/portfolio"
                imgSrc={portfolioImg}
                mainClassName="projects__project projects__project-portfolio "
                projectLink="https://github.com/um-postolowicz/portfolio"
                projectName={portfolioTitle}
              />
              <Project
                alt={rateMovieAlt}
                descTxt={rateMovieTxt}
                githubLink="https://github.com/um-postolowicz/rate-a-movie"
                imgSrc={rateMovieImg}
                mainClassName="projects__project projects__project-rateMovie"
                projectLink="https://rateamovie-ump.herokuapp.com"
                projectName={rateMovieTitle}
              />
              <Project
                alt={todoAlt}
                descTxt={toDoTxt}
                githubLink="https://github.com/um-postolowicz/todo"
                imgSrc={toDoImg}
                mainClassName="projects__project projects__project-toDo"
                projectLink="https://todo-ump.herokuapp.com"
                projectName={toDoTitle}
              />
              <Project
                alt={calculatorAlt}
                descTxt={calculatorTxt}
                githubLink="https://github.com/um-postolowicz/calculator"
                imgSrc={calculatorImg}
                mainClassName="projects__project projects__project-calculator"
                projectLink="https://calculator-ump.herokuapp.com"
                projectName={calculatorTitle}
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Projects;
