import React from "react";

function Test() {
  const handleSwitch = (par) => {
    switch (par) {
      case "yes":
        return <div>Hello</div>;
      case "no":
        return <div>Hell no</div>;

      default:
        return <div>Nope</div>;
    }
  };
  return <div>{handleSwitch("no")}</div>;
}

export default Test;
