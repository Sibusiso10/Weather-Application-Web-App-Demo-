import { useState } from "react";
import SearchIcon from "../assets/SearchIcon.svg";

function InnerSearch({ changeState }) {
  const [valueState, setValueState] = useState("");

  const handleChange = (event) => {
    setValueState(event.target.value);
  };
  const handleSet = (valueState) => {
    changeState(valueState);
    console.log(valueState);
  };

  return (
    <>
      <div className="inSearch">
        <input type="text" onChange={handleChange} />

        {/*<input type="text" value={valueState} onChange={handleChange} />*/}
        <div className="SearchIcon">
          <img
            src={SearchIcon}
            alt="SearchIcon"
            onClick={() => {
              handleSet(valueState);
            }}
          />
        </div>
      </div>
    </>
  );
  s;
}

export default InnerSearch;
