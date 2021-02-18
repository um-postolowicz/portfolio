import React from "react";
import { Consumer } from "../data/LanguageContext";
import avatar from "../images/avatar.svg";

const MainPage = () => {
  return (
    <Consumer>
      {({ label }) => {
        const { welcome, name, profession, invitation } = label;
        return (
          <section className="mainPage">
            <div className="introduction">
              <h1 className="welcome">{welcome}</h1>
              <h1 className="name">{name}</h1>
              <h1 className="profession">{profession}</h1>
              <h2 className="invitation">{invitation}</h2>
            </div>
            <div className="avatar">
              <img src={avatar} alt="avatar" className="avatarImg" />
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default MainPage;
