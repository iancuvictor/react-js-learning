import { sculptureList } from "./components/data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [sculptureShown, setSculptureShown] = useState(sculptureList[0]);

  function nextSculpture() {
    setSculptureShown(sculptureList[sculptureList.indexOf(sculptureShown) + 1]);
  }

  return (
    <>
      <button onClick={() => nextSculpture()}></button>
      <div key={sculptureShown}>
        <h4>{sculptureShown.name}</h4>
        <h5>{sculptureShown.artist}</h5>
        <p>{sculptureShown.description}</p>
        <img src={sculptureShown.url} alt={sculptureShown.alt} />
      </div>
    </>
  );
}

export default App;
