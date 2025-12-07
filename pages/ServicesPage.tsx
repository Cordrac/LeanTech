
import React, { useState, useEffect } from 'react';
import { 
  BarChart2, RefreshCw, Cpu, CheckCircle, 
  ArrowRight, TrendingUp, Layers, Zap 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('lean');
  const [isSticky, setIsSticky] = useState(false);

  // Sticky Nav Logic
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 300);
      
      const sections = ['lean', 'bi', 'automation'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < 500) {
            setActiveTab(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 140;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20">
      
      {/* 1. HERO SECTION EPURE */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Une expertise hybride unique combinant l'excellence opérationnelle et la puissance des solutions Microsoft.
          </p>
        </div>
      </section>

      {/* 2. NAVIGATION INTERNE (Sticky) */}
      <div className={`sticky top-20 z-40 bg-white/95 backdrop-blur border-b border-gray-100 transition-all duration-300 ${isSticky ? 'shadow-md py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex justify-center min-w-max gap-4">
            <button 
              onClick={() => scrollToSection('lean')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 border ${
                activeTab === 'lean' 
                  ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-200' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-500 hover:text-emerald-600'
              }`}
            >
              <RefreshCw size={18} />
              Amélioration Continue
            </button>
            <button 
              onClick={() => scrollToSection('bi')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 border ${
                activeTab === 'bi' 
                  ? 'bg-amber-500 border-amber-500 text-white shadow-lg shadow-amber-200' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-600'
              }`}
            >
              <BarChart2 size={18} />
              BI & Dashboards
            </button>
            <button 
              onClick={() => scrollToSection('automation')}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all flex items-center gap-2 border ${
                activeTab === 'automation' 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-indigo-500 hover:text-indigo-600'
              }`}
            >
              <Cpu size={18} />
              Automatisation
            </button>
          </div>
        </div>
      </div>

      {/* 3. SERVICE 1: LEAN (Thème Vert/Emerald) */}
      <section id="lean" className="py-24 border-b border-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 order-2 lg:order-1">
               <div className="inline-flex items-center gap-2 text-emerald-700 font-bold mb-4 bg-emerald-50 px-4 py-2 rounded-full text-sm uppercase tracking-wide">
                 <RefreshCw size={18} />
                 <span>Process & Performance</span>
               </div>
               
               <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                 Amélioration Continue & <span className="text-emerald-600">Lean Manufacturing</span>
               </h2>
               
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 L'optimisation ne s'improvise pas. J'interviens au cœur de vos opérations pour identifier les gaspillages (Muda), fluidifier les flux et instaurer une culture d'excellence durable.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                 {[
                   'Diagnostic VSM (Value Stream Mapping)', 
                   'Chantiers 5S & Standardisation', 
                   'Animation Kaizen & Résolution de problèmes', 
                   'Pilotage de la Performance (TRS / OEE)', 
                   'Management Visuel', 
                   'Réduction des Stocks & En-cours'
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="mt-1 bg-emerald-100 p-1 rounded-full text-emerald-600">
                        <CheckCircle size={14} />
                     </div>
                     <span className="font-medium text-gray-700">{item}</span>
                   </div>
                 ))}
               </div>

               <div className="border-t border-gray-100 pt-8">
                 <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Méthodologies</h4>
                 <div className="flex flex-wrap gap-2">
                   {['Lean Manufacturing', 'Six Sigma', 'TPM', 'SMED', 'Poka-Yoke'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white text-emerald-700 text-sm font-medium rounded-md border border-emerald-100 shadow-sm">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-600/10 transform translate-x-3 translate-y-3 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                  alt="Consultant Lean en usine" 
                  loading="lazy"
                  width="800"
                  height="600"
                  className="rounded-2xl shadow-xl w-full object-cover relative z-10 border border-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE 2: BI (Thème Orange/Amber) */}
      <section id="bi" className="py-24 bg-gray-50/50 border-b border-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute inset-0 bg-amber-500/10 transform -translate-x-3 translate-y-3 rounded-2xl transition-transform group-hover:-translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                  alt="Tableau de bord Power BI" 
                  loading="lazy"
                  width="800"
                  height="600"
                  className="rounded-2xl shadow-xl w-full object-cover relative z-10 border border-gray-100"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 text-amber-700 font-bold mb-4 bg-amber-50 px-4 py-2 rounded-full text-sm uppercase tracking-wide">
                 <BarChart2 size={18} />
                 <span>Data Intelligence</span>
               </div>
               
               <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                 Dashboards & <span className="text-amber-500">Business Intelligence</span>
               </h2>
               
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Ne subissez plus vos données, maîtrisez-les. Je conçois des tableaux de bord interactifs (Power BI) qui transforment vos fichiers Excel complexes et extractions ERP en outils de pilotage visuels et actionnables.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                 {[
                   'Cockpits de Production Temps Réel', 
                   'Dashboards Qualité & Pareto', 
                   'Reporting Automatisé', 
                   'Visualisations Avancées (DENEB)', 
                   'Connexion ERP/SAP & Bases de données', 
                   'Documentation & Transfert de compétences'
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="mt-1 bg-amber-100 p-1 rounded-full text-amber-600">
                        <CheckCircle size={14} />
                     </div>
                     <span className="font-medium text-gray-700">{item}</span>
                   </div>
                 ))}
               </div>

               <div className="border-t border-gray-200 pt-8">
                 <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Technologies</h4>
                 <div className="flex flex-wrap gap-2">
                   {['Microsoft Power BI', 'DAX', 'Power Query', 'SQL', 'Python', 'Vega-Lite'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white text-amber-700 text-sm font-medium rounded-md border border-amber-100 shadow-sm">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SERVICE 3: AUTOMATION (Thème Violet/Indigo) */}
      <section id="automation" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 order-2 lg:order-1">
               <div className="inline-flex items-center gap-2 text-indigo-700 font-bold mb-4 bg-indigo-50 px-4 py-2 rounded-full text-sm uppercase tracking-wide">
                 <Cpu size={18} />
                 <span>Digitalisation</span>
               </div>
               
               <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
                 Automatisation & <span className="text-indigo-600">Power Platform</span>
               </h2>
               
               <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Remplacez vos formulaires papier et tâches manuelles répétitives par des applications modernes et des flux automatisés. Gagnez en fiabilité et libérez du temps pour ce qui compte vraiment.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                 {[
                   'Applications Métier (Power Apps)', 
                   'Workflows d\'Approbation (Power Automate)', 
                   'Automatisation de Saisie SAP/Excel', 
                   'Systèmes d\'Alertes Automatiques', 
                   'Digitalisation Zéro Papier', 
                   'Intégration Microsoft 365 / Teams'
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                        <CheckCircle size={14} />
                     </div>
                     <span className="font-medium text-gray-700">{item}</span>
                   </div>
                 ))}
               </div>

               <div className="border-t border-gray-100 pt-8">
                 <h4 className="text-sm font-bold text-gray-400 uppercase mb-4">Stack Technique</h4>
                 <div className="flex flex-wrap gap-2">
                   {['Power Apps', 'Power Automate', 'SharePoint', 'VBA / Macros', 'SAP Scripting', 'RPA'].map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white text-indigo-700 text-sm font-medium rounded-md border border-indigo-100 shadow-sm">
                       {tag}
                     </span>
                   ))}
                 </div>
               </div>
            </div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute inset-0 bg-indigo-600/10 transform translate-x-3 translate-y-3 rounded-2xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop&fm=webp" 
                  alt="Application Power Apps sur tablette" 
                  loading="lazy"
                  width="800"
                  height="600"
                  className="rounded-2xl shadow-xl w-full object-cover relative z-10 border border-gray-100"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
