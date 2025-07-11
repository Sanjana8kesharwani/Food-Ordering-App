
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  
  // ✅ Destructure required properties
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/images/fallback.jpg"; // fallback image if Swiggy URL fails
        }}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ") || "No cuisines available"}</h4>

      <h4>{avgRating} ⭐ Stars</h4>
      <h4>{sla.slaString} ⏱</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};


const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    //<div className="res-card promoted">
    <div className="promoted-wrapper">

      <label className="badge">Promoted</label>
      <RestaurantCard {...props} />
    </div>
  );
};


export default RestaurantCard;
export { withPromotedLabel };