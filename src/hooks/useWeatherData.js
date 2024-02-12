import { useContext } from "react";
import { WeatherContext } from "../context/provider/WeatherProvider";

export default function useWeatherData() {
  return useContext(WeatherContext);
}
