import React, { useState } from 'react';

import './Weather.css';
import Search from './Search';
import { WeatherProvider } from '../context/WeatherContext';
import Temperation from './Temperation';
import MoreInfo from './MoreInfo';
import Location from './Location';
import CurrentDate from './CurrentDate';
import { WeatherDetail } from '../models/weather';

function Weather() {
  const minTemp = new WeatherDetail();
  const [weather, setWeather] = useState(null);
  function onSearch(weather) {
    setWeather(weather);
  }

  return (
    <WeatherProvider value={weather}>
      <div
        className={
          weather && weather.main
            ? weather.main.temp_min > minTemp.minTemp
              ? 'app warm'
              : 'app'
            : 'app'
        }
      >
        <main>
          <Search onSearch={onSearch} />
          {weather && weather.main ? (
            <div>
              <div className="location-box">
                <Location />
                <CurrentDate />
              </div>
              <div className="weather-box">
                <Temperation />
                <MoreInfo />
              </div>
            </div>
          ) : (
            ''
          )}
        </main>
      </div>
    </WeatherProvider>
  );
}

export default Weather;
