"use strict";

import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "h1",
  { className: "react-class", id: "none" },
  "Hello from Aditya, React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

//

{
  /* <div class='parent'>

    <div class="child">
        <h1>What's up react</h1>


    </div>

</div> */
}

const newElement = React.createElement("div", { class: "parent" }, [
  React.createElement(
    "div",
    { class: "child" },
    React.createElement("h3", {}, "What's up react")
  ),
  React.createElement(
    "div",
    { class: "child2" },
    React.createElement("h3", {}, "What's up react 2")
  ),
]);

root.render(newElement);
