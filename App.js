import React from "react";
import ReactDOM from "react-dom/client";

//jsx (Transpiled before it reaches the JS) - parcel - Bable

//JSX ==> Babel transpiltes it ot React.createElement ==> ReactElement- JS Obj. ==> HTMLElement(render)
//React.CreateElement

// const heading = React.createElement("h1",{id:"heading"},"Namaste React");


// const jsxHeading=(
// <h1 className="head" tabIndex={5}>
//     This is jsx code
//     </h1>
// );



// const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(jsxHeading);    

//React Coomponents
//1.Class based component.
//2.Functional Component.


const ele=<span>React element</span>
const number = 10000;

const Title = () =>{
    return(
    <h1 className="Title">
        Title comeponet {number}
        {ele}
    </h1>
    )
}
const HeadingComponent=()=>{
    return (
    <div id="container">
        <Title/>
        <h1>namste functional componet</h1>
    </div>
    )
};

//we can also write like that if we have one line only
const fn = () => true;

const fn2=()=>{
    return true;
}

const root =ReactDOM.createRoot(document.getElementById("root"));

//how we render the componets
root.render(<HeadingComponent/>)