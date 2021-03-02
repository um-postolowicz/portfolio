import React from "react";

const TechPiece = ({ techIcon, techMain, techName }) => {
  return (
    <div className={techMain}>
      {techIcon}
      <p className="technologies__piece-title">{techName}</p>
    </div>
  );
};

export default TechPiece;
