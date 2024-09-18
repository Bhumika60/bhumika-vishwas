import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home, About, Projects, Contact } from './pages';
import FooterWrapper from './components/FooterWrapper'; 
const App = () => {
  return (
    <main className="bg-gradient-to-b from-[#1e1e2f] via-[#121212] to-[#121212] text-white min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <FooterWrapper /> 
      </Router>
    </main>
  );
}

export default App;
