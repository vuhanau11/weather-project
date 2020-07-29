import CONFIG from '../config';

export const searchWeather = async (place) => {
  const response = await fetch(
    `${CONFIG.url}weather?q=${place}&units=metric&appid=${CONFIG.key}`
  );
  return await response.json();

  // try {
  //   const response = await fetch(
  //     `${CONFIG.url}weather?q=${place}&units=metric&appid=${CONFIG.key}`
  //   );

  //   const result = await response.json();
  //   if (result.cod === 200) {
  //     return result;
  //   }
  //   if (result.message) {
  //     throw new Error(message);
  //   }
  // } catch (error) {
  //   return { error };
  // }
};
