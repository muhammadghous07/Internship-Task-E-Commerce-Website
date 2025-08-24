import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

function Cart({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Cart;