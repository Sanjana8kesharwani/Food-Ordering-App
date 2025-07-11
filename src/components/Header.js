
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // ✅ Get items from the cart slice of the Redux store
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Burger Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
           <li className="cart-wrapper">
  <Link to="/cart" className="cart-link">
    Cart ({cartItems.length} items)
  </Link>

  {/* Show message only when cart is empty */}
  {cartItems.length === 0 && (
    <div className="cart-tooltip">
      <h4>Cart Empty</h4>
      <p>
        Good food is always cooking! <br />
        Order some yummy items from the menu.
      </p>
    </div>
  )}
</li>

<li>
  <Link to="/login">
    <button className="login">
      Login
    </button>
  </Link>
</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
