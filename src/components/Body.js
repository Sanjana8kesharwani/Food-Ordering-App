
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&collection=80479&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await response.json();
      const cards = json?.data?.cards;

      if (!Array.isArray(cards)) {
        console.error("cards is not an array", cards);
        return;
      }

      const restaurants = cards
        .map((card) => card?.card?.card?.info)
        .filter((info) => info !== undefined);

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're Offline!! Please check your Internet Connection
      </h1>
    );

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          placeholder="Search your restaurant"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.3
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
            {restaurant.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

