import React, { useState } from "react";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const { data} = useFetch(`/products/${item.id}?populate=*`);

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity <= data?.attributes?.in_stock) {
      setQuantity(newQuantity);
    }
  };

  const formattedPrice = (price) => {
    return price.toLocaleString("en-US");
  };

  const sizePriceIncrements = {
    S: -100,
    M: 0,
    L: 150,
    XL: 300,
  };
  

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const calculatePriceWithSize = (basePrice, selectedSize) => {
    return basePrice + sizePriceIncrements[selectedSize];
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: item.id,
        title: item.attributes.title,
        desc: item.attributes.desc,
        price: item.attributes.price,
        img: item.attributes.img.data.attributes.url,
        quantity,
        size: selectedSize,
      })
    );
  };

  return (
    <div className="card">
      <Link to={`/product/${item.id}`} className="image">
        {item?.attributes.isNew && <span>New Arrival</span>}
        <img
          src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url}
          alt=""
          className="mainImg"
        />
        <img
          src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url}
          alt=""
          className="secondImg"
        />
       
      </Link>
      <h2>{item?.attributes.title}</h2>
      <div className="prices">
        <h3>LKR {formattedPrice(item.oldPrice || item?.attributes.price + 600)}</h3>
        <h3>LKR {formattedPrice(calculatePriceWithSize(item?.attributes?.price, selectedSize))}</h3>
      </div>
      <div className="size-selection">
        <button
          className={selectedSize === "S" ? "selected" : ""}
          onClick={() => handleSizeChange("S")}
        >
          S
        </button>
        <button
          className={selectedSize === "M" ? "selected" : ""}
          onClick={() => handleSizeChange("M")}
        >
          M
        </button>
        <button
          className={selectedSize === "L" ? "selected" : ""}
          onClick={() => handleSizeChange("L")}
        >
          L
        </button>
        <button
          className={selectedSize === "XL" ? "selected" : ""}
          onClick={() => handleSizeChange("XL")}
        >
          XL
        </button>
        
      </div>
      <div className="quantity">
      <button
        onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
      >-</button>
      {quantity}
      <button onClick={handleIncreaseQuantity}>+</button>
    </div>
      <button className="add" onClick={handleAddToCart}>
        <AddShoppingCartIcon /> ADD TO CART
      </button>
    </div>
  );
};

export default Card;
