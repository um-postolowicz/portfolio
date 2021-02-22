import React, { useState } from "react";

const Project = ({
  alt,
  descClassName,
  descTxt,
  githubLink,
  imgClassName,
  imgSrc,
  mainClassName,
  projectLink,
  projectName,
  titleClassName,
}) => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => setShowLink(!showLink);

  return (
    <div className={mainClassName}>
      <a href={projectLink}>
        <h4 className={titleClassName}>{projectName}</h4>
      </a>
      <img
        src={imgSrc}
        alt={alt}
        className={imgClassName}
        onClick={handleShowLink}
      />
      <p className={descClassName}>{descTxt}</p>
      {showLink ? (
        <div className="link">
          <a href={githubLink}>{githubLink}</a>
        </div>
      ) : null}
    </div>
  );
};

export default Project;
