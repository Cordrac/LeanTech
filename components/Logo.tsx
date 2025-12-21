
import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", size = 32, showText = true, light = false }) => {
  // Variantes pour les parties du logo (L et T)
  const lVariants = {
    initial: { x: 0, y: 0 },
    hover: { 
      x: -12, 
      transition: { type: "spring", stiffness: 200, damping: 22 } 
    }
  };

  const tVariants = {
    initial: { x: 0, y: 0 },
    hover: { 
      x: 12, 
      transition: { type: "spring", stiffness: 200, damping: 22 } 
    }
  };

  // Variantes spécifiques pour la barre du T (elle monte pour former un vrai T)
  const tBarVariants = {
    initial: { y: 0 },
    hover: { 
      y: -40, // Remonte vers le sommet (y=10)
      transition: { type: "spring", stiffness: 150, damping: 20 }
    }
  };

  // Variantes pour le point central (sommet vers base)
  const circleVariants = {
    initial: { y: 0, scale: 1 },
    hover: { 
      y: 70, 
      scale: 1.2,
      transition: { type: "spring", stiffness: 180, damping: 18 }
    }
  };

  const glowVariants = {
    initial: { scale: 0.8, opacity: 0 },
    hover: { 
      scale: 1.2, 
      opacity: 0.6,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className={`flex items-center gap-3 select-none ${className}`}
      initial="initial"
      whileHover="hover"
    >
      <div className="relative" style={{ width: size, height: size }}>
        {/* Halo interactif pulsé en arrière-plan */}
        <motion.div 
          variants={glowVariants}
          className={`absolute inset-0 rounded-full blur-2xl pointer-events-none ${light ? 'bg-white/30' : 'bg-primary/40'}`}
        />
        
        <motion.svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 w-full h-full"
        >
          {/* --- GROUPE "L" (LEAN) --- */}
          <motion.g variants={lVariants}>
            {/* Diagonale gauche du L */}
            <path 
              d="M50 10L15 80H28L50 35L50 10Z" 
              fill={light ? "white" : "url(#blueGradLT)"} 
            />
            {/* Base du L */}
            <path 
              d="M15 80H45V72H28L15 80Z" 
              fill={light ? "white" : "url(#blueGradLT)"}
              fillOpacity={light ? "0.7" : "1"}
            />
          </motion.g>

          {/* --- GROUPE "T" (TECH) --- */}
          <motion.g variants={tVariants}>
            {/* Diagonale droite du T (le corps) */}
            <path 
              d="M50 10L85 80H72L50 35V10Z" 
              fill={light ? "white" : "url(#orangeGradLT)"}
              fillOpacity={light ? "0.8" : "1"}
            />
            {/* Barre transversale du T (Animée pour monter au sommet) */}
            <motion.path 
              variants={tBarVariants}
              d="M35 50H80L76 58H31L35 50Z" 
              fill={light ? "white" : "url(#orangeGradLT)"}
              fillOpacity={light ? "0.9" : "1"}
            />
          </motion.g>

          {/* Point de fusion qui descend du sommet vers le bas au hover */}
          <motion.circle 
            cx="50" cy="10" r="4.5"
            fill={light ? "white" : "#FFFFFF"}
            stroke={light ? "transparent" : "#0078D4"}
            strokeWidth="0.5"
            variants={circleVariants}
            className="drop-shadow-md"
          />

          {!light && (
            <defs>
              <linearGradient id="blueGradLT" x1="15" y1="10" x2="50" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0078D4" />
                <stop offset="1" stopColor="#005A9E" />
              </linearGradient>
              <linearGradient id="orangeGradLT" x1="50" y1="10" x2="85" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF8C00" />
                <stop offset="1" stopColor="#E07B00" />
              </linearGradient>
            </defs>
          )}
        </motion.svg>
      </div>

      {showText && (
        <span className={`font-heading font-black tracking-tighter text-2xl flex items-center transition-colors duration-300 ${light ? 'text-white' : 'text-slate-900'}`}>
          Lean
          <span className={`relative ml-0.5 ${light ? 'text-white/80' : 'text-primary'}`}>
            Tech
            <motion.span 
              className={`absolute -bottom-1 left-0 w-full h-1 rounded-full origin-left ${light ? 'bg-white' : 'bg-secondary'}`}
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1, transition: { duration: 0.3 } }
              }}
            />
          </span>
        </span>
      )}
    </motion.div>
  );
};

export default Logo;
