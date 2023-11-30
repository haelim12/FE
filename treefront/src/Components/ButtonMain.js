import "../Styles/MobileMain.css";
import React from "react";
import PropTypes from 'prop-types';

function RegistButton() {
  return (
    <div className="main-button login-button">  
      나의 플로깅 시작하기
    </div>
  );
}

function LookAroundButton({onClick}) {
  return (
    <div className="main-button lookaround-button" onClick={onClick}>  
      구경하기
    </div>
  );
}

LookAroundButton.propTypes = {
  onClick: PropTypes.func,
};

export { RegistButton, LookAroundButton };