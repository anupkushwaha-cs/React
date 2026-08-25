// console.log(React);
// let h1 = document.createElement("h1");
// h1.textContent = "Hello ";
// document.body.append(h1);

// let rh1 = React.createElement("span", {}, "Hello I m From React");

// console.log("Real DOM =>", h1);
// console.log("Virtual DOM =>", rh1);



let h1 = document.createElement("h1");
h1.textContent = "Hello";

console.log(h1);

let rh1 = React.createElement(
    "h1",
    null, 
    React.createElement("span",{}, "I am Under h1")

);

let realDomElem = document.querySelector("#root");
let rootOfReact = ReactDOM.createElement(realDomElem);

rootOfReact(rh1);
