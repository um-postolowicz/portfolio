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
            <h3 className="hobbiesTitle">{hobbiesTitle}</h3>
            <div className="hobbiesTiles">
              <Hobby
                descClassName="aviationTxt"
                hobbyDesc={aviationTxt}
                hobbyName={aviationTitle}
                imgSrc={plane}
                mainClassName="aviation hobby"
                titleClassName="aviationTitle"
              />
              <Hobby
                descClassName="crossStitchTxt"
                hobbyDesc={crossStitchTxt}
                hobbyName={crossStitchTitle}
                imgSrc={stitch}
                mainClassName="crossStitch hobby"
                titleClassName="crossStitchTitle"
              />
              <Hobby
                descClassName="fantasyBooksTxt"
                hobbyDesc={fantasyBooksTxt}
                hobbyName={fantasyBooksTitle}
                imgSrc={fantasy}
                mainClassName="fantasyBooks hobby"
                titleClassName="fantasyBooksTitle"
              />
              <Hobby
                descClassName="jigsawTxt"
                hobbyDesc={jigsawTxt}
                hobbyName={jigsawTitle}
                imgSrc={jigsaw}
                mainClassName="jigsaw hobby"
                titleClassName="jigsawTitle"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Hobbies;
