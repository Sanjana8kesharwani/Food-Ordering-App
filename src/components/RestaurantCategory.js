
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // controlled by parent
  };

  return (
    <div className="category-wrapper">
      <div className="category-card">
        <div className="category-header" onClick={handleClick}>
          <span className="category-title">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="category-arrow">{showItems ? "⌄" : "⌃"}</span>

        </div>

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

