const dateBuilder = (time) => {
  let months = [
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
  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let day = days[time.getDay()];
  let date = time.getDate();
  let month = months[time.getMonth()];
  let year = time.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};
export default dateBuilder;
