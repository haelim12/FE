import './App.css';
import { MobileView, BrowserView } from 'react-device-detect';
import { Routes, Route } from 'react-router-dom';
import {MobileMain} from "./Views/Mobile/MobileMain"

function App() {
  return (
    <div className="App">
      <MobileView>
        <Routes>
          <Route path="/" element={<MobileMain/>}/>
        </Routes>
      </MobileView>
      <BrowserView>
        <Routes>
          <Route path="/" element={<MobileMain/>}/>
        </Routes>
      </BrowserView>
    </div>
  );
}

export default App;
