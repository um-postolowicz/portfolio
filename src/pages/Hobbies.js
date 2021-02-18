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
            <Hobby
              alt="A plane"
              descClassName="aviationTxt"
              hobbyDesc={aviationTxt}
              hobbyName={aviationTitle}
              imgClassName="aviationImg"
              imgSrc={plane}
              mainClassName="aviation"
              titleClassName="aviationTitle"
            />
            <Hobby
              alt="Embroidery"
              descClassName="crossStitchTxt"
              hobbyDesc={crossStitchTxt}
              hobbyName={crossStitchTitle}
              imgClassName="crossStitchImg"
              imgSrc={stitch}
              mainClassName="crossStitch"
              titleClassName="crossStitchTitle"
            />
            <Hobby
              alt="Fantasy Img"
              descClassName="fantasyBooksTxt"
              hobbyDesc={fantasyBooksTxt}
              hobbyName={fantasyBooksTitle}
              imgClassName="fantasyBooksImg"
              imgSrc={fantasy}
              mainClassName="fantasyBooks"
              titleClassName="fantasyBooksTitle"
            />
            <Hobby
              alt="Jigsaw puzzles"
              descClassName="jigsawTxt"
              hobbyDesc={jigsawTxt}
              hobbyName={jigsawTitle}
              imgClassName="jigsawImg"
              imgSrc={jigsaw}
              mainClassName="jigsaw"
              titleClassName="jigsawTitle"
            />
          </section>
        );
      }}
    </Consumer>
  );
};

export default Hobbies;
