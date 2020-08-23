import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import * as weatherAction from "../../redux/weather/actions";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import CityCard from "../../components/CityCard";
import unitedkingdom from "./united-kingdom.png";
import vietnam from "./vietnam.png";

import "./style.scss";

const Home = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const a = useSelector((globalState) => globalState.text);
  const [isMoreThanTen, setIsMoreThanTen] = useState(false);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    // dispatch(weatherAction.fetchWeatherOfCities(["london", "saigon"]));
    navigator.geolocation.getCurrentPosition(async (x) => {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${x.coords.latitude}&lon=${x.coords.longitude}&appid=5e530d8d37d01c0a8823933ade83f304`
      );
      const lS = localStorage.getItem("listCities");
      if (lS === null || JSON.parse(lS).length === 0) {
        localStorage.setItem(
          "listCities",
          JSON.stringify([response.data.name])
        );
      }
      dispatch(
        weatherAction.fetchWeatherOfCities(
          JSON.parse(localStorage.getItem("listCities"))
        )
      );
    });
  }, [dispatch]);

  useEffect(() => {
    if (a.listCities.length > 10) {
      setIsMoreThanTen(true);
    } else {
      setIsMoreThanTen(false);
    }
  }, [isMoreThanTen, a.listCities.length]);
  // const onFetch = (keyword) => {
  //   dispatch(weatherAction.fetchWeather(keyword));
  // };

  const onAddCity = (keyword) => {
    dispatch(weatherAction.addCity(keyword));
  };

  const onChangeLanguage = () => {
    if (language === "en-US") {
      i18n.changeLanguage("vi-VI");
      setLanguage("vi-VI");
      localStorage.setItem("i18nextLng", "vi-VI");
    } else {
      i18n.changeLanguage("en-US");
      setLanguage("en-US");
      localStorage.setItem("i18nextLng", "en-US");
    }
  };

  return (
    <div className="home-container">
      <h1 className="heading">TIKI Weather Forecast</h1>
      <h3>{t("title")}</h3>
      <AutoCompleteInput
        onSelectCity={onAddCity}
        disabled={isMoreThanTen ? true : false}
      />
      <img
        className="country-flag"
        alt="language"
        src={language === "en-US" ? unitedkingdom : vietnam}
        onClick={onChangeLanguage}
      />

      <div className="weather-wrapper">
        {a.listWeatherOfCities.map((cityweather) => (
          <CityCard cityCurrentWeather={cityweather} />
        ))}
      </div>
    </div>
  );
};
export default Home;
