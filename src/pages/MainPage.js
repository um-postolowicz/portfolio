import React from "react";
import avatar from "../images/avatar.svg";

const MainPage = () => {
  return (
    <>
      <section className="mainPage">
        <div className="introduction">
          <h1 className="welcome">Hi!</h1>
          <h1 className="name">My name is Urszula Maria Postołowicz</h1>
          <h1 className="profession">I'm a FrontEnd Developer</h1>
          <h2 className="invitation">Be my guest!</h2>
        </div>
        <img src={avatar} alt="avatar" className="avatar" />
      </section>
    </>
  );
};

export default MainPage;
