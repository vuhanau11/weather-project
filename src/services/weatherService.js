import CONFIG from '../config';

export async function searchWeather(place) {
  const response = await fetch(
    `${CONFIG.url}weather?q=${place}&appid=${CONFIG.key}`
  );
  return await response.json();
}
