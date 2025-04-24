const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc", onClick: () => { } }, //attributes here 
    "Hello World from React!"
);
//first argument is the tag,2nd is the attribute & 3rd is the content/children(array of children)/innerHtml for tag basically the child node of the tag.

const root = ReactDOM.createRoot(document.getElementById("h2"));
root.render(heading);


/*
*   <div id ="parent">
*        <div id="child">
*           <h1>I'm h1 tag</h1>
*           <h2>I'm h2 tag</h2>
*        </div>
*   </div>
*/
const ele = document.createElement('h1');
ele
//for nested structure
const parent = React.createElement(
    'div',
    { id: "parent" },
    React.createElement(
        'div',
        { id: "child" },
        [
            React.createElement('h1', {}, "I'm h1 tag"),
            React.createElement('h2', {}, "I'm h2 tag")
        ]//array of children to make them siblings
    )
);

root.render(parent);
