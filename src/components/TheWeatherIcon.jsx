import LightRain from "../assets/weatherIcons/rain/lightRain.svg";
import "../styles/MainWeather.css";
import useIconPicker from "./useIconPicker";
import { useEffect, useState } from "react";
//clouds icons
import fewClouds from "../assets/weatherIcons/clouds/fewClouds.svg";
import brokenClouds from "../assets/weatherIcons/clouds/brokenClouds.svg";
import scatteredClouds from "../assets/weatherIcons/clouds/scatteredClouds.svg";
import overcastClouds from "../assets/weatherIcons/clouds/overcastClouds.svg";
//drizzle icons
import lightIntesityDrizzel from "../assets/weatherIcons/drizzel/lightIntesityDrizzel.svg";
import drizzelWithRain from "../assets/weatherIcons/drizzel/drizzelWithRain.svg";
import heavyDrizzelRain from "../assets/weatherIcons/drizzel/heavyDrizzelRain.svg";
//atmosphere icon
import mist from "../assets/weatherIcons/atmosphere/mist.svg";
import haze from "../assets/weatherIcons/atmosphere/haze.svg";
import smoke from "../assets/weatherIcons/atmosphere/smoke.svg";
import dustWhirls from "../assets/weatherIcons/atmosphere/dustWhirls.svg";
import volcanicAsh from "../assets/weatherIcons/atmosphere/volcanicAsh.svg";
import tornado from "../assets/weatherIcons/atmosphere/tornado.svg";
//clear weather icon
import clearSkies from "../assets/weatherIcons/clear/clearSkies.svg";
//rain icon
import lightRain from "../assets/weatherIcons/rain/lightRain.svg";
import moderateRain from "../assets/weatherIcons/rain/moderateRain.svg";
import VeryHeavyRain from "../assets/weatherIcons/rain/VeryHeavyRain.svg";
import heavyIntensityRain from "../assets/weatherIcons/rain/heavyIntensityRain.svg";
//thunderstorm
import LightRainWithThunder from "../assets/weatherIcons/thunderstorm/LightRainWithThunder.svg";
import heavyThunderstorm from "../assets/weatherIcons/thunderstorm/heavyThunderstorm.svg";
import raggedThunderstorm from "../assets/weatherIcons/thunderstorm/raggedThunderstorm.svg";
//snow
import lightSnow from "../assets/weatherIcons/snow/lightSnow.svg";
import snow from "../assets/weatherIcons/snow/snow.svg";
import heavySnow from "../assets/weatherIcons/snow/heavySnow.svg";

const iconMap = {
  fewClouds,
  brokenClouds,
  scatteredClouds,
  overcastClouds,
  lightIntesityDrizzel,
  drizzelWithRain,
  heavyDrizzelRain,
  mist,
  haze,
  smoke,
  dustWhirls,
  volcanicAsh,
  tornado,
  clearSkies,
  lightRain,
  moderateRain,
  VeryHeavyRain,
  heavyIntensityRain,
  LightRainWithThunder,
  heavyThunderstorm,
  raggedThunderstorm,
  lightSnow,
  snow,
  heavySnow,
};

function TheWeatherIcon({ typeOfWeather, mainTypeOfWeather }) {
  let iconType = useIconPicker(typeOfWeather, mainTypeOfWeather);

  /*useEffect(() => {
    const icon = useIconPicker(typeOfWeather, mainTypeOfWeather);
    setIconType(icon);
  }, [typeOfWeather, mainTypeOfWeather]);*/

  console.log("The type " + iconType);
  return (
    <>
      <div className="iconContainer">
        <img
          src={iconMap[iconType]}
          alt={`${typeOfWeather} weather icon`}
          className="theWeatherIcon"
        />
      </div>
    </>
  );
}

export default TheWeatherIcon;
