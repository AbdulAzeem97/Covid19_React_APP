import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar.js";
import InfoPanel from "./Components/InfoPanel.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <InfoPanel />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
