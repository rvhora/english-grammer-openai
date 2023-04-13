import React from 'react';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Error from './components/Error';
import { useGlobalContext } from './components/AppContext';

const App = () => {
    const {darkTheme} = useGlobalContext();
    return (
      <div className={`theme ${darkTheme && 'dark-theme'}`}>
        <div className="container">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
}

export default App
