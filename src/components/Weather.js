import React, { useState, useEffect } from "react";
import { API_KEY } from "../key.json";

function Weather({ currCity }) {
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setForecast(data.weather[0].main);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return <p>{forecast}</p>;
}

export default Weather;
