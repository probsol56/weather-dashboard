import { createContext } from "react";
import useWeather from "../../hooks/useWeather";

export const WeatherContext = createContext("");

export default function WeatherProvider({ children }) {
  const { weatherData, error, loading } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, error, loading }}>
      {children}
    </WeatherContext.Provider>
  );
}
