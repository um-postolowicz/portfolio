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
            <h3 className="projects__title">{projectsTitle}</h3>
            <p className="projects__comment">{projectsComment}</p>
            <div className="projects__container">
              <Project
                alt={portfolioAlt}
                descClassName="projects__project-desc"
                descTxt={portfolioTxt}
                githubLink="https://github.com/um-postolowicz/portfolio"
                imgClassName="projects__project-img"
                imgSrc={portfolioImg}
                mainClassName="projects__project projects__project-portfolio "
                projectLink="https://github.com/um-postolowicz/portfolio"
                projectName={portfolioTitle}
                titleClassName="projects__project-title"
              />
              <Project
                alt={rateMovieAlt}
                descClassName="projects__project-desc"
                descTxt={rateMovieTxt}
                githubLink="https://github.com/um-postolowicz/rate-a-movie"
                imgClassName="projects__project-img"
                imgSrc={rateMovieImg}
                mainClassName="projects__project projects__project-rateMovie"
                projectLink="https://rateamovie-ump.herokuapp.com"
                projectName={rateMovieTitle}
                titleClassName="projects__project-title"
              />
              <Project
                alt={todoAlt}
                descClassName="projects__project-desc"
                descTxt={toDoTxt}
                githubLink="https://github.com/um-postolowicz/todo"
                imgClassName="projects__project-img"
                imgSrc={toDoImg}
                mainClassName="projects__project projects__project-toDo"
                projectLink="https://todo-ump.herokuapp.com"
                projectName={toDoTitle}
                titleClassName="projects__project-title"
              />
              <Project
                alt={calculatorAlt}
                descClassName="projects__project-desc"
                descTxt={calculatorTxt}
                githubLink="https://github.com/um-postolowicz/calculator"
                imgClassName="projects__project-img"
                imgSrc={calculatorImg}
                mainClassName="projects__project projects__project-calculator"
                projectLink="https://calculator-ump.herokuapp.com"
                projectName={calculatorTitle}
                titleClassName="projects__project-title"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Projects;
