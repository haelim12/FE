import "../Styles/Logo.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from "../Store/Actions/ModeActionCreater"

function Logo({ size }) {
  const { logo } = useSelector(state => state.modeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode());
  }, []);

  return (
    <img className={`${size}`} src={logo}
    alt="Logo"></img>
  );
}

export { Logo };