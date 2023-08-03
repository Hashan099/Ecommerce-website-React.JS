import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters] [type] [$eq]=${type}`
  );

  if (loading) {
    return <div>Loading... please wait !!!</div>;
  }

  if (error) {
    return <div>Server Side error please reload ... {error.message}</div>;
  }

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Celene Clothing brings you a curated collection of featured products
          that exude style, quality, and sophistication. Our featured products
          embody the latest fashion trends, showcasing the perfect blend of
          timeless elegance and modern flair. From chic dresses to tailored
          suits, each piece is meticulously crafted with attention to detail and
          made from premium fabrics. Whether you're attending a formal event or
          looking for everyday essentials, our featured products offer
          versatility and comfort without compromising on style. Discover the
          epitome of fashion excellence with Celene Clothing's featured
          products and elevate your wardrobe to new heights.
        </p>
      </div>
      <div className="bottom">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
