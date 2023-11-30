import "../Styles/Logo.css";
import React from "react";

function Input({ title, type, placeholder, onChange }) {

  return (
    <div className="input-each-container">
      {/* <div className="title">{title}</div> */}
      <input
        className="input-box"
        type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export { Input };