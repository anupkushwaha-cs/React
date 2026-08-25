import React from './react';

let root = document.querySelector("#root");

let h1 = React.createElement("h4" ,{className:"hello"}, "Hello bro kaise ho");

ReactDOM.createRoot(root).render(h1);