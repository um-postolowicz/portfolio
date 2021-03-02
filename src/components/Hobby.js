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
      <div
        className="hobbies__hobby-hexagon"
        onClick={handleClick}
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div
        className={isClicked ? "hobbies__hobby-darkHover" : null}
        onClick={handleClick}
      ></div>
      <div
        className={
          isClicked
            ? "hobbies__hobby-text hobbies__hobby-text--showTxt"
            : "hobbies__hobby-text"
        }
      >
        <h4 className={titleClassName}>{hobbyName}</h4>
        <p className={descClassName}>{hobbyDesc}</p>
      </div>
    </div>
  );
};

export default Hobby;
