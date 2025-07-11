
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="item-container">
  {items.map((item) => (
    <div key={item.card.info.id} className="item-card">
      <div className="item-img-section">
        <img
          src={CDN_URL + item.card.info.imageId}
          alt={item.card.info.name}
          className="item-img"
        />
        <button className="add-btn"
        onClick={() => handleAddItem(item)}> Add +</button>
      </div>

      <div className="item-details">
        <div className="item-title-price">
          <span className="item-name">{item.card.info.name}</span>
          <span className="item-price">
            ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
          </span>
        </div>
        <p className="item-desc">{item.card.info.description}</p>
      </div>
    </div>
  ))}
</div>


  );
};

export default ItemList;





