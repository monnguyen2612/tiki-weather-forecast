import React, { useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as weatherAction from "../../redux/weather/actions";

const Home = ({}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const a = useSelector((globalState) => globalState.text);
  const [keyword, setKeyword] = useState("");
  const [language, setLanguage] = useState("");

  const onFetch = () => {
    dispatch(weatherAction.fetchWeather(keyword));
  };
  const onChangeLanguage = () => {
    if (language === "en-US") {
      i18n.changeLanguage("vi-VI");
      setLanguage("vi-VI");
    } else {
      i18n.changeLanguage("en-US");
      setLanguage("en-US");
    }
  };

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div>
      {/* <form action=""> */}
      <h1>Weather Forecast</h1>
      <h2>{t("title")}</h2>
      <input type="text" onChange={handleChange} value={keyword}></input>
      <button onClick={onFetch}>click</button>
      <button onClick={onChangeLanguage}>changeLanguage</button>
      <p>{a.cityweather}</p>
      {/* </form> */}
    </div>
  );
};
export default Home;
