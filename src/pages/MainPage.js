import React from "react";
import { Consumer } from "../data/LanguageContext";
import Header from "../components/Header";
import avatar from "../images/avatar.svg";

const MainPage = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { welcome, name, profession, invitation, avatarAlt } = label;
        return (
          <>
            <section className="main-page">
              <Header />
              <div className="main-page__introduction">
                <h1 className="main-page__welcome">{welcome}</h1>
                <h1 className="main-page__name">{name}</h1>
                <h1 className="main-page__profession">{profession}</h1>
                <h2 className="main-page__invitation">{invitation}</h2>
              </div>
              <div className="main-page__avatar">
                <img
                  src={avatar}
                  alt={avatarAlt}
                  className="main-page__avatar-img"
                />
              </div>
            </section>
          </>
        );
      }}
    </Consumer>
  );
};

export default MainPage;
