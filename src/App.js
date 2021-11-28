import "./App.css";
import React from "react";
import {default as busLogo} from "./img/Bus_by_Cho_Nix_from_the_Noun_Project.svg";

const App = () => {
  return (
    <>
      <header className="center-grid">METRO</header>
      <div id="main" className="center-grid">
        ADULT ($2.75)
        <div id="code">
          <span className="opaque">
            SHOW
            <br />
            CODE
          </span>
          <img
            id="aztec"
            src="https://i.stack.imgur.com/uVnDs.png"
            alt="Aztec code" />
        </div>
        <div className="marquee opaque" id="marquee0">
          T<img id="bus" src={busLogo} alt="bus logo"/>
        </div>
        <div className="marquee opaque" id="marquee1">
          T<img id="bus" src={busLogo} alt="bus logo"/>
        </div>
      </div>
      <footer className="center-grid">
        <p id="date">10/31/21 05:22 PM</p>
        <p>Expiration Date & Time</p>
      </footer>
    </>
  );
};

export default App;
