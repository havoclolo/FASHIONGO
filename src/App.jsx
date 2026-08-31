import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Accessories from './pages/Accessories';
import Jewelry from './pages/Jewelry';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/jewelry' element={<Jewelry />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;