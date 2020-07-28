import React, { useContext } from 'react';
import WeatherContext from '../context/WeatherContext';

function Location() {
  const weather = useContext(WeatherContext);
  return (
    <div className="location">
      {weather.name}, {weather.sys.country}
    </div>
  );
}

export default Location;
