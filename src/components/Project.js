import React from "react";

const Project = ({
  alt,
  descClassName,
  descTxt,
  imgClassName,
  imgSrc,
  mainClassName,
  projectName,
  titleClassName,
}) => {
  return (
    <div className={mainClassName}>
      <h4 className={titleClassName}>{projectName}</h4>
      <img src={imgSrc} alt={alt} className={imgClassName} />
      <p className={descClassName}>{descTxt}</p>
    </div>
  );
};

export default Project;
