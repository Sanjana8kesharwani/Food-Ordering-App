
import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  // 🟢🔴 filter state
  const [filterType, setFilterType] = useState("all");

  if (!resInfo) return <Shimmer />;

  const restaurantInfoCard = resInfo?.cards?.find(
    (card) => card?.card?.card?.info
  );
  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    restaurantInfoCard?.card?.card?.info || {};

  // Categories with filtering
  const allCategories =
    resInfo?.cards
      ?.find((c) => c?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) || [];

  return (
    <div className="menu-page">
      <div className="menu-container">
        {/* 🏪 Restaurant Summary */}
        <div className="restaurant-summary-card">
          <h2 className="res-title">{name}</h2>
          <p className="res-cuisines">{cuisines?.join(", ")}</p>

          <div className="res-info-row">
            <div className="info-item">⭐ {avgRating || "4.5"}</div>
            <div className="info-item">🚴 {sla?.slaString || "35 mins"}</div>
            <div className="info-item">📍 {sla?.lastMileTravelString || "2.5 km"}</div>
            <div className="info-item">💰 {costForTwoMessage || "₹250 for two"}</div>
          </div>
        </div>

        {/* 🟢🔴 Veg / Non-Veg Toggle */}
        <div className="filter-buttons">
          <button
            className={filterType === "all" ? "active" : ""}
            onClick={() => setFilterType("all")}
          >
            All
          </button>
          <button
            className={filterType === "veg" ? "active" : ""}
            onClick={() => setFilterType("veg")}
          >
            🟢 Veg
          </button>
          <button
            className={filterType === "nonveg" ? "active" : ""}
            onClick={() => setFilterType("nonveg")}
          >
            🔴 Non-Veg
          </button>
        </div>

        {/* 🍽️ Menu Categories */}
        <h2 className="menu-title">Menu</h2>
        <div className="category-list">
          {allCategories.map((category, index) => {
            // apply filter to items
            const filteredItems = category.card.card.itemCards?.filter((item) => {
              const isVeg = item.card.info.itemAttribute?.vegClassifier === "VEG";
              if (filterType === "veg") return isVeg;
              if (filterType === "nonveg") return !isVeg;
              return true;
            });

            // if no items left after filter, skip rendering
            if (!filteredItems || filteredItems.length === 0) return null;

            return (
              <RestaurantCategory
                key={index}
                data={{ ...category.card.card, itemCards: filteredItems }}
                showItems={index === showIndex}
                setShowIndex={() =>
                  setShowIndex(index === showIndex ? null : index)
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;


