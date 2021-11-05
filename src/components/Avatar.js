import React, { useState } from "react";
import "../App.css";

const Avatar = ({ src }) => {
  // hook -----------------------------------
  const [imgSize, setImgSize] = useState("m");
  const [sizeValue, setSizeValue] = useState("60");
  const [imgShape, setImgShape] = useState("square");

  //onClick function ----------------------------------
  const sizeBtn = (event) => {
    setImgSize(event.target.value);
    setSizeValue(
      event.target.value === "s"
        ? "30"
        : event.target.value === "m"
        ? "60"
        : event.target.value === "l"
        ? "120"
        : "200"
    );
  };

  const shapeBtn = (event) => {
    setImgShape(
      event.target.value === "square"
        ? "square"
        : event.target.value === "round"
        ? "round"
        : "circle"
    );
  };

  //rendering ----------------------------------------
  return (
    <div>
      {/* Size buttons ------------------------ */}
      <div className="imgSizeBtns">
        <p>Choose the size of the picture:</p>
        <button onClick={sizeBtn} value="s">
          Small
        </button>
        <button onClick={sizeBtn} value="m">
          Medium
        </button>
        <button onClick={sizeBtn} value="l">
          Large
        </button>
        <button onClick={sizeBtn} value="xl">
          Extra Large
        </button>
      </div>

      {/* Shape buttons ------------------------ */}
      <div className="imgShapeBtns">
        <p>Choose the style of the picture:</p>
        <button onClick={shapeBtn} value="square">
          Square
        </button>
        <button onClick={shapeBtn} value="round">
          Round
        </button>
        <button onClick={shapeBtn} value="circle">
          Circle
        </button>
      </div>

      {/* Image & Info ------------------------ */}
      <div className="imageInfo">
        <img
          className={imgShape}
          src={`${src}${sizeValue}/${sizeValue}`}
          alt=""
        />

        <p>
          Size: <strong>{imgSize.toUpperCase()}</strong> with {sizeValue} ×
          {sizeValue}
        </p>
        <p>Type: {imgShape}</p>
      </div>
    </div>
  );
};

Avatar.defaultProps = {
  src: "https://picsum.photos/",
};

export default Avatar;

// src="https://picsum.photos/600/600"
