import React from "react";
import { Consumer } from "../data/LanguageContext";

import polishFlag from "../images/poland.svg";
import ukFlag from "../images/uk.svg";

const LanguageChoice = () => {
  return (
    <Consumer>
      {({ language, setLanguage }) => {
        return (
          <div className="languages">
            <div className="polish" onClick={() => setLanguage("polish")}>
              <img src={polishFlag} alt="Polish flag" className="poland" />
            </div>
            <div className="english" onClick={() => setLanguage("english")}>
              <img src={ukFlag} alt="UK flag" className="uk" />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default LanguageChoice;
