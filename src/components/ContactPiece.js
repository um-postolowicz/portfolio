import React from "react";

const ContactPiece = ({
  mainClassName,
  contactLink,
  contactClassTitle,
  contactTitle,
  contactIcon,
  dataClassTitle,
  contactData,
}) => {
  return (
    <>
      <a
        className={mainClassName}
        href={contactLink}
        target="_blank"
        rel="noreferrer"
      >
        <h4 className={contactClassTitle}>{contactTitle}</h4>
        <div className="contact__piece-icon">{contactIcon}</div>
        <p className={dataClassTitle}>{contactData}</p>
      </a>
    </>
  );
};

export default ContactPiece;
