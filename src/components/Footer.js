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
                linkText={avatarText}
                link="https://avatarmaker.com"
                linkName="Avatar Maker"
              />
              <FooterLink
                linkText={borderText}
                link="https://freesvg.org"
                linkName="Free SVG"
              />
              <FooterLink
                linkText={hobbiesText}
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
