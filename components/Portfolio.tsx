import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart2, Smartphone, Zap, Database, 
  Settings, Layers, Filter, CheckCircle2, 
  ArrowRight, TrendingUp, Factory, 
  Crosshair, RefreshCw, X,
  Activity, Search, ImageOff
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Project } from '../types';

// --- Helper Component for Image Loading ---
const ProjectImage = ({ src, alt, fallbackSrc }: { src: string, alt: string, fallbackSrc: string }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-52 overflow-hidden bg-gray-100">
      <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
      
      {!hasError ? (
        <img 
          src={imgSrc} 
          alt={alt} 
          onError={() => {
            // Si l'image locale échoue, on passe au fallback Unsplash
            if (imgSrc !== fallbackSrc) {
               setImgSrc(fallbackSrc);
            } else {
               setHasError(true);
            }
          }}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 blur-[0.5px] group-hover:blur-0"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
           <ImageOff size={32} />
        </div>
      )}
    </div>
  );
};

// --- Configs & Helpers ---

type Category = 'Power BI' | 'Power Apps' | 'Power Automate' | 'SAP/VBA' | 'Lean' | 'Lean + Digital';
type Sector = 'Pharmaceutique' | 'Agroalimentaire' | 'Industrie' | 'Multi-secteurs';

const CATEGORIES: Category[] = ['Power BI', 'Power Apps', 'Power Automate', 'SAP/VBA', 'Lean', 'Lean + Digital'];
const SECTORS: Sector[] = ['Pharmaceutique', 'Agroalimentaire', 'Industrie', 'Multi-secteurs'];

const getCategoryColor = (cat: string) => {
  switch (cat) {
    case 'Power BI': return 'bg-blue-600 text-white shadow-blue-200';
    case 'Power Apps': return 'bg-purple-600 text-white shadow-purple-200';
    case 'Power Automate': return 'bg-sky-500 text-white shadow-sky-200';
    case 'SAP/VBA': return 'bg-gray-700 text-white shadow-gray-300';
    case 'Lean': return 'bg-emerald-600 text-white shadow-emerald-200';
    case 'Lean + Digital': return 'bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-emerald-200';
    default: return 'bg-gray-500 text-white';
  }
};

const getCategoryIcon = (cat: string) => {
  switch (cat) {
    case 'Power BI': return <BarChart2 size={16} />;
    case 'Power Apps': return <Smartphone size={16} />;
    case 'Power Automate': return <Zap size={16} />;
    case 'SAP/VBA': return <Database size={16} />;
    case 'Lean': return <RefreshCw size={16} />;
    case 'Lean + Digital': return <Layers size={16} />;
    default: return <Activity size={16} />;
  }
};

// --- Projects Data ---
// Note: We use local assets, but define fallback URLs from Unsplash in case local files miss.
const projects: Project[] = [
  {
    id: '1',
    title: 'Suivi Production en Temps Réel',
    category: 'Power BI',
    description: (
      <span>
        Dashboard interactif connectant données machines et planning en temps réel. Pilotage précis ayant permis{' '}
        <span className="font-bold text-emerald-600">+5% de TRS moyen</span>.
      </span>
    ),
    imageUrl: '/assets/cockpit.png', 
    // Fallback URL if local file fails (High quality dashboard image)
    fallbackUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    tags: ['Power BI', 'DAX', 'SQL']
  },
  {
    id: '2',
    title: 'Plateforme Amélioration Continue',
    category: 'Power Apps',
    description: (
      <span>
        Digitalisez vos Cartes T et idées Kaizen : saisie mobile, suivi en temps réel, validation collaborative.{' '}
        <span className="font-bold text-emerald-600">Réduction de 50% du temps de gestion</span>.
      </span>
    ),
    imageUrl: '/assets/carte-t.png',
    // Fallback URL (Kanban board / sticky notes concept)
    fallbackUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop',
    tags: ['Power Apps', 'SharePoint', 'Automation']
  },
  {
    id: '3',
    title: 'Digitalisation Planning Échantillons',
    category: 'RPA & VBA',
    description: (
      <span>
        Automatisation complète du planning laboratoire : extraction SAP, mise à jour Excel et synchronisation automatique.{' '}
        <span className="font-bold text-emerald-600">Gain de 1h30 par jour</span>.
      </span>
    ),
    imageUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop',
    fallbackUrl: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=800&auto=format&fit=crop',
    tags: ['Power Automate', 'VBA', 'SAP Script']
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Réalisations & Projets" 
          subtitle="Quelques exemples de solutions déployées chez mes clients."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image with Robust Fallback */}
              <ProjectImage 
                 src={project.imageUrl} 
                 alt={project.title} 
                 fallbackSrc={project.fallbackUrl || project.imageUrl} 
              />
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1 ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {project.description}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
           <Link 
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
           >
              Voir tous les projets <ArrowRight size={20} />
           </Link>
           <p className="text-gray-500 text-sm italic">
             * Les captures d'écran respectent la confidentialité des données clients.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;