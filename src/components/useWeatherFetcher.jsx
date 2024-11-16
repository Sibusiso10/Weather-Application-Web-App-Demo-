import { useState, useEffect } from "react";

const useWeatherFetcher = (url) => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(url) // This will fetch the data we want and store it in ApiData
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [url]);
  useEffect(() => {
    // This will now log the updated state
  }, [apiData]);
  return apiData;
};

export default useWeatherFetcher;
/*  useEffect(() => {
    // This will now log the updated state
  }, [apiData]); */
