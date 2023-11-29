import "../Styles/MobileMain.css";
import React from "react";
import { RegistButton, LookAroungButton } from "../Components/ButtonMain";
import { MainLogo } from "../Components/LogoMain";
import { TextLink } from "../Components/TextMain";

function MobileMain() {
  return (
    <div className="mobile-main-container">  
          <MainLogo />
          <div>
            <LookAroungButton/>
            <RegistButton />
                <div className="main-text-container">
                    <div className="main-text"> 이미 나무를 키우고 계신가요? </div>
                    <TextLink to="/mlogin" text="로그인 하기"/>
                </div>
          </div>

    </div>
  );
}

export { MobileMain };