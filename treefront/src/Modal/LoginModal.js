import "../Styles/Login.css";
import React, { useState } from "react";
import Modal from 'react-modal'
import { Logo } from "../Components/Logo";
import { Blank } from "../Components/Blank";
import { Input } from "../Components/InputForm";

const modalStyles = {
  overlay: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    position: 'absolute',
    width: '100vw',
    height: '100vh', 
    margin: 0, 
    padding: 0,
    left: 0,
    right: 0,
    top: '100%',
    overflow: 'hidden', 
    transform: 'translateY(0%)',
    transition: 'all 600ms cubic-bezier(0.86, 0, 0.07, 1)',
  },
};

const LoginModal = (props) => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
    };
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    };
  return (
    <Modal
      appElement={document.getElementById('root')}
      isOpen={props.isOpen}
      style={modalStyles}
    >
      <div className="mobile-login-container">
        <Logo size="mid" />
        <Blank size="20" />
        <div className="project-title">TreeLog</div>
        <Blank size="20" />
        <div className="input-root-container">
          <Input
            title="이메일"
            type="text"
            placeholder="이메일"
            onChange={handleEmailChange}
          />
          <Input
            title="비밀번호"
            type="password"
            placeholder="비밀번호"
            onChange={handlePasswordChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export { LoginModal };