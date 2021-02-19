import React, { useState } from "react";

const Hobby = ({
  descClassName,
  hobbyDesc,
  hobbyName,
  imgSrc,
  mainClassName,
  titleClassName,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => setIsClicked(!isClicked);

  return (
    <div className={mainClassName}>
      <div className="darkHover"></div>
      <div
        className="hexagon"
        onClick={handleClick}
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className={isClicked ? "hobbyText showTxt" : "hobbyText"}>
        <h4 className={titleClassName}>{hobbyName}</h4>
        <p className={descClassName}>{hobbyDesc}</p>
      </div>
    </div>
  );
};

export default Hobby;
