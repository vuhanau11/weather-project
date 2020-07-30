import CONFIG from '../config';

export const searchWeather = async (place) => {
  const response = await fetch(
    `${CONFIG.url}weather?q=${place}&units=metric&appid=${CONFIG.key}`
  );
  return await response.json();
};
