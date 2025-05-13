import React from "react";
import ReactDOM from "react-dom/client";

//creating heading via core-react functions
const heading = React.createElement("h1", { id: "heading" }, "Hello World from Namastey React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//creating heading via JSX
//JSX - Transpiled before it reaches the browser -> Parcel -> Babel
const jsxheading =
    <div>
        <h1
            id="heading">
            Hello World from  Namastey React! via 2JSX
        </h1>
        <h2> this is second heading via jsx </h2>
    </div>;
root.render(jsxheading);


//react functional component
const HeadingComponent = (prop) => {
    return (
        <div>
            <h1> Hello World from Namastey React! via functional component { }</h1>
            <h2> this is second heading via functional component { } </h2>
        </div>
    );
}

root.render(HeadingComponent());
console.log(HeadingComponent());
console.log(<HeadingComponent />);

const CompositeComponent = () => { //this is a component composition  <!-- this is a react element inside component -->
    return (
        <div>

            {jsxheading}
            <HeadingComponent data-via="composition" />
            <HeadingComponent data-via="composition" />
            <HeadingComponent data-via="composition" />
        </div>
    );
}

root.render(<CompositeComponent />);