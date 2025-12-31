import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Workshops from './pages/Workshops';
import Resources from './pages/Resources';
import Blogs from './pages/Blogs';
import Mentoring from './pages/Mentoring';
import Merchandise from './pages/Merchandise';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/mentoring" element={<Mentoring />} />
            <Route path="/merchandise" element={<Merchandise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
