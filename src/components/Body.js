import RestaurantCard from "./RestaurantCard";
import reslist from "../Utils/mockData";
import { useState } from "react";

const Body = ()=>{

    const[listOfRestaurants,setListOfRestaurants] =useState(reslist);

    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btnreslist" 
            onClick={()=>{
                const fliterlist=listOfRestaurants.filter((res)=>
                    res.card.card.info.avgRating > 4
            )
            setListOfRestaurants(fliterlist);
               console.log(listOfRestaurants);
            }}
            >
            Top Rated Restaurants</button>
            </div>
        <div className="res-container">
            { listOfRestaurants.map((restaurant) =>(
             <RestaurantCard key={restaurant.card.card.info.id}  resData={restaurant}/>))
            }
        </div>
    </div>
    )
}

export default Body;