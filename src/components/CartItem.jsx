import React from "react";

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-item-details">
        <h4>{item.title}</h4>
        <p>{item.price}</p>
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
        />
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;