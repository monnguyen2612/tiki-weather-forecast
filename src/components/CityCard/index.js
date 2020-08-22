import React from "react";
import "./style.scss";

const CityCard = ({ cityCurrentWeather }) => {
  return (
    <a className="weather-card madrid" href="/detail/id">
      <div className="weather-icon sun"></div>
      <h1>{`${
        cityCurrentWeather.main
          ? Math.round(cityCurrentWeather.main.temp - 273.15)
          : null
      }ºC`}</h1>
      <p>{cityCurrentWeather.name}</p>

      {/* {[1,2,3].map((x) => <a class="weather-card london" href='/detail/id'>
        <div class="weather-icon cloud"></div>
        <h1>14º</h1>
        <p>London</p>
      </a>)} */}
    </a>
  );
};

export default CityCard;
