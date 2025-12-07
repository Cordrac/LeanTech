import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Cockpit de Production Temps Réel',
    category: 'Power BI',
    description: "Dashboard interactif connectant les données SAP et machines. Visualisation du TRS, Pareto des arrêts et suivi qualité en temps réel.",
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Power BI', 'SAP', 'DAX', 'SQL']
  },
  {
    id: '2',
    title: 'App de Suivi Maintenance',
    category: 'Power Apps',
    description: "Application mobile permettant aux techniciens de scanner des QR codes machines, déclarer des pannes et commander des pièces.",
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop',
    tags: ['Power Apps', 'SharePoint', 'Automation']
  },
  {
    id: '3',
    title: 'Automatisation Facturation',
    category: 'RPA & VBA',
    description: "Bot automatisé extrayant les données de commandes SAP pour générer et envoyer les factures PDF par email aux clients.",
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop',
    tags: ['Power Automate', 'VBA', 'SAP Script']
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Réalisations & Projets" 
          subtitle="Quelques exemples de solutions déployées chez mes clients (données anonymisées)."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <p className="text-gray-500 text-sm italic">
             * Les captures d'écran respectent la confidentialité des données clients.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;