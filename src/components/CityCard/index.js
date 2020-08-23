import React from "react";
import { useDispatch } from "react-redux";
import * as weatherAction from "../../redux/weather/actions";
import del from "./delete.png";
import "./style.scss";

const CityCard = ({ cityCurrentWeather }) => {
  const dispatch = useDispatch();
  const _removeCity = () => {
    dispatch(weatherAction.removeCity(cityCurrentWeather.name));
  };

  return (
    <div className="weather-card madrid">
      <a href={`detail/${cityCurrentWeather.name}`}>
        <div className="weather-icon sun"></div>
        <h1>{`${
          cityCurrentWeather.main
            ? Math.round(cityCurrentWeather.main.temp - 273.15)
            : null
        }ºC`}</h1>
        <p>{cityCurrentWeather.name}</p>
      </a>
      <img alt="" onClick={_removeCity} src={del} className="del-btn" />
    </div>
  );
};

export default CityCard;
