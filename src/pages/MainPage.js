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
            <section className="mainPage">
              <Header />
              <div className="introduction">
                <h1 className="welcome">{welcome}</h1>
                <h1 className="name">{name}</h1>
                <h1 className="profession">{profession}</h1>
                <h2 className="invitation">{invitation}</h2>
              </div>
              <div className="avatar">
                <img src={avatar} alt={avatarAlt} className="avatarImg" />
              </div>
            </section>
          </>
        );
      }}
    </Consumer>
  );
};

export default MainPage;
