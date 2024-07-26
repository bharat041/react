
// const heading = React.createElement("h1", { id : "heading"}, "Hello World")

// console.log(heading)

{/* <div id="parent">
        <div id="child">
            <h1 id="">Hello I'm a h1 tag</h1>
        </div>
    </div> */}

import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";


// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", {}, "Hello I'm a h1 tag"), React.createElement("h2", {}, "Hello I'm a h2 tag"),
//         ],
//         React.createElement("div", { id: "child" },
//             [React.createElement("h1", {}, "Hello I'm a h1 tag"),
//             React.createElement("h2", {}, "Hello I'm a h2 tag"),
// ]
//
// )
// )
// )

// React.createElement -> Object -> HTMLElement after rendering

//JSX :- HTML like syntax
// JSX -> React.createElement -> React.createElement - JS Object -> HTMLElement after rendering
const jsxHeading = (<h1
    className="head">React using JSX
</h1>
);

//React Component
//Class Based Component

//Functional Based Component
// const HeadingComponent = () => {
//     return <h1>React Functional Component</h1>
// }

// React Component
// React Functional Component

const TitleComponent = function() {
    return <h1>This is a title functional component!</h1>
}

// Component Composition
// using arrow functions is a good way to do it.
const data = 10000;
const HeadingComponent = () => {
    return (
        <div>
            {/* {TitleComponent()} */}
            <h2>{data}</h2>
            {jsxHeading}
            <TitleComponent/>
            <TitleComponent></TitleComponent>
            <h1>This is a heading Functional component!</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);

// root.render(<HeadingComponent/>);
root.render(<HeadingComponent />)
