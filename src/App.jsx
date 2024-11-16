import { useState } from "react";
import "./App.css";
import FirstSearch from "./components/FirstSearch";
import MainWeather from "./components/MainWeather";

function App() {
  const [state, getState] = useState(" ");
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="mainFrame">
        {!show ? (
          <FirstSearch changeState={getState} show={setShow} />
        ) : (
          <MainWeather city={state} />
        )}
      </div>
    </>
  );
}
export default App;
