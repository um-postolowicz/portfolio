import React from "react";
import { Consumer } from "../data/LanguageContext";
import ContactPiece from "../components/ContactPiece";

import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";

const Contact = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { contactTitle } = label;
        return (
          <section className="contact">
            <h3 className="contact__title">{contactTitle}</h3>
            <div className="contact__container">
              <ContactPiece
                mainClassName="contact__piece contact__piece-email"
                contactLink="https://www.gmail.com"
                contactClassTitle="contact__piece-title"
                contactTitle="Email"
                contactIcon={<HiOutlineMailOpen />}
                dataClassTitle="contact__piece-data"
                contactData="u.postolowicz@gmail.com"
              />
              <ContactPiece
                mainClassName="contact__piece contact__piece-facebook"
                contactLink="https://www.facebook.com/profile.php?id=100004203695582"
                contactClassTitle="contact__piece-title"
                contactTitle="Facebook"
                contactIcon={<FaFacebookSquare />}
                dataClassTitle="contact__piece-data"
                contactData="Ula Postołowicz"
              />
              <ContactPiece
                mainClassName="contact__piece contact__piece-linkedin"
                contactLink="https://www.linkedin.com/in/urszula-maria-postołowicz-311866207/"
                contactClassTitle="contact__piece-title"
                contactTitle="LinkedIn"
                contactIcon={<FaLinkedin />}
                dataClassTitle="contact__piece-data"
                contactData="Urszula Maria Postołowicz"
              />
              <ContactPiece
                mainClassName="contact__piece contact__piece-github"
                contactLink="https://github.com/um-postolowicz"
                contactClassTitle="contact__piece-title"
                contactTitle="GitHub"
                contactIcon={<FaGithubSquare />}
                dataClassTitle="contact__piece-data"
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
