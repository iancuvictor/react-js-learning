import { sculptureList } from "./components/data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [sculptureShown, setSculptureShown] = useState(0);

  function nextSculpture() {
    setSculptureShown(sculptureShown + 1);
  }

  let currentSculpture = sculptureList[sculptureShown]

  return (
    <>
      <button onClick={() => nextSculpture()}></button>
      <div key={currentSculpture}>
        <h4>{currentSculpture.name}</h4>
        <h5>{currentSculpture.artist}</h5>
        <p>{currentSculpture.description}</p>
        <img src={currentSculpture.url} alt={currentSculpture.alt} />
      </div>
    </>
  );
}

export default App;
