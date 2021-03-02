import React, { useState } from "react";

const Project = ({
  alt,
  descTxt,
  githubLink,
  imgSrc,
  mainClassName,
  projectLink,
  projectName,
}) => {
  const [showLink, setShowLink] = useState(false);

  const handleShowLink = () => setShowLink(!showLink);

  return (
    <div className={mainClassName}>
      <a
        className="projects__project-title"
        href={projectLink}
        target="_blank"
        rel="noreferrer"
      >
        <h4>{projectName}</h4>
      </a>
      <img
        src={imgSrc}
        alt={alt}
        className="projects__project-img"
        onClick={handleShowLink}
      />
      <p className="projects__project-desc">{descTxt}</p>
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
