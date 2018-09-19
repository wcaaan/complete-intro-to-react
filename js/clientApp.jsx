import React from "react";
import { render } from "react-dom";

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>DaMotionPicture</h1>
      <input type="text" placeholder="Search" />
      <a>Or Browser All</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
