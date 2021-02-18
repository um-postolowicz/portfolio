import React from "react";

const Hobby = ({
  alt,
  descClassName,
  hobbyDesc,
  hobbyName,
  imgClassName,
  imgSrc,
  mainClassName,
  titleClassName,
}) => {
  return (
    <div className={mainClassName}>
      <div className="darkHover"></div>
      <img src={imgSrc} alt={alt} className={imgClassName} />
      <h4 className={titleClassName}>{hobbyName}</h4>
      <p className={descClassName}>{hobbyDesc}</p>
    </div>
  );
};

export default Hobby;
