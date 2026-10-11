import React from "react";

let a = 10;

const About = ({ greet }) => {
  greet();
  console.log("about rendering...");
  return (
    <div>
      <h1>about this side..</h1>
    </div>
  );
};

export default React.memo(About);
