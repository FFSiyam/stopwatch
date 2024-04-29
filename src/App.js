import React, { Component } from "react";
import Stopwatch from "./Stopwatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App-Container">
        <div className="App">
          <h2 style={{ color: "white", fontSize: "100px" }}>Calculator</h2>
          <Stopwatch />
        </div>
      </div>
    );
  }
}

export default App;
