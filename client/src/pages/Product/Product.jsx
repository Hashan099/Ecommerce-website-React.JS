import React from "react";
import { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";



const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const dispatch = useDispatch();
  const { data, loading} = useFetch(`/products/${id}?populate=*`);

  const formattedPrice = (price, size) => {
    if (price === undefined) {
      return "N/A";
    }
    const basePrice = price + sizePriceIncrements[size];
    return basePrice.toLocaleString("en-US");
  };
  

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  

  const sizePriceIncrements = {
    S: -100,
    M: 0,
    L: 150,
    XL: 300,
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity <= data?.attributes?.in_stock) {
      setQuantity(newQuantity);
    }
  };
  
  

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">  LKR {formattedPrice(data?.attributes?.price, selectedSize)}</span>
            <p>{data?.attributes?.desc}</p>

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

            <button
            className="add"
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.attributes.title,
                  desc: data.attributes.desc,
                  price: data.attributes.price,
                  img: data.attributes.img.data.attributes.url,
                  quantity,
                  size: selectedSize, 
                })
              )
            }
          >
          <AddShoppingCartIcon /> ADD TO CART
           </button>
           
            <div className="info">
              <span>Brand : CELENE</span>
              <span>Shipping : Free Shipping </span>
              <span>Product Name : {data?.attributes?.title}</span>
              <span>More Details :{data?.attributes?.longDesc} </span>
              <span> Tags : {data?.attributes?.tags} </span>
              
            </div>
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
