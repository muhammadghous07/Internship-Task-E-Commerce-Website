import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const product = {
    id,
    title: "Smartwatch Pro X",
    price: "$129.99",
    description: "Fitness tracking, waterproof, 7-day battery life.",
    images: ["/img/smartwatch.jpg", "/img/smartwatch2.jpg"],
  };

  return (
    <div>
      <Navbar />
      <div className="product-details-page">
        <div className="images">
          {product.images.map((img, index) => (
            <img key={index} src={img} alt={product.title} />
          ))}
        </div>
        <div className="details">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductPage;