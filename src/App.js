import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <div className="App">
          <h1 style={{ color: "white", fontSize: "100px" }}>
            Fahim Faysal Siyam{" "}
          </h1>
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
