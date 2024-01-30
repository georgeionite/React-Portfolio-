import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import ProjectGallery from './components/ProjectsGallery';
import Contact from './components/Contact';
import Footer from './components/footer'; 
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* Define other routes as needed */}
      </Routes>
      <Footer /> {/* This will render the Footer at the bottom of every page */}
    </Router>
  );
}

export default App;
