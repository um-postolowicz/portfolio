import React from "react";

const FooterLink = ({ linkText, link, linkName }) => {
  return (
    <div className="footer-credits-piece">
      <p className="footer__credits-desc">{linkText}</p>
      <a
        className="footer__credits-link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {linkName}
      </a>
    </div>
  );
};

export default FooterLink;
