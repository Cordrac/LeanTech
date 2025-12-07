
import React, { useState, useEffect } from 'react';
import { Menu, X, BarChart2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if we are on the home page for transparency logic
  const isHomePage = location.pathname === '/';
  
  // Navbar is transparent only at top of Home page
  // On other pages, it should be white/glassy but visible
  const isTransparent = isHomePage && !scrolled;

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Réalisations', path: '/portfolio' },
    { name: 'Méthodologie', path: '/methodology' },
    { name: 'À Propos', path: '/about' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
      !isTransparent 
        ? 'bg-white/80 backdrop-blur-md shadow-sm border-gray-100 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-heading font-bold text-2xl group" onClick={handleLinkClick}>
          <div className={`p-2 rounded-lg transition-colors ${!isTransparent ? 'bg-primary text-white' : 'bg-white text-primary'}`}>
            <BarChart2 size={24} className="group-hover:rotate-180 transition-transform duration-500" />
          </div>
          <span className={!isTransparent ? 'text-gray-900' : 'text-white drop-shadow-md'}>
            Lean<span className={!isTransparent ? 'text-primary' : 'text-white'}>Tech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`text-sm font-semibold tracking-wide transition-all hover:-translate-y-0.5 ${
                !isTransparent 
                  ? 'text-gray-600 hover:text-primary' 
                  : 'text-white/90 hover:text-white drop-shadow-sm'
              } ${location.pathname === link.path ? (!isTransparent ? 'text-primary' : 'text-white border-b-2 border-white') : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg ${
               !isTransparent
               ? 'bg-secondary hover:bg-orange-600 text-white'
               : 'bg-white text-primary hover:bg-gray-100'
            }`}
          >
            Me Contacter
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-gray-900" size={28} />
          ) : (
            <Menu className={!isTransparent ? "text-gray-900" : "text-white"} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl overflow-hidden absolute w-full top-full left-0"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={`font-bold text-lg hover:text-primary transition-colors ${location.pathname === link.path ? 'text-secondary' : 'text-gray-700'}`}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/contact"
                  className="block w-full bg-primary text-white text-center py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-md"
                  onClick={handleLinkClick}
                >
                  Me Contacter
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
