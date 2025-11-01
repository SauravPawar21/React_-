import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement(
        "div",
        {id:"child"},
       [React.createElement("h1",{},"I'm an H1 tag!"),React.createElement("h1",{},"I'm an H1 tag!")]
    ),React.createElement(
        "div",
        {id:"child"},
       [React.createElement("h1",{},"I'm an H1 tag!"),React.createElement("h1",{},"I'm an H1 tag!")]
    )]
)


const hedaing = React.createElement("h1",{id:"heading"},"Hellow world in React!");
console.log(hedaing);//object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);