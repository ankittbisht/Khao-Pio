import "../App.css";
import Card from "./Card";
// import resList from "../utils/mockdata";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { SWIGGY_API } from "../utils/constant";

function Body() {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // * Whenever a state variable updates or changes, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered");

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API );

    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="m-4 flex items-center">
          <input
            type="text"
            className="border border-solid border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search restaurants by name..."
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="ml-4 px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>

          <div className="ml-auto flex items-center">
            <label className="mr-2 text-gray-700">Username:</label>
            <input
              className="border border-solid border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
              value={loggedInUser}
              onChange={(event) => setUserName(event.target.value)}
              placeholder="Enter your username..."
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center px-4 py-8">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className=""
          >
            <div className="w-full transition duration-300 transform hover:scale-105">
              <Card resData={restaurant} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Body;
