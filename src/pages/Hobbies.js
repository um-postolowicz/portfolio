import React from "react";
import { Consumer } from "../data/LanguageContext";
import Hobby from "../components/Hobby";

import plane from "../images/plane.jpg";
import stitch from "../images/stitch.jpg";
import fantasy from "../images/fantasy.jpg";
import jigsaw from "../images/jigsaw.jpg";

const Hobbies = () => {
  const height = window.screen.height;
  return (
    <Consumer>
      {({ label }) => {
        const {
          hobbiesTitle,
          aviationTitle,
          aviationTxt,
          crossStitchTitle,
          crossStitchTxt,
          fantasyBooksTitle,
          fantasyBooksTxt,
          jigsawTitle,
          jigsawTxt,
        } = label;
        return (
          <section className="hobbies" style={{ minHeight: height }}>
            <h3 className="hobbies__title">{hobbiesTitle}</h3>
            <div className="hobbies__container">
              <Hobby
                hobbyDesc={aviationTxt}
                hobbyName={aviationTitle}
                imgSrc={plane}
                mainClassName="hobbies__hobby hobbies__hobby-aviation"
              />
              <Hobby
                hobbyDesc={crossStitchTxt}
                hobbyName={crossStitchTitle}
                imgSrc={stitch}
                mainClassName="hobbies__hobby hobbies__hobby-crossStitch"
              />
              <Hobby
                hobbyDesc={fantasyBooksTxt}
                hobbyName={fantasyBooksTitle}
                imgSrc={fantasy}
                mainClassName="hobbies__hobby hobbies__hobby-fantasyBooks"
              />
              <Hobby
                hobbyDesc={jigsawTxt}
                hobbyName={jigsawTitle}
                imgSrc={jigsaw}
                mainClassName="hobbies__hobby hobbies__hobby-jigsaw"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Hobbies;
