import "../Styles/Main.css";
import React from "react";
import { Link } from "react-router-dom";

function TextLink({ to, text }) {
  return (
    <Link to={to} className="main-text">
      {text}
    </Link>
  );
}

export { TextLink };