import React from "react";

const ContactPiece = ({
  mainClassName,
  contactLink,
  contactTitle,
  contactIcon,
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
        <h4 className="contact__piece-title">{contactTitle}</h4>
        <div className="contact__piece-icon">{contactIcon}</div>
        <p className="contact__piece-data">{contactData}</p>
      </a>
    </>
  );
};

export default ContactPiece;
