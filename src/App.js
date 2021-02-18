import React, { useState } from "react";
import { Provider } from "./data/LanguageContext";

import About from "./pages/About";
import LanguageChoice from "./components/LanguageChoice";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";

import { dictionary } from "./data/dictionary";

import "./styles/style.css";
import Hobbies from "./pages/Hobbies";

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
        <LanguageChoice />
        <MainPage />
        <About />
        <Technologies />
        <Projects />
        <Hobbies />
      </Provider>
    </div>
  );
}

export default App;
