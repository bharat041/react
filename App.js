
// const heading = React.createElement("h1", { id : "heading"}, "Hello World")

// console.log(heading)

{/* <div id="parent">
        <div id="child">
            <h1 id="">Hello I'm a h1 tag</h1>
        </div>
    </div> */}

import React from "react";
import ReactDOM from "react-dom/client"


const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "Hello I'm a h1 tag"), React.createElement("h2", {}, "Hello I'm a h2 tag"),
        ],
        React.createElement("div", { id: "child" },
            [React.createElement("h1", {}, "Hello I'm a h1 tag"),
            React.createElement("h2", {}, "Hello I'm a h2 tag"),
            ]

        )
    )
)
    ;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
