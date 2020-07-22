import React, { useState } from 'react';
import './App.css';
import CONFIG from './config';
import dateBuilder from './constant/time';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    if (event.key === 'Enter') {
      fetch(`${CONFIG.url}weather?q=${query}&appid=${CONFIG.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };
  function handleValueChange(input) {
    setQuery(input.target.value);
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
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleValueChange}
            value={query}
            onKeyPress={search}
          />
        </div>
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

export default App;
