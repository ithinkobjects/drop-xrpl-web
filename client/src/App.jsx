import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PageNotFound from './pages/PageNotFound';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
