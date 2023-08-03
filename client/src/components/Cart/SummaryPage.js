import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./SummaryPage.scss"


const SummaryPage = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
      let total = 0;
      products.forEach((item) => {
        const basePrice = item.price + sizePriceIncrements[item.size];
        total += item.quantity * basePrice;
      });
      return total.toFixed(2);
    };
  
    const sizePriceIncrements = {
      S: -100,
      M: 0,
      L: 150,
      XL: 300,
    };
  
    const formattedPrice = (price) => {
      if (price === undefined) {
        return "N/A";
      }

      
  
      const parsedPrice = typeof price === "string" ? parseFloat(price) : price;
      return isNaN(parsedPrice) ? "N/A" : parsedPrice.toLocaleString("en-US");
    };
  
    const handleDelete = (itemId, size) => {
      dispatch(removeItem({ id: itemId, size: size }));
    };
  
    const handlePayment = async () => {
      try {
        const stripePromise = loadStripe(
          "pk_test_51NWL3UCNWKLnic6Pf49U52peM1NBWxGODO0FiQkFQbKZrUwtFSrttPFTqSRNkLM1gP0sP30w305OVzAehJpk6w2q00JBTGHSvL"
        );
        const stripe = await stripePromise;
  
    
        const updatedProducts = products.map((item) => ({
          ...item,
          price: item.price + sizePriceIncrements[item.size],
        }));
  

        const totalPrice = updatedProducts.reduce(
          (total, item) => total + item.quantity * item.price,
          0
        );
  
        const res = await makeRequest.post("/orders", {
          products: updatedProducts,
          totalPrice: totalPrice,
        });
  
        await stripe.redirectToCheckout({
          sessionId: res.data.stripeSession.id,
        });
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="summary-page">
        <h1>Order Summary </h1>
        {products?.map((item) => (
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
              onClick={() => handleDelete(item.id, item.size)}
            />
          </div>
        ))}
        <div className="total">
          <span>TOTAL : </span>
          <span>LKR {formattedPrice(totalPrice())}</span>
          <span> ** FREE ISLANDWIDE DELIVERY ** </span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Clear All
        </span>
      </div>
    );
  };
  
  export default SummaryPage;
  