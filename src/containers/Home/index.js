import React, { useState, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";
import * as weatherAction from "../../redux/weather/actions";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import CityCard from "../../components/CityCard";
import unitedkingdom from "./united-kingdom.png";
import vietnam from "./vietnam.png";

import "./style.scss";

const Home = ({}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const a = useSelector((globalState) => globalState.text);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    dispatch(weatherAction.fetchWeatherOfCities(["london", "saigon"]));
    navigator.geolocation.getCurrentPosition(async (x) => {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${x.coords.latitude}&lon=${x.coords.longitude}&appid=5e530d8d37d01c0a8823933ade83f304`
        // "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02"
      );
      localStorage.setItem(
        "listCities",
        []
      );
      const lS = localStorage.getItem("listCities");
      if (lS.length == 0) {
        localStorage.setItem(
          "listCities",
          JSON.stringify([response.data.name])
        );
      }
      dispatch(weatherAction.fetchWeather(response.data.name));
    });
  }, []);

  const onFetch = (keyword) => {
    dispatch(weatherAction.fetchWeather(keyword));
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
      <h1>Weather Forecast</h1>
      <h2>{t("title")}</h2>
      <AutoCompleteInput onSelectCity={onFetch} />
      <img
        className="country-flag"
        alt="language"
        src={language === "en-US" ? unitedkingdom : vietnam}
        onClick={onChangeLanguage}
      />

      <div className="weather-wrapper">
        <CityCard cityCurrentWeather={a.cityweather} />
      </div>
    </div>
  );
};
export default Home;
