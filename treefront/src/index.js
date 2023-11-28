import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { LoginView } from './Views/LoginView';
import { MobileMain } from './Views/MobileMain';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <BrowserRouter>
    <App />
    <Routes>
        <Route path="/m" element={<MobileMain/>}/>
        <Route path="/mlogin" element={<LoginView />}/>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
