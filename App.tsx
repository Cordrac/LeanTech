import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import PortfolioPage from './pages/PortfolioPage';
import MethodologyPage from './pages/MethodologyPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-blue-100 selection:text-blue-900 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Contact />
    </div>
  );
}

export default App;