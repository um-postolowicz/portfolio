import React from "react";
import { Consumer } from "../data/LanguageContext";

const About = () => {
  const height = window.outerHeight;
  return (
    <Consumer>
      {({ label }) => {
        const { aboutProf, aboutDev, aboutFree, aboutTitle } = label;
        return (
          <section className="about" style={{ height: height }}>
            <div className="about__border">
              <div className="about__txt">
                <h3 className="about__header">{aboutTitle}</h3>
                <p className="about__desc">{aboutProf}</p>
                <p className="about__desc">{aboutDev}</p>
                <p className="about__desc">{aboutFree}</p>
              </div>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default About;
