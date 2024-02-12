import { useContext } from "react";
import { FavouriteContext } from "../context/provider/FavouriteProvider";

export default function useFavourite() {
  return useContext(FavouriteContext);
}
