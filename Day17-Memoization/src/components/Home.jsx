import React from "react";

const Home = ({ users }) => {
  console.log("home rendering...");
  return (
    <div>
      <h1>Home this side</h1>
    </div>
  );
};

export default React.memo(Home);
