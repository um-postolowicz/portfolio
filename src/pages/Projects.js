import React from "react";
import { Consumer } from "../data/LanguageContext";
import Project from "../components/Project";

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
            <Project
              alt="Portfolio IMG"
              descClassName="portfolioDesc"
              descTxt={portfolioTxt}
              imgClassName="portfolioImg"
              imgSrc={portfolioImg}
              mainClassName="portfolio"
              projectName={portfolioTitle}
              titleClassName="portfolioTitle"
            />
            <Project
              alt="Rate a movie IMG"
              descClassName="rateMovieDesc"
              descTxt={rateMovieTxt}
              imgClassName="rateMovieImg"
              imgSrc={rateMovieImg}
              mainClassName="rateMovie"
              projectName={rateMovieTitle}
              titleClassName="rateMovieTitle"
            />
            <Project
              alt="To Do IMG"
              descClassName="toDoDesc"
              descTxt={toDoTxt}
              imgClassName="toDoImg"
              imgSrc={toDoImg}
              mainClassName="toDo"
              projectName={toDoTitle}
              titleClassName="toDoTitle"
            />
            <Project
              alt="The Calculator IMG"
              descClassName="calculatorDesc"
              descTxt={calculatorTxt}
              imgClassName="calculatorImg"
              imgSrc={calculatorImg}
              mainClassName="calculator"
              projectName={calculatorTitle}
              titleClassName="calculatorTitle"
            />
          </section>
        );
      }}
    </Consumer>
  );
};

export default Projects;
