import React from "react";
import MainPage from "./pages/MainPage";
import LanguageChoice from "./components/LanguageChoice";
import "./styles/style.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <LanguageChoice />
        <MainPage />
      </div>
    </>
  );
}

export default App;
