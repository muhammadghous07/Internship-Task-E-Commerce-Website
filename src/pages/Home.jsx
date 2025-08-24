import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Home({ addToCart }) {
  const featuredProducts = [
    { id: 1, title: "Wireless Headphones", price: "$59.99", image: "/img/headphones.jpg" },
    { id: 2, title: "Smartwatch Pro X", price: "$129.99", image: "/img/smartwatch.jpg" },
    { id: 3, title: "Gaming Mouse", price: "$39.99", image: "/img/mouse.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <section className="hero">
        <h1>Flat 20% Off on Electronics!</h1>
      </section>
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;