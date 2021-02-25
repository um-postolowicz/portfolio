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
            <div className="credits">
              <h5 className="creditsTitle">{creditsTitle}</h5>
              <FooterLink
                mainTitle="avatarInfo"
                linkTextClass="avatarText"
                linkText={avatarText}
                linkClass="avatarLink"
                link="https://avatarmaker.com"
                linkName="Avatar Maker"
              />
              <FooterLink
                mainTitle="borderInfo"
                linkTextClass="borderText"
                linkText={borderText}
                linkClass="borderLink"
                link="https://freesvg.org"
                linkName="Free SVG"
              />
              <FooterLink
                mainTitle="hobbiesInfo"
                linkTextClass="hobbiesText"
                linkText={hobbiesText}
                linkClass="hobbiesLink"
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
