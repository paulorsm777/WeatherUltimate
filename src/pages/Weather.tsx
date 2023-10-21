import React, { useEffect, useState } from "react";
import "../css/pages.css";
import CardInfo from "../components/CardInfo";

interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}

const api = {
  key: "5ebfb4bdc6ae4248a49d29306c7cc645",
  base: "https://api.openweathermap.org/data/2.5/weather",
};

export default function Weather() {
  const selectedCity = localStorage.getItem("selectedCity");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(`${api.base}?q=${selectedCity}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result: WeatherData) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error("Error fetching weather data: ", error);
      });
  }, [selectedCity]);

  return (
    <>
      <div className="infoDisplay">
        {weather && typeof weather.main !== "undefined" ? (
          <div className="box">
            <h1>{weather.name}</h1>
            <p>Temperatura:  {weather.main.temp}°C</p>
            <p>Clima:  {weather.weather[0].main},{ " " + weather.weather[0].description}</p>
            <p>Humidade: {weather.main.humidity}%</p>
            <p>Velocidade do vento: {weather.wind.speed} m/s</p>
            <p>Visibilidade: {weather.visibility} meters</p>
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </>
  );
}
