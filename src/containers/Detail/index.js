import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import * as weatherAction from "../../redux/weather/actions";
import "./style.scss";

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const Detail = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [activeDate, setActiveDate] = useState("");
  const a = useSelector((globalState) => globalState.text);

  const cityname = props.match.params.id;
  useEffect(() => { 
    dispatch(weatherAction.fetchWeatherDetail(unescape(cityname))); 
    setTimeout(() => window.feather.replace(),500);
  }, [cityname,dispatch]);

  useEffect(() => {
    window.feather.replace()
  }, [activeDate])
  const groups =
    a.detailWeatherOfCity?.list.reduce((groups, weather) => {
      const date = new Date(weather.dt * 1000).toLocaleDateString("vi-VI");
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(weather);
      return groups;
    }, {}) || [];

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      weather: groups[date],
    };
  })

  

  const _onClick = (date) => {
    setActiveDate(date)
  }
  const weatherInfo = groups[activeDate||Object.keys(groups)[0]]?groups[activeDate||Object.keys(groups)[0]][0]:null
  const today = new Date();
  return (
    <div className="container">
      <div className="weather-side">
        <div className="weather-gradient"></div>
        <div className="date-container">
          <h2 className="date-dayname">{weekday[today.getDay()]}</h2>
          <span className="date-day">{today.getDate()}/{today.getMonth()+1}</span>
          <i className="location-icon" data-feather="map-pin"></i>
          <span className="location">
            {a.detailWeatherOfCity?.city.name},{" "}
            {a.detailWeatherOfCity?.city.country}
          </span>
        </div>
        <div className="weather-container">
          <i className="weather-icon" data-feather={groups[activeDate||Object.keys(groups)[0]]?weatherInfo.weather[0].main.includes('lear')?"sun":weatherInfo.weather[0].main.includes('loud')?"cloud":"cloud-rain":null}></i>
          <h1 className="weather-temp">{groups[activeDate||Object.keys(groups)[0]]?Math.round(groups[activeDate||Object.keys(groups)[0]][0].main.temp - 273):null}°C</h1>
          {groups[activeDate||Object.keys(groups)[0]]?weatherInfo.weather[0].main:null}
          <h3 className="weather-desc">{groups[activeDate||Object.keys(groups)[0]]?weatherInfo.weather[0].main:null}</h3>
        </div>
      </div>
      <div className="info-side">
        <div className="today-info-container">
          <div className="today-info">
            <div className="precipitation">
              {" "}
              <span className="title">{t('PRECIPITATION')}</span>
              <span className="value">{groups[activeDate||Object.keys(groups)[0]]?groups[activeDate||Object.keys(groups)[0]][0].pop*100:null} %</span>
              <div className="clear"></div>
            </div>
            <div className="humidity">
              {" "}
              <span className="title">{t('HUMIDITY')}</span>
              <span className="value">{groups[activeDate||Object.keys(groups)[0]]?groups[activeDate||Object.keys(groups)[0]][0].main.humidity:null} %</span>
              <div className="clear"></div>
            </div>
            <div className="wind">
              {" "}
              <span className="title">{t("WIND")}</span>
              <span className="value">{groups[activeDate||Object.keys(groups)[0]]?groups[activeDate||Object.keys(groups)[0]][0].wind.speed:null} m/s</span>
              <div className="clear"></div>
            </div>
            <div className="wind">
              {" "}
              <span className="title">{t("TEMPERATURE MAX")}</span>
              <span className="value">{groups[activeDate||Object.keys(groups)[0]]?Math.round(groups[activeDate||Object.keys(groups)[0]][0].main.temp_max - 273):null} C</span>
              <div className="clear"></div>
            </div>
            <div className="wind">
              {" "}
              <span className="title">{t("TEMPERATURE MIN")}</span>
              <span className="value">{groups[activeDate||Object.keys(groups)[0]]?Math.round(groups[activeDate||Object.keys(groups)[0]][0].main.temp_min - 273):null} C</span>
              <div className="clear"></div>
            </div>
          </div>
        </div>
        <div className="week-container">
          <ul className="forecast-list">
            {groupArrays.map((date,index) => (
              <li key={index} className={activeDate===date.date||(index===0&&activeDate==='')?"active":null} onClick={()=>_onClick(date.date)}>
                <div className="dt">
                  <span>{date.date}</span>
                </div>
              </li>
            ))}
          </ul>
          <ul className="week-list">
            {groups[activeDate||Object.keys(groups)[0]]?.map((x,index)=><li className="active" key={index}>
              <i className="day-icon" data-feather={x.weather[0].main.includes('lear')?"sun":x.weather[0].main.includes('loud')?"cloud":"cloud-rain"}></i>
              <span className="day-name">{x.dt_txt}</span>
            <span className="day-temp">{Math.round(x.main?.temp-273)}°C</span>
            </li>)}
            <div className="clear"></div>
          </ul>
        </div>
        <div className="location-container">
          <a className="location-button" href="/">
            {" "}
            <i data-feather="map-pin"></i>
            <span>{t("Change location")}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
