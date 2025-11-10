import { CDN_URL } from "../Utils/constant";

const RestaurantCard = ({ resData }) => {
    const info = resData?.card?.card?.info; 

    const {name,cuisines,avgRating,costForTwo,sla,deliveryTime}=info;
  
    if (!info) return null; 
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0", margin: "10px", padding: "10px", borderRadius: "10px", width: "300px" }}>
        <img
          className="res-logo"
          alt={info.name}
          style={{ width: "100%", borderRadius: "10px" }}
          src={CDN_URL+info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>⭐ {avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} mins</h4>
      </div>
    );
  };


  export default RestaurantCard;