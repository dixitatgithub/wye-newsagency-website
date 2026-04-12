import React from "react";
import { Link, useNavigate } from "react-router-dom";

import stationery from "../assets/stationery.jpg";
import confectionery from "../assets/confectionery.jpg";
import cards from "../assets/cards.jpg";

import topup from "../assets/topup.jpg";
import vape from "../assets/vape.jpg";
import alcohol from "../assets/alcohol.jpg";
import drinks from "../assets/drinks.jpg";
import "./Products.css";

function Products() {
  const navigate = useNavigate();

  const products = [
    { name: "Stationery", image: stationery, slug: "stationery" },
    { name: "Confectionery", image: confectionery, slug: "confectionery" },
    { name: "Greeting Cards", image: cards, slug: "cards" },
    { name: "Mobile Top-Ups", image: topup, slug: "topup" },
    { name: "Vapes & Tobacco", image: vape, slug: "vapes" },
    { name: "Off Licence", image: alcohol, slug: "alcohol" },
    { name: "Soft Drinks", image: drinks, slug: "drinks" },
  ];

  const goToOffers = () => {
    navigate("/#offers");
  };

  return (
    <main>
      <section>
        <h2>Products We Offer</h2>

        <div className="products">

          {/* ✅ PRODUCT CARDS */}
          {products.map((product, index) => (
            <Link
              to={`/products/${product.slug}`}
              key={index}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
              </div>
            </Link>
          ))}

          {/* ✅ SINGLE OFFERS CARD (outside map) */}
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