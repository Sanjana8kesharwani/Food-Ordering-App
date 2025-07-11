
const foodDeliveryCards = [
  {
    id: 1,
    name: "Pizza Hut",
    offer: "From restaurants • Upto 60% off",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbvRxqZSDiZHVMGunfHwnlQq0nnw1rerekJQ&s",
  },
  {
    id: 2,
    name: "Firangi Bake",
    offer: "Wraps & Rolls • Flat 40% off",
    image:
      "https://product-assets.faasos.io/eatsure_cms/production/be6ab66f-c173-414c-889e-2600cac04268.jpg",
  },
  {
    id: 3,
    name: "Oven Story",
    offer: "Delicious Meals • Upto 50% off",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/cu6r0ybxo9rctnyrqilg",
  },
  {
    id: 4,
    name: "McDonald's",
    offer: "Fast delivery • 30% off",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/522adce2fb9f2cd3905e205da835d717/b92d4926516c2635a39581f43cd533a0.jpeg",
  },
  {
    id: 5,
    name: "KFC",
    offer: "Biryani & More • 45% off",
    image:
      "https://b.zmtcdn.com/data/pictures/4/2700044/9410759d611db9c62c3acc23c1f27e06.jpg?fit=around|750:500&crop=750:500;*,*",
  },
  {
    id: 6,
    name: "Biryani Bowl",
    offer: "Combo Packs • Fast delivery",
    image:
      "https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg",
  },
];

const FoodDeliveryPage = () => {
  return (
    <div className="grocery-wrapper">
      <h1>🍽️ Food Delivery Options</h1>
      <div className="card-container">
        {foodDeliveryCards.map((card) => (
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

export default FoodDeliveryPage;
