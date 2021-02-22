import React from "react";
import { Consumer } from "../data/LanguageContext";
import border from "../images/about-border.svg";

const About = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { about, aboutTitle } = label;
        return (
          <section className="about">
            <div className="borderDiv borderTopLeft">
              <img
                src={border}
                alt="Floral border"
                className="border topLeft"
              />
            </div>
            <div className="borderDiv borderTopRight">
              <img
                src={border}
                alt="Floral border"
                className="border topRight"
              />
            </div>
            <div className="borderDiv borderBottomLeft">
              <img
                src={border}
                alt="Floral border"
                className="border bottomLeft"
              />
            </div>
            <div className="borderDiv borderBottomRight">
              <img
                src={border}
                alt="Floral border"
                className="border bottomRight"
              />
            </div>
            <div className="aboutTxt">
              <h3 className="aboutHeader">{aboutTitle}</h3>
              <p className="aboutDesc">{about}</p>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default About;
