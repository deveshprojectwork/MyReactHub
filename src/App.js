import React from "react";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React from me an test it
        </a>

        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <input type="submit" value="Submit" />

        <a>this is my first web site in visul studio code</a>
      </header>
    </div>
  );
}

export default App;
