import React, {useState, useRef} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/HomePage';
import ConnectPage from './pages/ConnectPage';
import About from './pages/AboutPage';
import Disclaimer from './pages/DisclaimerPage';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  const [clickedEnter, setClickedEnter] = useState(false);
  const audioRef = useRef(new Audio('/dist/dropsong.mp3'));

  const clickEnter = () => {
    if (!clickedEnter) {
      setClickedEnter(true);
    }
    audioRef.current.play();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage clickEnter={clickEnter}/>}/>
        <Route exact path='/home' element={<Home clickedEnter={clickedEnter}/>}/>
        <Route exact path='/connect' element={<ConnectPage clickedEnter={clickedEnter}/>}/>
        <Route exact path='/about' element={<About clickedEnter={clickedEnter}/>}/>
        <Route exact path='/disclaimer' element={<Disclaimer clickedEnter={clickedEnter}/>}/>
        <Route path='*' element={<PageNotFound clickedEnter={clickedEnter}/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
