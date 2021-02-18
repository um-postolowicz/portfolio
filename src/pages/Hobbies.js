import React from "react";
import { Consumer } from "../data/LanguageContext";

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
            <div className="aviation">
              <div className="darkHover"></div>
              <img src={plane} alt="A plane" className="aviationImg" />
              <h4 className="aviationTitle">{aviationTitle}</h4>
              <p className="aviationTxt">{aviationTxt}</p>
            </div>
            <div className="crossStitch">
              <div className="darkHover"></div>
              <img src={stitch} alt="Embroidery" className="crossStitchImg" />
              <h4 className="crossStitchTitle">{crossStitchTitle}</h4>
              <p className="crossStitchTxt">{crossStitchTxt}</p>
            </div>
            <div className="fantasyBooks">
              <div className="darkHover"></div>
              <img src={fantasy} alt="Embroidery" className="fantasyBooksImg" />
              <h4 className="fantasyBooksTitle">{fantasyBooksTitle}</h4>
              <p className="fantasyBooksTxt">{fantasyBooksTxt}</p>
            </div>
            <div className="jigsaw">
              <div className="darkHover"></div>
              <img src={jigsaw} alt="Jigsaw puzzles" className="jigsawImg" />
              <h4 className="jigsawTitle">{jigsawTitle}</h4>
              <p className="jigsawTxt">{jigsawTxt}</p>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Hobbies;
