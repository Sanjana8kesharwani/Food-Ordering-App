import React from "react";
const instamartItems = [
  {
    id: 1,
    name: "Fresh Fruits",
    offer: "Organic & Juicy • Up to 40% off",
    image:
      "https://previews.123rf.com/images/marucyan/marucyan1211/marucyan121100556/16481091-fresh-fruit-and-water.jpg",
  },
  {
    id: 2,
    name: "Dairy & Bakery",
    offer: "Fresh everyday essentials • Flat 30% off",
    image:
      "https://static.toiimg.com/thumb/msid-113563408,width-1280,height-720,resizemode-4/113563408.jpg",
  },
  {
    id: 3,
    name: "Snacks & Beverages",
    offer: "Chips, Soft Drinks & More • Up to 50% off",
    image:
      "https://media.istockphoto.com/id/505128864/photo/salty-snacks-and-drinks.jpg?s=612x612&w=0&k=20&c=9pqPs0Edenmq7vjYvI369RbVzT4-w-5KHXioEo-_E6w=",
  },
];

const InstamartPage = () => {
  return (
    <div className="grocery-wrapper">
      <h1>🥦 Instamart Offers</h1>
      <div className="card-container">
        {instamartItems.map((item) => (
          <div key={item.id} className="food-card">
            <img src={item.image} alt={item.name} />
            <div className="card-content">
              <h3>{item.name}</h3>
              <p>{item.offer}</p>
              <button className="arrow-btn">➜</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstamartPage;
