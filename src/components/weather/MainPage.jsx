import useWeather from "../../hooks/useWeather";
import Header from "../header/Header";
import WeatherBoard from "./WeatherBoard";
import ClearSky from "../../assets/backgrounds/clear-sky.jpg";
import FewClouds from "../../assets/backgrounds/few-clouds.jpg";
import Mist from "../../assets/backgrounds/mist.jpeg";
import RainyDay from "../../assets/backgrounds/rainy-day.jpg";
import Snow from "../../assets/backgrounds/snow.jpg";
import ThuderStorm from "../../assets/backgrounds/thunderstorm.jpg";
import useWeatherData from "../../hooks/useWeatherData";
import { useEffect, useState } from "react";

export default function MainPage() {
  const { loading,weatherData } = useWeatherData();
  const [climateImage, setClimateImage] = useState("");

  const getClimateImage = (climate) => {
    switch (climate) {
      case "Rain":
        return RainyDay;
      case "Clouds":
        return FewClouds;
      case "Clear":
        return ClearSky;
      case "Haze":
        return FewClouds;
      case "Thunder":
        return ThuderStorm;
      case "Fog":
        return ThuderStorm;
      case "Snow":
        return Snow;
      case "Mist":
        return Mist;
      default:
        return ClearSky;
    }
  };

  useEffect(() => {
    const bgImage = getClimateImage(weatherData.climate);
    setClimateImage(bgImage);
    return () => setClimateImage("");
  }, [weatherData.climate]);

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-300 w-96 rounded-md p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div className="grid place-items-center h-screen bg-no-repeat bg-cover" style={{backgroundImage:`url('${climateImage}')`}}>
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
}
