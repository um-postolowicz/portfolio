import React from "react";
import { Consumer } from "../data/LanguageContext";

import polishFlag from "../images/poland.svg";
import ukFlag from "../images/uk.svg";

const LanguageChoice = () => {
  return (
    <Consumer>
      {({ setLanguage }) => {
        return (
          <div className="header__languages">
            <div className="header__flag" onClick={() => setLanguage("polish")}>
              <img
                src={polishFlag}
                alt="Polish flag"
                className="header__flag--poland"
              />
            </div>
            <div
              className="header__flag"
              onClick={() => setLanguage("english")}
            >
              <img src={ukFlag} alt="UK flag" className="header__flag--uk" />
            </div>
          </div>
        );
      }}
    </Consumer>
  );
};

export default LanguageChoice;
