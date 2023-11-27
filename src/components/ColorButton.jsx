import React from "react";

export const ColorButton = ({ bgColor, setBgColor }) => {
  const colors = ["red", "green", "purple", "blue", "black"];

  return (
    <div>
      {colors.map((color, idx) => (
        <button
          key={idx}
          value={color}
          onClick={(e) => setBgColor(e.target.value)}
          className={`btn btn-${color} ${
            color === bgColor ? "btn-active" : "null"
          }`}
        ></button>
      ))}
    </div>
  );
};
