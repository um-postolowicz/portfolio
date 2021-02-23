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
                <a
                  className="avatarLink"
                  href="https://avatarmaker.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Avatar Maker
                </a>
              </div>
              <div className="borderInfo">
                <p className="borderText">{borderText}</p>
                <a
                  href="https://freesvg.org"
                  className="borderLink"
                  target="_blank"
                  rel="noreferrer"
                >
                  Free SVG
                </a>
              </div>
              <div className="hobbiesInfo">
                <p className="hobbiesText">{hobbiesText}</p>
                <a
                  href="https://www.pexels.com"
                  className="hobbiesLink"
                  target="_blank"
                  rel="noreferrer"
                >
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
