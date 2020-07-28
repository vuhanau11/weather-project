const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const getCurrentDate = (time) => {
  let day = DAYS[time.getDay()];
  let date = time.getDate();
  let month = MONTHS[time.getMonth()];
  let year = time.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export default getCurrentDate;
