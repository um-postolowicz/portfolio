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
            <h3 className="contactTitle">{contactTitle}</h3>
            <div className="contactTiles">
              <ContactPiece
                mainClassName="email contactTile"
                contactLink="https://www.gmail.com"
                contactClassTitle="emailTitle"
                contactTitle="Email"
                contactIcon={<HiOutlineMailOpen />}
                dataClassTitle="emailTxt"
                contactData="u.postolowicz@gmail.com"
              />
              <ContactPiece
                mainClassName="facebook contactTile"
                contactLink="https://www.facebook.com/profile.php?id=100004203695582"
                contactClassTitle="facebookTitle"
                contactTitle="Facebook"
                contactIcon={<FaFacebookSquare />}
                dataClassTitle="facebookTxt"
                contactData="Ula Postołowicz"
              />
              <ContactPiece
                mainClassName="linkedin contactTile"
                contactLink="https://www.linkedin.com/in/urszula-maria-postołowicz-311866207/"
                contactClassTitle="linkedinTitle"
                contactTitle="LinkedIn"
                contactIcon={<FaLinkedin />}
                dataClassTitle="linkedinTxt"
                contactData="Urszula Maria Postołowicz"
              />
              <ContactPiece
                mainClassName="github contactTile"
                contactLink="https://github.com/um-postolowicz"
                contactClassTitle="githubTitle"
                contactTitle="GitHub"
                contactIcon={<FaGithubSquare />}
                dataClassTitle="githubTxt"
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
