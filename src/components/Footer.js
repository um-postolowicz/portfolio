import React from "react";
import { Consumer } from "../data/LanguageContext";

const Footer = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { creditsTitle, avatarText, borderText, hobbiesText } = label;
        return (
          <footer className="footer">
            <div className="credits">
              <h5 className="creditsTitle">{creditsTitle}</h5>
              <div className="avatarInfo">
                <p className="avatarText">{avatarText}</p>
                <a className="avatarLink" href="https://avatarmaker.com">
                  Avatar Maker
                </a>
              </div>
              <div className="borderInfo">
                <p className="borderText">{borderText}</p>
                <a href="https://freesvg.org" className="borderLink">
                  Free SVG
                </a>
              </div>
              <div className="hobbiesInfo">
                <p className="hobbiesText">{hobbiesText}</p>
                <a href="https://www.pexels.com" className="hobbiesLink">
                  Pexels
                </a>
              </div>
            </div>
          </footer>
        );
      }}
    </Consumer>
  );
};

export default Footer;
