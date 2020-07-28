import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function Temperation() {
  const weather = useContext(WeatherContext);
  return (
    <div>
      <div className="temp">
        <label className="text">Min Temp</label>
        {Math.round(weather.main.temp_min)}
        <sup>o</sup>C
      </div>
      <div className="temp">
        <label className="text">Max Temp</label>
        {Math.round(weather.main.temp_max)}
        <sup>o</sup>C
      </div>
    </div>
  );
}

export default Temperation;
