import React, { useState, useEffect } from "react";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/3.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 10000); // Update the interval delay to 4000 milliseconds (4 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <SkipPreviousOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <SkipNextOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
