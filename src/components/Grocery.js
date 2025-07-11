
import { useNavigate } from "react-router-dom";

const Grocery = () => {
  const navigate = useNavigate();

  return (
    <div className="grocery-wrapper">
      <h2 className="grocery-heading">🛒 Explore Grocery Services</h2>
      <h3 className="grocery-heading2">
        Order food & groceries. Discover best restaurants.
      </h3>

      <div className="grocery-cards">
        {/* 🥡 Food Delivery Card */}
        <div className="grocery-card" onClick={() => navigate("/grocery/food-delivery")}>
          <img
            src="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5feb2c2f49aff.jpeg"
            alt="Food Delivery"
          />
          <div className="card-content">
            <h3>Food Delivery</h3>
            <p>From restaurants</p>
            <p>• Up to 60% off</p>
            <button className="arrow-btn">➜</button>
          </div>
        </div>

        {/* 🥦 Instamart Card */}
        <div className="grocery-card" onClick={() => navigate("/grocery/instamart")}>
          <img
            src="https://media.licdn.com/dms/image/v2/C5612AQGuD25jKI6i8Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520162042059?e=2147483647&v=beta&t=vdXu6kG1cHJQNmKb7Gh5gKLipuwk2ri7y7uw0L6unSc"
            alt="Instamart"
          />
          <div className="card-content">
            <h3>Instamart</h3>
            <p>Instant grocery</p>
            <p>• Up to 50% off</p>
            <button className="arrow-btn">➜</button>
          </div>
        </div>

        {/* 🍽️ Dineout Card */}
        <div className="grocery-card" onClick={() => navigate("/grocery/dineout")}>
          <img
            src="https://thefederal.com/file/2020/06/iStock-1125725514.jpg"
            alt="Dineout"
          />
          <div className="card-content">
            <h3>Dineout</h3>
            <p>Eat out, save more</p>
            <p>• Up to 30% off</p>
            <button className="arrow-btn">➜</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grocery;
