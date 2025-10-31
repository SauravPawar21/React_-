/*
 <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h1>I'm h1 tag</h1>
    </div>
 </div>
*/

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