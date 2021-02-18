import React from "react";

const TechPiece = ({ techClassName, techIcon, techMain, techName }) => {
  return (
    <div className={techMain}>
      {techIcon}
      <p className={techClassName}>{techName}</p>
    </div>
  );
};

export default TechPiece;
