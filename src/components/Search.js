import React, { useState } from 'react';
import { searchWeather } from '../services/weatherService';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  function handleValueChange(input) {
    setQuery(input.target.value);
  }

  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        onChange={handleValueChange}
        value={query}
        onKeyPress={async () => {
          const weather = await searchWeather(query);
          onSearch(weather);
        }}
      />
    </div>
  );
}

export default Search;
