import RestaurantCard from "./RestaurantCard";
import reslist from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [filterListRestaurants, setFilterListRestaurants] = useState([]);
  //Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)
  const [searchText, setSearchText] = useState("");

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setListOfRestaurants(reslist);
  //       setFilterListRestaurants(reslist);
  //     }, 1000); // 500ms delay

  //     return () => clearTimeout(timer);
  //   }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?url=https://example.comhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5414013&lng=73.8396802&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    const restaurantCards = json?.data?.cards?.filter(
      (item) => item?.card?.card?.info
    );

    console.log(restaurantCards);
    setListOfRestaurants(restaurantCards);
    setFilterListRestaurants(restaurantCards);
  };

  // if (listOfRestaurants.length===0) {
  //     return <Shimmer />
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterRestaurants = listOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterListRestaurants(filterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btnreslist"
          onClick={() => {
            const fliterlist = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurants(fliterlist);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterListRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
