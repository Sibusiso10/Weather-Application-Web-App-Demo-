import useWeatherFetcher from "./useWeatherFetcher";
import useBackGroundColor from "./useBackgroundColor";
import InnerSearch from "./InnerSearch";
import { useEffect, useState } from "react";
import "../styles/MainWeather.css";
import Clock from "./Clock";
import humidityIcon from "../assets/humidityIcon.svg";
import pressureIcon from "../assets/pressureIcon.svg";
import WindIcon from "../assets/WindIcon.svg";
import TheWeatherIcon from "./TheWeatherIcon";

function MainWeather({ city }) {
  //Fetching the weather
  const [state, setState] = useState(city);
  const [loading, setIsLoading] = useState(true);
  const apiKey = "46f2782210adc4f2e61e34d0c6ae52fe";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  const data = useWeatherFetcher(apiUrl);
  const [type, setType] = useState("cover");
  const [discription, setDiscription] = useState("");
  //loging the data to check for any errors}
  console.log(type, data);

  useEffect(() => {
    if (data && data.weather && data.weather[0]?.main) {
      //This is line 23
      console.log(useBackGroundColor(data.weather[0].main));
      setType(useBackGroundColor(data.weather[0].main));
      setDiscription(data.weather[0].description);
      setIsLoading(false);
    }
  }, [data]);

  console.log(type);
  return (
    <>
      <div className={loading ? "clear-skies" : type}>
        <div className="mainContainerBackGround">
          <div className="innerSearchBar">
            <InnerSearch changeState={setState} />
            <div className="mobileClock">The clock</div>
          </div>
          <div className="weatherData">
            {data && data.weather ? (
              <div className="mainWeatherframe">
                <div className="tempAndIcon">
                  <div className="locAndTempContainer">
                    <div className="tempAndLoc">
                      <div className="containerLocAndTemp">
                        <div className="location">
                          {state.charAt(0).toUpperCase() + state.slice(1)}
                        </div>
                        <div className="theTemp">
                          {(data.main?.temp - 273.15).toFixed(2)} C{" "}
                        </div>
                      </div>
                      <div className="containerHighAndLowTemp">
                        <div className="lowTemp">
                          <p className="DiscriptionLow">Low</p>
                          <p>{(data.main.temp_min - 273.15).toFixed(2)}C</p>
                        </div>
                        <div className="highTemp">
                          <p className="DiscriptionHigh">High</p>
                          <p>{(data.main.temp_max - 273.15).toFixed(2)}C</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="weatherIcon">
                    <TheWeatherIcon
                      typeOfWeather={discription}
                      mainTypeOfWeather={type}
                    />
                  </div>
                </div>
                <div className="otherWeatherDetails">
                  <div className="weatherDetails">
                    <div className="detailsContainer">
                      <div className="firstDetails">
                        <div className="windSpeed">
                          <p>Wind Speed</p>
                          <img src={WindIcon} alt="Wind Icon" />
                          <p>{data.wind.speed}m/s</p>
                        </div>
                        <div className="humidity">
                          <p>Humidity</p>
                          <img
                            src={humidityIcon}
                            alt="humidity icon in water drops"
                          />
                          <p>{data.main?.humidity}%</p>
                        </div>
                      </div>
                      <div className="secondDetails">
                        <div className="pressure">
                          <p>Pressure</p>
                          <img src={pressureIcon} alt="pressure meter" />
                          <p>{data.main?.pressure}hPa</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="weatherTittleAndClock">
                    <div className="weatherDescription">
                      {data.weather[0].description.charAt(0).toUpperCase() +
                        data.weather[0].description.slice(1)}
                    </div>
                    <div className="dateAndClocks">
                      <Clock />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainWeather;
