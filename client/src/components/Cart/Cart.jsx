import React, { useState } from 'react';
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ClickOutside from 'react-click-outside';

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCartOpen, setCartOpen] = useState(true); // State for cart open/close

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      const basePrice = item.price + sizePriceIncrements[item.size];
      total += item.quantity * basePrice;
    });
    return total.toFixed(2);
  };

  const formattedPrice = (price) => {
    if (price === undefined) {
      return "N/A";
    }

    const parsedPrice = typeof price === "string" ? parseFloat(price) : price;
    return isNaN(parsedPrice) ? "N/A" : parsedPrice.toLocaleString("en-US");
  };

  const sizePriceIncrements = {
    S: -100,
    M: 0,
    L: 150,
    XL: 300,
  };

  const handleCheckout = () => {
    setCartOpen(false); // Close the cart when navigating to the summary page
    navigate("/summary");
  };

  return (
    <div className={`cart ${isCartOpen ? 'open' : 'closed'}`}>
      <h1>Items</h1>
      <div className="cart-items-container">
        {products.length === 0 ? ( // Check if the cart is empty
          <div className="empty-cart-message">Your shopping cart is empty.</div>
        ) : (
          // Render cart items if there are items in the cart
          products.map((item) => (
            <div className="item" key={item.id}>
              <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">
                  {item.quantity} x LKR{" "}
                  {formattedPrice(item.price + sizePriceIncrements[item.size])}
                  <span> (Size: {item.size})</span>
                </div>
              </div>
              <DeleteOutlinedIcon
                className="delete"
                onClick={() => dispatch(removeItem({ id: item.id, size: item.size }))}
              />
            </div>
          ))
        )}
      </div>
      <div className="total">
        <span>SubTotal</span>
        <span>LKR {formattedPrice(totalPrice())}</span>
      </div>
      <button className="btn" onClick={handleCheckout}>
        Checkout
      </button>
      <div
        className="reset"
        onClick={() => dispatch(resetCart())}
      >
        Clear Cart
      </div>
    </div>
  );
};

export default ClickOutside(Cart);
