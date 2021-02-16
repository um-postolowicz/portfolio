import React from "react";
import { Consumer } from "../data/LanguageContext";
import avatar from "../images/avatar.svg";

const MainPage = () => {
  return (
    <Consumer>
      {({ label }) => {
        return (
          <section className="mainPage">
            <div className="introduction">
              <h1 className="welcome">{label.welcome}</h1>
              <h1 className="name">{label.name}</h1>
              <h1 className="profession">{label.profession}</h1>
              <h2 className="invitation">{label.invitation}</h2>
            </div>
            <img src={avatar} alt="avatar" className="avatar" />
          </section>
        );
      }}
    </Consumer>
  );
};

export default MainPage;
