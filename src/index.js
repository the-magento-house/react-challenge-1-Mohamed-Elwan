import React from "react";
import ReactDOM from "react-dom";

import Example from './components/example'
import Counter from './components/counter'
import "./styles.css";

const App = () => {
  return <div></div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Example />, rootElement);

const counterElement = document.getElementById("counter");
ReactDOM.render( <Counter / > , counterElement);
