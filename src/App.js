import React, { useState } from "react";
import { Provider } from "./data/LanguageContext";

import MainPage from "./pages/MainPage";
import LanguageChoice from "./components/LanguageChoice";
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
        <LanguageChoice />
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
