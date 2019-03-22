import React from "react";
import ReactDOM from "react-dom";

import Example from './components/example'
import Counter from './components/counter'
import "./styles.css";

const App = () => {
    return <div>
        <Example/>
        <div> --------------------</div>
        <Counter/>
    </div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);