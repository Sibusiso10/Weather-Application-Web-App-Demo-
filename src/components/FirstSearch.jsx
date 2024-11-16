import "../styles/FirstSearch.css";
import { useState } from "react";

function FirstSearch({ changeState, show }) {
  const [inputValue, setInputvalue] = useState("");

  const handleChange = (event) => {
    setInputvalue(event.target.value);
  };
  const handleSet = (State) => {
    changeState(State);
    show(true);
  };
  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="tittle">
            <h1>The Weather</h1>
          </div>
          <div className="enterLocation">
            <p>Enter location:</p>
          </div>
          <div className="Container1">
            <input type="text" value={inputValue} onChange={handleChange} />
            <button
              onClick={() => {
                if (inputValue !== "") {
                  handleSet(inputValue);
                }
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSearch;
