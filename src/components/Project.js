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
      <a
        className={titleClassName}
        href={projectLink}
        target="_blank"
        rel="noreferrer"
      >
        <h4>{projectName}</h4>
      </a>
      <img
        src={imgSrc}
        alt={alt}
        className={imgClassName}
        onClick={handleShowLink}
      />
      <p className={descClassName}>{descTxt}</p>
      {showLink ? (
        <div className="projects__project-gitlink">
          <a href={githubLink} target="_blank" rel="noreferrer">
            {githubLink}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Project;
