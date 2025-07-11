
  const dineoutDeals = [
  {
    id: 1,
    name: "Luxury Dining",
    offer: "Up to 30% off on premium restaurants",
    image:
      "https://images.unsplash.com/photo-1682778418768-16081e4470a1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Sagar Ratna",
    offer: "Trendy places • 20% off",
    image:
      "https://www.franciscosegarra.com/wp-content/uploads/2022/03/restaurant-decoration.jpg",
  },
  {
    id: 3,
    name: "RoofTop Cafe",
    offer: "Romantic dinners • 25% off",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/30/54/b2/bidri-ambience.jpg?w=600&h=600&s=1",
  },
];

const DineoutPage = () => {
  return (
    <div className="grocery-wrapper">
      <h1>🍽️ Dineout Offers</h1>
      <div className="card-container">
        {dineoutDeals.map((card) => (
          <div key={card.id} className="food-card">
            <img src={card.image} alt={card.name} />
            <div className="card-content">
              <h3>{card.name}</h3>
              <p>{card.offer}</p>
              <button className="arrow-btn">➜</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DineoutPage;
