import LocationSearch from "../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hooks/useDebounce";
import useLocation from "../../hooks/useLocation";

export default function SearchLocation() {
  const { setSelectedLocation } = useLocation();

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };
  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
       
      </div>
    </form>
  );
}