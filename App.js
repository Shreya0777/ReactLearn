const Heading1 = React.createElement("h1", {
    id:"title",
}, "Heading 1");
const Heading2 = React.createElement("h2", {
    id:"title",
}, "Heading 2"); 
const container=React.createElement(
    "div",
{
    id:"container",
},
[Heading1,Heading2]
);
// console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);