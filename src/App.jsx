import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import AddDisease from "./pages/AddDisease";

const App = () => (
  <div className="container">
    <AddDisease />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
