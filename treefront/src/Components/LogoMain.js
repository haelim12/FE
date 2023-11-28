import "../Styles/Main.css";
import React, { useEffect, useState } from "react";

function MainLogo() {
  const [color, setColor] = useState("");

  useEffect(() => {
    const storedColor = localStorage.getItem("color");
    if (!storedColor) {
      localStorage.setItem("color", "LIGHT");
      setColor("LIGHT");
    } else {
      setColor(storedColor);
    }
  }, []);

  const getImageSrc = () => {
    return color === "LIGHT" ? "LightLogo.png" : "DarkLogo.png";
  };

  return (
    <img className="main-logo-img" src={`${process.env.PUBLIC_URL}/Images/${getImageSrc()}`}
    alt="Logo"></img>
  );
}


export { MainLogo };