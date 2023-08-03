// ColorSelection.js

import React, { useState } from "react";
import "./ColorSelection.scss";

const ColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const colors = ["#C0C0C0", "#000000", "#800000", "#0000FF", "#FF00FF"];

  return (
    <div className="color-selection">
      {colors.map((color, index) => (
        <button
          key={index}
          className={selectedColor === color ? "selected" : ""}
          style={{ backgroundColor: color }}
          onClick={() => handleColorChange(color)}
        />
      ))}
    </div>
  );
};

export default ColorSelection;
