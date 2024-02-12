import { createContext } from "react";
import useLocalStorage from "./../../hooks/useLocalStorage";

export const FavouriteContext = createContext("");

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = (latitude, longitude, location) => {
    setFavourites([
      ...favourites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };
  const removeFromFavourite = (location) => {
    const rest_favourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavourites(rest_favourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ favourites, addToFavourite, removeFromFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
