import RestaurantCard from "./RestaurantCard";
import reslist from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{

    const[listOfRestaurants,setListOfRestaurants] =useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setListOfRestaurants(reslist);
        }, 1000); // 500ms delay

        return () => clearTimeout(timer);
    }, []);

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // const fetchData= async () =>{
    //     const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&collection=80402&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    //     const json= await data.json();
    //     console.log(json);
    //     setListOfRestaurants(json);
    // }

    // if (listOfRestaurants.length===0) {
    //     return <Shimmer />
    // }

    return listOfRestaurants.length===0 ? ( <Shimmer /> ):(
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
    );
};

export default Body;