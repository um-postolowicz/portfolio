import React from "react";

const FooterLink = ({
  mainTitle,
  linkTextClass,
  linkText,
  linkClass,
  link,
  linkName,
}) => {
  return (
    <div className={mainTitle}>
      <p className={linkTextClass}>{linkText}</p>
      <a className={linkClass} href={link} target="_blank" rel="noreferrer">
        {linkName}
      </a>
    </div>
  );
};

export default FooterLink;
