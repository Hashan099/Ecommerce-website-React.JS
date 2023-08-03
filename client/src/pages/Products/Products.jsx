import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "../../components/List/List";
import useFetch from "../../hooks/useFetch";
import "./Products.scss";

const categoryImages = {
  1: "/img/cat1.jpg",
  2: "/img/cat2.jpg",
  3: "/img/cat3.jpg",
  4: "/img/cat4.jpg",
};

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sort, setSort] = useState("asc"); 
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const { data} = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };

  const generatePriceOptions = () => {
    const options = [];
    let price = 0;
    while (price <= 50000) {
      options.push(price);
      price += 5000;
    }
    return options;
  };

  const imageUrl = categoryImages[catId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [catId]);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
              checked={sort === "asc"}
            />
            <label htmlFor="asc">Price ( Low to High )</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
              checked={sort === "desc"}
            />
            <label htmlFor="desc">Price ( High to Low )</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            
            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            >
              {generatePriceOptions().map((option) => (
                <option key={option} value={option}>
                Under LKR {option}
                </option>
              ))}
            </select>
           
          </div>
        </div>
      </div>

      <div className="right">
        <img className="catImg" src={imageUrl} alt="" />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
          handleAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default Products;
