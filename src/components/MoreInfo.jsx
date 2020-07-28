import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function MoreInfo() {
  const weather = useContext(WeatherContext);
  return <div className="weather">(wind: {weather.wind.speed} m/s)</div>;
}

export default MoreInfo;
