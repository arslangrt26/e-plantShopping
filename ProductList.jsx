import React, { useReducer, useState } from "react";

/* -------------------- DATA (plantsArray) -------------------- */
const plantsArray = [
  {
    category: "Indoor",
    plants: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Fiddle Leaf Fig", price: 25, image: "https://via.placeholder.com/150" },
      { id: 3, name: "ZZ Plant", price: 18, image: "https://via.placeholder.com/150" },
      { id: 4, name: "Spider Plant", price: 12, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Rubber Plant", price: 20, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Peace Lily", price: 22, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Succulent",
    plants: [
      { id: 7, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Cactus", price: 8, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Echeveria", price: 14, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Jade Plant", price: 16, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Haworthia", price: 12, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Sedum", price: 11, image: "https://via.placeholder.com/150" }
    ]
  },
  {
    category: "Flowering",
    plants: [
      { id: 13, name: "Rose", price: 30, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Hibiscus", price: 18, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Jasmine", price: 20, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Lavender", price: 22, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Marigold", price: 10, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Orchid", price: 35, image: "https://via.placeholder.com/150" }
    ]
  }
];

/* -------------------- "REDUX-LIKE" CART (useReducer) -------------------- */
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    default:
      return state;
  }
};

/* -------------------- COMPONENT -------------------- */
const ProductList = () => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  /* -------------------- FILTERED DATA -------------------- */
  const filteredData = plantsArray
    .map((section) => {
      const filteredPlants = section.plants.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

      return { ...section, plants: filteredPlants };
    })
    .filter((section) =>
      category === "All" ? true : section.category === category
    );

  /* -------------------- UI -------------------- */
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      {/* NAVBAR */}
      <nav style={{ marginBottom: "20px" }}>
        <strong>🌱 Plant Shop</strong> | Cart Items: {cart.length}
      </nav>

      {/* CONTROLS */}
      <input
        placeholder="Search plants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Indoor">Indoor</option>
        <option value="Succulent">Succulent</option>
        <option value="Flowering">Flowering</option>
      </select>

      {/* PRODUCT DISPLAY */}
      {filteredData.map((section) => (
        <div key={section.category} style={{ marginTop: "30px" }}>
          <h2>{section.category}</h2>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {section.plants.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ccc",
                  margin: "10px",
                  padding: "10px",
                  width: "180px"
                }}
              >
                <img src={plant.image} alt={plant.name} width="150" />

                <h4>{plant.name}</h4>
                <p>${plant.price}</p>

                <button
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: plant })
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CART */}
      <hr />
      <h2>Cart 🛒</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
