import "../../Styles/MobileMain.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setMode, changeMode } from "../../Store/Actions/ModeActionCreater";

import { RegistButton, LookAroundButton } from "../../Components/ButtonMain";
import { Logo } from "../../Components/Logo";
import { LoginModal } from "../../Modal/LoginModal";


function MobileMain() {
  const { background } = useSelector(state => state.modeReducer);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMode());
  }, []);

  const handleLookAroundClick = () => {
    dispatch(changeMode());
  };
  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };
  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <div
      className="mobile-main-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Logo size="big" />
      <div>
        <LookAroundButton onClick={handleLookAroundClick}/>
        <RegistButton />
            <div className="main-text-container">
                <div className="main-text"> 이미 나무를 키우고 계신가요? </div>
                <div className="main-text" onClick={handleLoginClick}>로그인</div>
            </div>
      </div>
      {isLoginModalOpen && <LoginModal isOpen={true} onClose={handleCloseLoginModal} />}
    </div>
  );
}

export { MobileMain };