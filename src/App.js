import React, { useState } from "react";
import { Provider } from "./data/LanguageContext";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Hobbies from "./pages/Hobbies";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";

import { dictionary } from "./data/dictionary";

import "./styles/style.css";

function App() {
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (languageValue) => setLanguage(languageValue);

  return (
    <div className="wrapper">
      <Provider
        value={{
          label: dictionary[language],
          language: language,
          setLanguage: handleLanguageChange,
        }}
      >
        <MainPage id="welcome" />
        <About id="about" />
        <Technologies id="technologies" />
        <Projects id="projects" />
        <Hobbies id="hobbies" />
        <Contact id="contact" />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
