import React from "react";
import { Consumer } from "../data/LanguageContext";

const About = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { aboutProf, aboutDev, aboutFree, aboutTitle } = label;
        return (
          <section className="about">
            <div className="aboutBorder">
              <div className="aboutTxt">
                <h3 className="aboutHeader">{aboutTitle}</h3>
                <p className="aboutDesc">{aboutProf}</p>
                <p className="aboutDesc">{aboutDev}</p>
                <p className="aboutDesc">{aboutFree}</p>
              </div>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default About;
