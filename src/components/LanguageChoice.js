import React from "react";
import { Consumer } from "../data/LanguageContext";

import polishFlag from "../images/poland.svg";
import ukFlag from "../images/uk.svg";

const LanguageChoice = () => {
  return (
    <Consumer>
      {({ setLanguage }) => {
        return (
          <div className="languages">
            <div className="polish flag" onClick={() => setLanguage("polish")}>
              <img src={polishFlag} alt="Polish flag" className="poland" />
            </div>
            <div
              className="english flag"
              onClick={() => setLanguage("english")}
            >
              <img src={ukFlag} alt="UK flag" className="uk" />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default LanguageChoice;
