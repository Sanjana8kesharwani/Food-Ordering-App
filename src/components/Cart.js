
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import { useState } from "react";
import AddressModal from "./AddressModal";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const [showAddressModal, setShowAddressModal] = useState(false); // 🔑 Control modal visibility

  const handleAdd = (item) => dispatch(addItem(item));
  const handleRemove = (item) => dispatch(removeItem(item));

  const total = cartItems.reduce((acc, item) => {
    let price = item?.card?.info?.price ?? item?.card?.info?.defaultPrice ?? 0;
    if (price > 1000) price = price / 100;
    return acc + price;
  }, 0);

  const deliveryFee = 30;
  const discount = appliedCoupon ? 50 : 20;
  const gst = 0.05 * total;
  const toPay = total + deliveryFee - discount + gst;

  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === "save50") {
      setAppliedCoupon(true);
    } else {
      alert("Invalid coupon code");
    }
  };

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>🛵 Add a delivery address</h2>
        <button
          className="add-address"
          onClick={() => setShowAddressModal(true)} // 🔥 Show modal
        >
          ADD NEW
        </button>
      </div>

      <div className="cart-right">
        {cartItems.length === 0 ? (
          <h2>Your cart is empty. Add something!</h2>
        ) : (
          <>
            {cartItems.map((item) => (
              <div className="cart-item" key={item.card.info.id}>
                <div>
                  <p className="item-name">{item.card.info.name}</p>
                  <p className="item-price">
                    ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                  </p>
                </div>

                <div className="quantity-controls">
                  <button onClick={() => handleRemove(item)}>-</button>
                  <span>1</span>
                  <button onClick={() => handleAdd(item)}>+</button>
                </div>
              </div>
            ))}

            {/* 💰 Apply Coupon Section */}
            <div className="coupon-section">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="coupon-input"
              />
              <button className="apply-btn" onClick={handleApplyCoupon}>
                Apply
              </button>
            </div>

            {/* 📄 Bill Details Section */}
            <div className="bill-details">
              <h3>Bill Details</h3>
              <div className="bill-row">
                <span>Item Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="bill-row">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>
              <div className="bill-row">
                <span>Discount</span>
                <span>-₹{discount}</span>
              </div>
              <div className="bill-row">
                <span>GST & Other Charges</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <hr />
              <div className="bill-total">
                <strong>To Pay</strong>
                <strong>₹{toPay.toFixed(2)}</strong>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 📍 Address Modal */}
      {showAddressModal && (
        <AddressModal onClose={() => setShowAddressModal(false)} />
      )}
    </div>
  );
};

export default Cart;
