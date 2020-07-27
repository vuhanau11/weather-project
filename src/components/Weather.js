import React, { useState } from 'react';
import dateBuilder from '../constant/time';
import Search from './Search';
import './Weather.css';

function Weather() {
  const [weather, setWeather] = useState({});
  function onSearch(weather) {
    setWeather(weather);
  }
  return (
    <div
      className={
        typeof weather.main !== 'undefined'
          ? weather.main.temp_min - 273 > 17
            ? 'app warm'
            : 'app'
          : 'app'
      }
    >
      <main>
        <Search onSearch={onSearch} />
        {typeof weather.main !== 'undefined' ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                <label className="text">Min Temp</label>
                {Math.round(weather.main.temp_min) - 273}
                <sup>o</sup>C
              </div>
              <div className="temp">
                <label className="text">Max Temp</label>
                {Math.round(weather.main.temp_max) - 273}
                <sup>o</sup>C
              </div>
              <div className="weather">
                {weather.weather[0].description} (wind: {weather.wind.speed}{' '}
                m/s)
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  );
}

export default Weather;
