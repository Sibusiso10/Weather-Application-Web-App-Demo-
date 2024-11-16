const useBackGroundColor = (weathertype) => {
  let weatherbackGround = "";
  console.log(weathertype);
  switch (weathertype.toLowerCase()) {
    case "clouds":
      weatherbackGround = "clouds";
      break;
    case "drizzle":
      weatherbackGround = "drizzle";
      break;
    case "atmosphere":
      weatherbackGround = "Atmosphere";
      break;
    case "rain":
      weatherbackGround = "Rain";
      break;
    case "clear":
      weatherbackGround = "clear-skies";
      break;
    case "thunderstorm":
      weatherbackGround = "Thunderstorm";
      break;
    case "snow":
      weatherbackGround = "Snow";
      break;
  }

  return weatherbackGround;
};

export default useBackGroundColor;
