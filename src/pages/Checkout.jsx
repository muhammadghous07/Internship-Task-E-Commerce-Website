import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Checkout({ cartItems }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        ></textarea>
        <div>
          <label>
            <input type="radio" name="payment" value="card" required /> Credit/Debit Card
          </label>
          <label>
            <input type="radio" name="payment" value="cod" required /> Cash on Delivery
          </label>
        </div>
        <h3>Total Amount: ${total.toFixed(2)}</h3>
        <button type="submit">Place Order</button>
      </form>
      <Footer />
    </div>
  );
}

export default Checkout;