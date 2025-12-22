
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BarChart2, Smartphone, Zap, Database, 
  Settings, Layers, Filter, CheckCircle2, 
  ArrowRight, TrendingUp, Factory, Truck, 
  ShoppingBag, Crosshair, RefreshCw, X,
  Activity, Search
} from 'lucide-react';

// --- Types ---

type Category = 'Power BI' | 'Power Apps' | 'Power Automate' | 'SAP/VBA' | 'Lean' | 'Lean + Digital';
type Sector = 'Pharmaceutaque' | 'Agroalimentaire' | 'Industrie' | 'Logistique' | 'Commercial' | 'Multi-secteurs';

interface PortfolioProject {
  id: string;
  title: string;
  category: Category;
  sector: Sector;
  description: string;
  technologies: string[];
  results: string[];
  image: string;
}

// --- Data ---

const projects: PortfolioProject[] = [
  // Power BI
  {
    id: 'pbi-1',
    title: 'Cockpit de Production Temps Réel',
    category: 'Power BI',
    sector: 'Pharmaceutique',
    description: "Dashboard de pilotage en temps réel pour 5 lignes de packaging pharmaceutique avec monitoring du TRS, suivi des campagnes et alertes automatiques.",
    technologies: ['Power BI', 'DAX', 'Power Query', 'DENEB', 'RLS', 'SAP'],
    results: ['Visibilité temps réel', 'Réactivité +50% sur problèmes', 'TRS +12 points en 6 mois', 'Gain 2h/jour reporting'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pbi-2',
    title: 'Dashboard Logistique & Supply Chain',
    category: 'Power BI',
    sector: 'Agroalimentaire',
    description: "Solution décisionnelle complète pour le suivi des réceptions et expéditions avec consolidation hebdomadaire et analyse par transporteur.",
    technologies: ['Power BI', 'Power Query', 'DAX', 'Excel Connector'],
    results: ['Consolidation auto vs 1j/semaine', 'Taux de service 92% → 97%', 'Négociation tarifaire facilitée'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pbi-3',
    title: 'Tableau de Bord Qualité Multi-Sites',
    category: 'Power BI',
    sector: 'Industrie',
    description: "Dashboard centralisé de suivi qualité pour 3 sites de production avec analyse des non-conformités, réclamations clients et indicateurs qualité.",
    technologies: ['Power BI Service', 'SAP QM', 'SharePoint', 'SQL'],
    results: ['Vision consolidée 3 sites', 'Réduction défauts -15%', 'Temps reporting divisé par 4'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'pbi-4',
    title: 'Dashboard Commercial & Ventes',
    category: 'Power BI',
    sector: 'Commercial',
    description: "Outil de pilotage commercial avec suivi CA, marges, objectifs et analyse client pour équipe de 12 commerciaux.",
    technologies: ['Power BI', 'CRM', 'DAX', 'RLS', 'Mobile'],
    results: ['Pilotage autonome commerciaux', 'Atteinte objectifs +8% YoY', 'Focus clients à potentiel'],
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop'
  },
  
  // Power Apps
  {
    id: 'papp-5',
    title: 'Application de Gestion de Projets',
    category: 'Power Apps',
    sector: 'Agroalimentaire',
    description: "Application mobile et desktop pour gérer portfolio de projets d'amélioration continue avec matrice RACI, suivi des tâches et reporting intégré.",
    technologies: ['Power Apps', 'SharePoint', 'Power Automate', 'Power BI'],
    results: ['Centralisation données', 'Taux complétion +25%', 'Admin réduit de 60%'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'papp-6',
    title: 'Application Checklist Qualité Terrain',
    category: 'Power Apps',
    sector: 'Pharmaceutique',
    description: "App mobile pour audits qualité et inspections 5S avec collecte de données hors-ligne, photos et génération automatique de rapports.",
    technologies: ['Power Apps Mobile', 'Dataverse', 'Power Automate', 'Offline'],
    results: ['100% digitalisé', 'Gain 30 min/audit', 'Traçabilité complète'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'papp-7',
    title: 'App de Saisie Production Temps Réel',
    category: 'Power Apps',
    sector: 'Agroalimentaire',
    description: "Application tablette pour saisie des données de production en temps réel par les opérateurs, remplaçant les fiches papier.",
    technologies: ['Power Apps', 'SQL Server', 'Power BI Integration'],
    results: ['Zéro papier', 'Données temps réel', 'Suppression erreurs de saisie'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop'
  },

  // Power Automate
  {
    id: 'paut-8',
    title: 'Automatisation Reporting Hebdomadaire',
    category: 'Power Automate',
    sector: 'Pharmaceutique',
    description: "Système d'automatisation complet pour génération et distribution de 15 rapports hebdomadaires (production, qualité, logistique).",
    technologies: ['Power Automate', 'Power BI API', 'SharePoint', 'Outlook'],
    results: ['3h/semaine économisées/pers', 'Distribution fiable', 'Archivage auto'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'paut-9',
    title: 'Workflow d\'Approbation de Documents',
    category: 'Power Automate',
    sector: 'Pharmaceutique',
    description: "Circuit d'approbation multi-niveaux pour validation de documents qualité avec escalade automatique et traçabilité complète.",
    technologies: ['Approvals', 'SharePoint', 'Teams', 'Audit Trail'],
    results: ['Délai 12j → 4j', 'Traçabilité 100%', 'Zéro perte de doc'],
    image: 'https://images.unsplash.com/photo-1563986768494-4dee46a38531?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'paut-10',
    title: 'Notifications Automatiques Multi-Canaux',
    category: 'Power Automate',
    sector: 'Multi-secteurs',
    description: "Système d'alertes intelligent pour événements critiques (production, qualité, sécurité) avec distribution via email, Teams et SMS.",
    technologies: ['Power Automate', 'Teams', 'Twilio (SMS)', 'Data Connectors'],
    results: ['Réactivité immédiate', 'Résolution 2x plus rapide', 'Moins d\'escalades'],
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=800&auto=format&fit=crop'
  },

  // SAP / VBA
  {
    id: 'vba-11',
    title: 'Extraction Auto Multi-Transactions SAP',
    category: 'SAP/VBA',
    sector: 'Agroalimentaire',
    description: "Suite de macros VBA pour extraire automatiquement des données de 8 transactions SAP différentes, consolidation et mise en forme Excel.",
    technologies: ['Excel VBA', 'SAP GUI Scripting', 'Power BI Export'],
    results: ['2h30/jour économisées', 'Process 150min → 8min', 'Zéro erreur'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vba-12',
    title: 'Outil de Gestion de Lots & Traçabilité',
    category: 'SAP/VBA',
    sector: 'Pharmaceutique',
    description: "Application Excel/VBA complète pour gestion des lots de production avec extraction SAP, suivi statuts, et génération de certificats qualité.",
    technologies: ['VBA UserForms', 'SAP GUI', 'PDF Generation'],
    results: ['Certificats 45min → 3min', 'Traçabilité audit', 'Réactivité client'],
    image: 'https://images.unsplash.com/photo-1565514020176-dbf2277cc16d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vba-13',
    title: 'Dashboard Excel Dynamique',
    category: 'SAP/VBA',
    sector: 'Multi-secteurs',
    description: "Tableau de bord Excel interactif avec actualisation automatique via macros VBA, slicers dynamiques et graphiques personnalisés.",
    technologies: ['Excel VBA', 'Pivot Tables', 'Slicers', 'Automation'],
    results: ['Update 1 clic', 'Gain 1h/jour', 'Fiabilité données'],
    image: 'https://images.unsplash.com/photo-1543286386-713df548e9cc?q=80&w=800&auto=format&fit=crop'
  },

  // Lean
  {
    id: 'lean-14',
    title: 'Chantier Kaizen - Embouteillage',
    category: 'Lean',
    sector: 'Agroalimentaire',
    description: "Chantier d'amélioration intensive de 5 jours sur ligne d'embouteillage avec objectif d'augmentation de la cadence et réduction des arrêts.",
    technologies: ['Kaizen', '5S', 'Poka-Yoke', 'Management Visuel'],
    results: ['Cadence +29%', 'Arrêts -65%', 'ROI < 3 mois'],
    image: 'https://images.unsplash.com/photo-1598528994963-470087099236?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'lean-15',
    title: 'SMED - Réduction Temps Changement',
    category: 'Lean',
    sector: 'Pharmaceutique',
    description: "Projet de réduction du temps de changement de format sur ligne de packaging pharmaceutique, passage de 45 minutes à 15 minutes.",
    technologies: ['SMED', 'Standardisation', 'Formation', 'Vidéo'],
    results: ['Changement -67%', 'Capacité +10%', 'Flexibilité accrue'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'lean-16',
    title: 'VSM & Optimisation Flux',
    category: 'Lean',
    sector: 'Agroalimentaire',
    description: "Cartographie Value Stream Mapping complète d'un processus de production end-to-end et plan d'optimisation.",
    technologies: ['VSM', 'Gemba Walk', 'Kanban', 'Flux tirés'],
    results: ['Lead time -50%', 'Stocks -60%', 'Productivité +25%'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop'
  },

  // Lean + Digital
  {
    id: 'ld-17',
    title: 'Transformation Complète Ligne Prod',
    category: 'Lean + Digital',
    sector: 'Pharmaceutique',
    description: "Projet complet combinant optimisation Lean et digitalisation pour une ligne de conditionnement avec amélioration TRS et automatisation.",
    technologies: ['Kaizen', 'Power Apps', 'Power BI', 'SMED'],
    results: ['TRS +16 points', 'Saisie papier éliminée', 'Réactivité x3'],
    image: 'https://images.unsplash.com/photo-1581093458791-9f302e6d8359?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'ld-18',
    title: 'Système Qualité Digital + Lean',
    category: 'Lean + Digital',
    sector: 'Pharmaceutique',
    description: "Transformation du système de gestion qualité : audits digitalisés, résolution de problèmes structurée, et dashboard de pilotage intégré.",
    technologies: ['8D / Ishikawa', 'Power Apps', 'Power BI', 'Workflows'],
    results: ['Défauts -42%', 'Résolution -55%', '100% digitalisé'],
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop'
  }
];

// --- Configs ---

const CATEGORIES: Category[] = ['Power BI', 'Power Apps', 'Power Automate', 'SAP/VBA', 'Lean', 'Lean + Digital'];
const SECTORS: Sector[] = ['Pharmaceutique', 'Agroalimentaire', 'Industrie', 'Multi-secteurs'];

const getCategoryColor = (cat: Category) => {
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

const getCategoryIcon = (cat: Category) => {
  switch (cat) {
    case 'Power BI': return <BarChart2 size={16} />;
    case 'Power Apps': return <Smartphone size={16} />;
    case 'Power Automate': return <Zap size={16} />;
    case 'SAP/VBA': return <Database size={16} />;
    case 'Lean': return <RefreshCw size={16} />;
    case 'Lean + Digital': return <Layers size={16} />;
    default: return <Settings size={16} />;
  }
};

// --- Main Component ---

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Tous'>('Tous');
  const [activeSector, setActiveSector] = useState<Sector | 'Tous'>('Tous');

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchCat = activeCategory === 'Tous' || project.category === activeCategory;
      const matchSec = activeSector === 'Tous' || project.sector === activeSector;
      return matchCat && matchSec;
    });
  }, [activeCategory, activeSector]);

  const resetFilters = () => {
    setActiveCategory('Tous');
    setActiveSector('Tous');
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        {/* Mosaic Background */}
        <div className="absolute inset-0 opacity-10 grid grid-cols-4 md:grid-cols-6 gap-2 transform -skew-y-3 scale-110 pointer-events-none">
          {projects.slice(0, 12).map((p, i) => (
             <div key={i} className="h-40 bg-gray-700 overflow-hidden relative">
               <img src={p.image} className="w-full h-full object-cover grayscale blur-[2px]" alt="Background" />
             </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Crosshair size={16} className="text-secondary" />
              <span>Portfolio & Cas Clients</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              Projets Réalisés : De la Performance <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Opérationnelle à la Digitalisation</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
              Des solutions concrètes déployées sur le terrain qui génèrent des résultats mesurables et durables.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto border-t border-white/10 pt-8">
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1"><BarChart2 size={14}/> Dashboards</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">15+</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1"><Factory size={14}/> Projets Lean</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">500+</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1"><Activity size={14}/> ROI Moyen</div>
              </div>
              <div className="p-4">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-1">300%</div>
                <div className="text-sm text-gray-400 flex items-center justify-center gap-1"><TrendingUp size={14}/> ROI Moyen</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTERS */}
      <section className="sticky top-20 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Category Filters (Horizontal Scroll) */}
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar mask-gradient">
              <button
                onClick={() => setActiveCategory('Tous')}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                  activeCategory === 'Tous' 
                  ? 'bg-gray-900 text-white border-gray-900' 
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                }`}
              >
                Tous les projets
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                    activeCategory === cat
                    ? getCategoryColor(cat) + ' border-transparent shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {getCategoryIcon(cat)}
                  {cat}
                </button>
              ))}
            </div>

            {/* Sector Filters & Reset */}
            <div className="flex items-center gap-3 w-full md:w-auto">
               <div className="relative group w-full md:w-48">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                  <select 
                    value={activeSector}
                    onChange={(e) => setActiveSector(e.target.value as Sector | 'Tous')}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none appearance-none cursor-pointer hover:border-gray-400 transition-colors"
                  >
                    <option value="Tous">Tous Secteurs</option>
                    {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
               </div>
               
               {(activeCategory !== 'Tous' || activeSector !== 'Tous') && (
                 <button 
                    onClick={resetFilters}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Réinitialiser"
                 >
                   <X size={20} />
                 </button>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT GRID */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="mb-8 text-gray-500 text-sm font-medium">
             Affichage de <span className="text-gray-900 font-bold">{filteredProjects.length}</span> projets
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col"
                >
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 blur-[0.5px] group-hover:blur-0"
                    />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 ${getCategoryColor(project.category)}`}>
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-white/90 backdrop-blur text-gray-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {project.sector}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Results / Highlights */}
                    <div className="mb-6 space-y-2">
                       {project.results.slice(0, 2).map((res, i) => (
                         <div key={i} className="flex items-start gap-2 text-xs font-medium text-gray-700">
                           <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                           <span>{res}</span>
                         </div>
                       ))}
                       {project.results.length > 2 && (
                         <div className="text-xs text-gray-400 pl-6">+ {project.results.length - 2} autres bénéfices</div>
                       )}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-[10px] font-semibold border border-gray-200">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-[10px] text-gray-400 py-1">...</span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                       <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Résultats prouvés</span>
                       <Link 
                          to="/contact" 
                          className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all group/link"
                       >
                          Projet similaire ? <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                       </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
               <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                 <Search size={32} />
               </div>
               <h3 className="text-xl font-bold text-gray-900">Aucun projet trouvé</h3>
               <p className="text-gray-500 mt-2">Essayez de modifier vos filtres de recherche.</p>
               <button onClick={resetFilters} className="mt-4 text-primary font-bold hover:underline">
                 Réinitialiser les filtres
               </button>
            </div>
          )}

        </div>
      </section>

      {/* 4. CALL TO ACTION FOOTER */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
             Ces réalisations vous inspirent ?
           </h2>
           <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
             Chaque entreprise est unique, mais les leviers de performance sont souvent les mêmes. Discutons de vos enjeux spécifiques.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact"
                className="bg-secondary hover:bg-orange-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
              >
                Parlons de votre projet
                <ArrowRight size={20} />
              </Link>
              <Link 
                to="/services"
                className="bg-white border border-gray-200 text-gray-700 hover:text-primary hover:border-primary text-lg font-bold px-8 py-4 rounded-xl hover:-translate-y-1 transition-all"
              >
                Voir mes services
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
