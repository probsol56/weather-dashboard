import { useContext } from "react";
import { LocationContext } from "../context/provider/LocationProvider";

export default function useLocation() {
  return useContext(LocationContext);
}
