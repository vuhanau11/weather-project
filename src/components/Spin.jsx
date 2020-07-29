import React, { useState } from 'react';
import './Spin.css';

const Spin = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? (
      <div id="preloader">
        <div id="loader"></div>
      </div>
    ) : null,
    () => setLoading(true),
    () => setLoading(false),
  ];
};

export default Spin;
