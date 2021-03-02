import React from "react";
import { Consumer } from "../data/LanguageContext";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { creditsTitle, avatarText, borderText, hobbiesText } = label;
        return (
          <footer className="footer">
            <div className="footer__credits">
              <h5 className="footer__credits-title">{creditsTitle}</h5>
              <FooterLink
                mainTitle="avatarInfo"
                linkTextClass="footer__credits-desc"
                linkText={avatarText}
                linkClass="footer__credits-link"
                link="https://avatarmaker.com"
                linkName="Avatar Maker"
              />
              <FooterLink
                mainTitle="borderInfo"
                linkTextClass="footer__credits-desc"
                linkText={borderText}
                linkClass="footer__credits-link"
                link="https://freesvg.org"
                linkName="Free SVG"
              />
              <FooterLink
                mainTitle="hobbiesInfo"
                linkTextClass="footer__credits-desc"
                linkText={hobbiesText}
                linkClass="footer__credits-link"
                link="https://www.pexels.com"
                linkName="Pexels"
              />
            </div>
          </footer>
        );
      }}
    </Consumer>
  );
};

export default Footer;
