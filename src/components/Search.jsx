import React, { useState } from 'react';
import { searchWeather } from '../services/weatherService';
import { ToastContainer, toast } from 'react-toastify';
import './Search.css';
import Spin from './Spin';

function Search({ onSearch }) {
  const [query, setQuery] = useState('');
  const [loader, showLoader, hideLoader] = Spin();
  function handleValueChange(input) {
    setQuery(input.target.value);
  }

  async function onKeyDownHandler(event) {
    if (event.keyCode === 13) {
      showLoader();
      const result = await searchWeather(query);
      if (result.cod === 200) {
        onSearch(result);
        setQuery('');
      } else {
        toast.error(result.message);
        setQuery('');
      }
      hideLoader();
    }
  }

  return (
    <div>
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
      <ToastContainer autoClose={3000} />
      {loader}
    </div>
  );
}

export default Search;
