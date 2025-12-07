import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay and Parallax (bg-fixed) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop")' 
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-blue-900/50 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <TrendingUp size={16} />
              <span>Expert en Performance Industrielle</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Transformez vos données en <span className="text-secondary">décisions</span>, vos processus en <span className="text-primary">performance</span>.
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl drop-shadow-md">
              J'accompagne les industriels dans leur transformation digitale et l'amélioration continue grâce aux solutions Microsoft Power Platform (BI, Apps, Automate) et aux méthodes Lean.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact"
                className="bg-secondary hover:bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
              >
                Discutons de votre projet
                <ArrowRight size={20} />
              </a>
              <a 
                href="#services"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-lg font-medium px-8 py-4 rounded-lg transition-all flex items-center justify-center hover:-translate-y-1"
              >
                Découvrir mes services
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;