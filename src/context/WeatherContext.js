import { createContext } from 'react';

const WeatherContext = createContext({});

export const WeatherProvider = WeatherContext.Provider;
export default WeatherContext;
