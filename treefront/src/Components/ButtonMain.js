import "../Styles/MobileMain.css";
import React from "react";

function RegistButton() {
  return (
    <div className="main-button login-button">  
      나의 플로깅 시작하기
    </div>
  );
}

function LookAroungButton() {
  return (
    <div className="main-button lookaround-button">  
      구경하기
    </div>
  );
}

export { RegistButton, LookAroungButton };