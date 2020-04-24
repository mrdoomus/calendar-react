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

  return forecast === "" ? (
    <p style={{ marginTop: "0", marginBottom: "10px" }}>
      <small>
        <i>No forecast found for this city</i>
      </small>
    </p>
  ) : (
    <p style={{ marginTop: "0", marginBottom: "10px" }}>
      <small>
        <b>Forecast:</b> {forecast}
      </small>
    </p>
  );
}

export default Weather;
