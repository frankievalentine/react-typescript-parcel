import * as React from "react";
import { render } from "react-dom";
import { Hello } from "../components/Hello";
// import './index.css'

const App = () => {
    return (
        <div>
            {/* make sure Typescript is working by using number type */}
            <Hello compiler="Parcel" framework="React" />
        </div>
    );
};

render(<App />, document.getElementById("app"));
