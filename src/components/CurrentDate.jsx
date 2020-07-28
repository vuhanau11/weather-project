import React from 'react';
import dateBuilder from '../constant/time';

function CurrentDate() {
  return <div className="date">{dateBuilder(new Date())}</div>;
}

export default CurrentDate;
