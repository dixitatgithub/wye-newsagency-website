//import React from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../data/products.json";


import "./Products.css";

function Products() {
  const navigate = useNavigate();
  {/*
  const products = [
    { name: "Stationery", image: stationery, slug: "stationery" },
    { name: "Confectionery", image: confectionery, slug: "confectionery" },
    { name: "Greeting Cards", image: cards, slug: "cards" },
    { name: "Mobile Top-Ups", image: topup, slug: "topup" },
    { name: "Vapes & Tobacco", image: vape, slug: "vapes" },
    { name: "Off Licence", image: alcohol, slug: "alcohol" },
    { name: "Soft Drinks", image: drinks, slug: "drinks" },
  ];
*/}
  const goToOffers = () => {
    navigate("/#offers");
  };

  return (
    <main>
      <section>
        <h2>Products We Offer</h2>
        <div className="products">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          ))}

          {/* ✅ OFFERS CARD */}
          <div className="product-card offers-card" onClick={goToOffers}>
            <h3>🔥 See Offers</h3>
            <p>Check today’s deals</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;