import React from "react";
import { Consumer } from "../data/LanguageContext";
import ContactPiece from "../components/ContactPiece";

import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  const height = window.outerHeight;
  return (
    <Consumer>
      {({ label }) => {
        const { contactTitle } = label;
        return (
          <section className="contact" style={{ height: height }}>
            <h3 className="contact__title">{contactTitle}</h3>
            <div className="contact__container">
              <ContactPiece
                mainClassName="contact__piece contact__piece-email"
                contactLink="https://www.gmail.com"
                contactTitle="Email"
                contactIcon={<HiOutlineMailOpen />}
                contactData="u.postolowicz@gmail.com"
              />
              <ContactPiece
                mainClassName="contact__piece contact__piece-facebook"
                contactLink="https://www.facebook.com/profile.php?id=100004203695582"
                contactTitle="Facebook"
                contactIcon={<FaFacebookSquare />}
                contactData="Ula Postołowicz"
              />
              <ContactPiece
                mainClassName="contact__piece contact__piece-linkedin"
                contactLink="https://www.linkedin.com/in/urszula-maria-postołowicz-311866207/"
                contactTitle="LinkedIn"
                contactIcon={<FaLinkedin />}
                contactData="Urszula Maria Postołowicz"
              />
              <ContactPiece
                mainClassName="contact__piece contact__piece-github"
                contactLink="https://github.com/um-postolowicz"
                contactTitle="GitHub"
                contactIcon={<FaGithubSquare />}
                contactData="um-postolowicz"
              />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Contact;
