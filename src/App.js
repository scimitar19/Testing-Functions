import React from "react";
import Level1 from "./something/Level1";


function App() {
  function transformation(some) {
    const displaying = some.reduce((value, element) => value + element, 0);

    console.log(displaying);
    return displaying
  }
  const transformed = Level1(transformation);

  return (
    <div>
      <h2>Let's get started! {transformed}</h2>
    </div>
  );
}

export default App;
