import MainPage from "./components/weather/MainPage";
import FavouriteProvider from "./context/provider/FavouriteProvider";
import LocationProvider from "./context/provider/LocationProvider";
import WeatherProvider from "./context/provider/WeatherProvider";

function App() {
  return (
    <>
      <LocationProvider>
        <FavouriteProvider>
          <WeatherProvider>
          <MainPage/>
          </WeatherProvider>
        </FavouriteProvider>
      </LocationProvider>
    </>
  );
}

export default App;
