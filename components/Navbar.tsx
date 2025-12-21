
import React, { useState, useEffect } from 'react';
import { Menu, X, Lock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

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

  const isHomePage = location.pathname === '/';
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
        <Link to="/" onClick={handleLinkClick}>
          <Logo light={isTransparent} size={38} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
             const isLocked = link.path === '/portfolio';
             
             if (isLocked) {
                return (
                  <div key={link.name} className="relative group cursor-not-allowed">
                     <span className={`text-sm font-bold tracking-wide flex items-center gap-1.5 ${!isTransparent ? 'text-gray-400' : 'text-white/60'}`}>
                        {link.name} <Lock size={12} />
                     </span>
                     <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max bg-gray-800 text-white text-[10px] px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase font-black tracking-widest">
                       En cours
                     </div>
                  </div>
                );
             }

             return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`text-sm font-bold tracking-wide transition-all hover:scale-105 ${
                    !isTransparent 
                      ? 'text-slate-600 hover:text-primary' 
                      : 'text-white/90 hover:text-white drop-shadow-sm'
                  } ${location.pathname === link.path ? (!isTransparent ? 'text-primary' : 'text-white border-b-2 border-white') : ''}`}
                >
                  {link.name}
                </Link>
             );
          })}
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className={`px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all transform hover:scale-105 shadow-xl ${
               !isTransparent
               ? 'bg-primary hover:bg-blue-700 text-white shadow-primary/20'
               : 'bg-white text-primary hover:bg-gray-100 shadow-white/10'
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="md:hidden bg-white fixed inset-0 z-50 overflow-hidden h-screen"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <Logo size={32} />
                <button onClick={() => setIsOpen(false)}><X size={32} className="text-slate-900" /></button>
              </div>
              <div className="flex flex-col px-6 py-12 space-y-8">
                {navLinks.map((link) => {
                   const isLocked = link.path === '/portfolio';
                   if (isLocked) return null;

                   return (
                      <Link 
                        key={link.name} 
                        to={link.path}
                        className={`font-black text-3xl uppercase tracking-tighter hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-slate-900'}`}
                        onClick={handleLinkClick}
                      >
                        {link.name}
                      </Link>
                   );
                })}
                <Link 
                  to="/contact"
                  className="w-full bg-slate-900 text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl"
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
