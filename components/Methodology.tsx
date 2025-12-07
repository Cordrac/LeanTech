
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  { 
    id: '01',
    title: 'Analyse', 
    description: "Audit de l’existant, compréhension des besoins métiers et définition des objectifs ROI." 
  },
  { 
    id: '02',
    title: 'Conception', 
    description: "Architecture de la solution, maquettage (UI/UX) et validation des spécifications techniques." 
  },
  { 
    id: '03',
    title: 'Développement', 
    description: "Construction de la solution (Agile), tests unitaires et recettes utilisateurs." 
  },
  { 
    id: '04',
    title: 'Déploiement & Suivi', 
    description: "Mise en production, formation des équipes et accompagnement post-démarrage." 
  }
];

const Methodology: React.FC = () => {
  return (
    <section id="process" className="relative py-24 overflow-hidden">
      
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover"
        style={{ 
          // Using a dark tech/dashboard background
          backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop")' 
        }}
      >
        {/* Strong Dark Overlay to ensure readability and "Dark Mode" feel */}
        <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Sticky Heading */}
          <div className="lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Ma méthode <br/>
                <span className="text-primary">d'intervention</span>
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                Une approche structurée et itérative pour garantir la réussite de vos projets, de la définition du besoin jusqu'à l'autonomie de vos équipes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                 <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-secondary font-semibold hover:text-white transition-colors group"
                >
                  Démarrer un projet 
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Vertical Timeline */}
          <div className="space-y-12 relative pl-4 md:pl-0">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-[28px] top-4 bottom-4 w-0.5 bg-gray-700/50"></div>

            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex gap-6 md:gap-8 group"
              >
                {/* Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border-2 border-gray-600 bg-gray-900 flex items-center justify-center text-primary font-heading font-bold text-base md:text-xl shadow-[0_0_15px_rgba(0,120,212,0.2)] group-hover:border-secondary group-hover:text-secondary group-hover:shadow-[0_0_20px_rgba(255,140,0,0.4)] transition-all duration-300 relative z-10">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Methodology;
