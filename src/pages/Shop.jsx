import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

function Shop({ addToCart }) {
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: `$${(i + 1) * 10}.99`,
    image: "/img/product.jpg",
  }));

  return (
    <div>
      <Navbar />
      <h2>Shop All Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Shop;