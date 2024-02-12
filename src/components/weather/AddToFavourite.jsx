import { useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import useWeatherData from "../../hooks/useWeatherData";
import useFavourite from "./../../hooks/useFavourite";

export default function AddToFavourite() {
  const { favourites, addToFavourite, removeFromFavourite } = useFavourite();
  const [isFavourite, setIsFavourite] = useState(false);
  const {weatherData} = useWeatherData();
  const { latitude,longitude, location } = weatherData;

  useEffect(()=>{
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  },[])

  const handleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourite(latitude,longitude, location);
    } else {
      removeFromFavourite(location);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? RedHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
