import React from "react";

const Child=React.memo(
    function Child() {
  console.log("Child rendered");
  return <p>I am Child component</p>;
}
)

export default Child;
