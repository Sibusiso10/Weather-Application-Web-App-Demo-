function useIconPicker(weathertype, weatherDescription) {
  let WeatherType = weathertype.toLowerCase();
  let WeatherTypeDescription = weatherDescription.toLowerCase();
  let icon = "";

  switch (WeatherTypeDescription) {
    case "clouds":
      switch (WeatherType) {
        case "few clouds":
          icon = "fewClouds";
          break;
        case "scattered clouds":
          icon = "scatteredClouds";
          break;
        case "broken clouds":
          icon = "brokenClouds";
          break;
        case "overcast clouds":
          icon = "overcastClouds";
          break;
        default:
          icon = "defaultClouds";
      }
      break;
    case "drizzle":
      switch (WeatherType) {
        case "light intensity drizzle":
        case "drizzle":
        case "light intensity drizzle rain":
        case "shower drizzle":
          icon = "lightIntensityDrizzle";
          break;
        case "drizzle rain":
        case "shower rain and drizzle":
          icon = "drizzleWithRain";
          break;
        case "heavy intensity drizzle":
        case "heavy intensity drizzle rain":
        case "heavy shower rain and drizzle":
          icon = "heavyDrizzleRain";
          break;
        default:
          icon = "defaultDrizzle";
      }
      break;
    case "atmosphere":
      switch (WeatherType) {
        case "mist":
          icon = "mist";
          break;
        case "haze":
        case "fog":
          icon = "haze";
          break;
        case "smoke":
          icon = "smoke";
          break;
        case "sand/dust whirls":
        case "dust":
        case "sand":
          icon = "dustWhirls";
          break;
        case "volcanic ash":
          icon = "volcanicAsh";
          break;
        case "squalls":
        case "tornado":
          icon = "tornado";
          break;
        default:
          icon = "defaultAtmosphere";
      }
      break;
    case "rain":
      switch (WeatherType) {
        case "light rain":
        case "light intensity shower rain":
          icon = "lightRain";
          break;
        case "moderate rain":
        case "shower rain":
          icon = "moderateRain";
          break;
        case "heavy intensity rain":
        case "heavy intensity shower rain":
          icon = "heavyIntensityRain";
          break;
        case "very heavy rain":
        case "extreme rain":
        case "ragged shower rain":
          icon = "veryHeavyRain";
          break;
        default:
          icon = "defaultRain";
      }
      break;
    case "clear-skies":
      icon = "clearSkies";
      break;
    case "thunderstorm":
      switch (WeatherType) {
        case "thunderstorm with drizzle":
        case "thunderstorm with light drizzle":
        case "light thunderstorm":
        case "thunderstorm with light rain":
        case "thunderstorm with rain":
          icon = "lightRainWithThunder";
          break;
        case "thunderstorm with heavy rain":
        case "thunderstorm":
        case "heavy thunderstorm":
        case "thunderstorm with heavy drizzle":
          icon = "heavyThunderstorm";
          break;
        case "ragged thunderstorm":
          icon = "raggedThunderstorm";
          break;
        default:
          icon = "defaultThunderstorm";
      }
      break;
    case "snow":
      switch (WeatherType) {
        case "light snow":
        case "light rain and snow":
        case "rain and snow":
        case "light shower snow":
          icon = "lightSnow";
          break;
        case "shower snow":
        case "shower sleet":
        case "light shower sleet":
        case "snow":
          icon = "snow";
          break;
        case "heavy snow":
        case "sleet":
        case "heavy shower snow":
          icon = "heavySnow";
          break;
        default:
          icon = "defaultSnow";
      }
      break;
    default:
      icon = "defaultIcon";
  }

  console.log({ icon, WeatherTypeDescription, WeatherType });
  return icon;
}

export default useIconPicker;
