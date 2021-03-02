import React from "react";
import { Consumer } from "../data/LanguageContext";
import Hobby from "../components/Hobby";

import plane from "../images/plane.jpg";
import stitch from "../images/stitch.jpg";
import fantasy from "../images/fantasy.jpg";
import jigsaw from "../images/jigsaw.jpg";

const Hobbies = () => {
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
          <section className="hobbies">
            <h3 className="hobbies__title">{hobbiesTitle}</h3>
            <div className="hobbies__container">
              <Hobby
                descClassName="hobbies__hobby-text-desc"
                hobbyDesc={aviationTxt}
                hobbyName={aviationTitle}
                imgSrc={plane}
                mainClassName="hobbies__hobby hobbies__hobby-aviation"
                titleClassName="hobbies__hobby-text-title"
              />
              <Hobby
                descClassName="hobbies__hobby-text-desc"
                hobbyDesc={crossStitchTxt}
                hobbyName={crossStitchTitle}
                imgSrc={stitch}
                mainClassName="hobbies__hobby hobbies__hobby-crossStitch"
                titleClassName="hobbies__hobby-text-title"
              />
              <Hobby
                descClassName="hobbies__hobby-text-desc"
                hobbyDesc={fantasyBooksTxt}
                hobbyName={fantasyBooksTitle}
                imgSrc={fantasy}
                mainClassName="hobbies__hobby hobbies__hobby-fantasyBooks"
                titleClassName="hobbies__hobby-text-title"
              />
              <Hobby
                descClassName="hobbies__hobby-text-desc"
                hobbyDesc={jigsawTxt}
                hobbyName={jigsawTitle}
                imgSrc={jigsaw}
                mainClassName="hobbies__hobby hobbies__hobby-jigsaw"
                titleClassName="hobbies__hobby-text-title"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Hobbies;
