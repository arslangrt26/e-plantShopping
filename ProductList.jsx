import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulent", inStock: true },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", inStock: true },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering", inStock: false },
  { id: 4, name: "Cactus", price: 8, category: "Succulent", inStock: true },
  { id: 5, name: "Fiddle Leaf Fig", price: 25, category: "Indoor", inStock: true }
];

const ProductList = () => {
  const [products] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category === "All" ? true : p.category === category
    )
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") return a.price - b.price;
      if (sortOrder === "highToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Plant Shop 🌱</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search plants..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      {/* Category Filter */}
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="All">All</option>
        <option value="Succulent">Succulent</option>
        <option value="Indoor">Indoor</option>
        <option value="Flowering">Flowering</option>
      </select>

      {/* Sorting */}
      <select
        onChange={(e) => setSortOrder(e.target.value)}
        value={sortOrder}
        style={{ marginLeft: "10px" }}
      >
        <option value="none">Sort By</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      {/* Product List */}
      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "10px",
              width: "200px"
            }}
          >
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p style={{ color: product.inStock ? "green" : "red" }}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>

            <button
              onClick={() => handleAddToCart(product)}
              disabled={!product.inStock}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div style={{ marginTop: "20px" }}>
        <h2>Cart 🛒 ({cart.length})</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;