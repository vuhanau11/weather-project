import React, { useState } from 'react';
import { searchWeather } from '../services/weatherService';
import './Search.css';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  function handleValueChange(input) {
    setQuery(input.target.value);
  }

  async function onKeyDownHandler(event) {
    if (event.keyCode === 13) {
      const weather = await searchWeather(query);
      onSearch(weather);
    }
  }

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleValueChange}
        value={query}
        onKeyDown={onKeyDownHandler}
      />
    </div>
  );
}

export default Search;
