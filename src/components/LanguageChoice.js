import React, { useContext } from "react";
import { LanguageContext } from "../data/LanguageContext";

import polishFlag from "../images/poland.svg";
import ukFlag from "../images/uk.svg";

const LanguageChose = () => {
  const { handleLanguageChange } = useContext(LanguageContext);
  return (
    <div className="languages">
      <div className="polish" onClick={handleLanguageChange}>
        <img src={polishFlag} alt="Polish flag" className="poland" />
      </div>
      <div className="english" onClick={handleLanguageChange}>
        <img src={ukFlag} alt="UK flag" className="uk" />
      </div>
    </div>
  );
};

export default LanguageChose;
