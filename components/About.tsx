
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, GraduationCap, Briefcase, 
  Users, Factory, Zap, Database, Linkedin, 
  CheckCircle2, ArrowRight,
  Cpu, PenTool, Rocket, Microscope, Laptop
} from 'lucide-react';
import SectionHeading from './SectionHeading';

interface AboutProps {
  compact?: boolean;
}

const About: React.FC<AboutProps> = ({ compact = false }) => {
  
  // Helper pour convertir la classe bg- en text- pour les titres (Vers des teintes plus vives)
  const getTextColor = (bgClass: string) => {
    if (bgClass.includes('emerald')) return 'text-emerald-600';
    if (bgClass.includes('blue')) return 'text-blue-600';
    if (bgClass.includes('cyan')) return 'text-cyan-600';
    if (bgClass.includes('indigo')) return 'text-indigo-600';
    if (bgClass.includes('purple')) return 'text-purple-600';
    return 'text-gray-900';
  };

  return (
    <div className="bg-white overflow-hidden font-sans text-slate-900">
      
      {/* 1. HERO SECTION : Personal Branding Premium */}
      <section className={`relative bg-[#0f172a] text-white pt-24 ${compact ? 'pb-24' : 'pb-32'} overflow-hidden`}>
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
            
            {/* Ambient Glows */}
            <div className="absolute right-0 top-20 bg-blue-600/20 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute left-0 bottom-0 bg-emerald-600/10 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Photo Card - Glassmorphism Style */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-5/12 relative max-w-md lg:max-w-none mx-auto lg:order-2"
            >
              <div className="relative z-10 rounded-3xl p-3 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm shadow-2xl">
                 <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" 
                      alt="François Mastroeni" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Badge Expert */}
                    <div className="absolute top-4 right-4 z-20">
                         <div className="flex items-center gap-2 bg-white/90 backdrop-blur text-slate-900 px-4 py-1.5 rounded-full shadow-lg border border-white/50">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-wider">Disponible</span>
                         </div>
                    </div>

                    {/* Name Tag Overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                        <h2 className="text-white font-heading font-bold text-2xl leading-none">François Mastroeni</h2>
                        <div className="flex items-center gap-2 text-gray-300 text-sm mt-2">
                            <MapPin size={14} className="text-emerald-400" />
                            <span>Toulouse & France Entière</span>
                        </div>
                    </div>
                 </div>
              </div>
              
              {/* Decorative behind elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-stripes-white opacity-10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border-2 border-white/5 rounded-full"></div>
            </motion.div>

            {/* Main Pitch */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-7/12 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
                 <Briefcase size={14} />
                 <span>Consultant Indépendant & Expert Microsoft</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-[1.1]">
                L'ingénierie terrain <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                   au service du digital.
                </span>
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                Je ne suis pas un développeur qui essaie de comprendre l'usine. <br/>
                Je suis un <strong>Ingénieur Amélioration Continue</strong> qui maîtrise le code pour résoudre de vrais problèmes industriels.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3.5 bg-white text-slate-900 font-bold rounded-xl transition-all hover:bg-gray-100 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Me contacter
                </a>
                <a 
                  href="https://fr.linkedin.com/in/fran%C3%A7ois-mastroeni-153781171" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-8 py-3.5 bg-slate-800 text-white font-medium rounded-xl transition-all hover:bg-slate-700 border border-slate-700 flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {!compact && (
        <>
          {/* 2. PHILOSOPHIE */}
          <section className="relative -mt-16 z-20 px-6">
            <div className="container mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Factory, 
                    title: "Pragmatique", 
                    subtitle: "L'ADN Industriel",
                    text: "Je connais le bruit des machines et la réalité du terrain. Pas de théorie fumeuse, je conçois des outils qui survivent à l'épreuve du 3x8.",
                    border: "border-blue-500"
                  },
                  { 
                    icon: Database, 
                    title: "Analytique", 
                    subtitle: "La Data comme Vérité",
                    text: "Une décision sans data n'est qu'une opinion. Je structure vos flux d'information pour faire émerger la vérité de votre performance.",
                    border: "border-emerald-500"
                  },
                  { 
                    icon: Users, 
                    title: "Humain", 
                    subtitle: "L'Adhésion avant tout",
                    text: "Le meilleur outil du monde ne sert à rien si personne ne l'utilise. Je co-construis avec vos équipes pour garantir l'adoption immédiate.",
                    border: "border-orange-500"
                  }
                ].map((card, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border-t-4 border-gray-100 hover:-translate-y-2 transition-transform duration-300 group"
                    style={{ borderTopColor: card.border === 'border-blue-500' ? '#3b82f6' : card.border === 'border-emerald-500' ? '#10b981' : '#f97316' }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gray-50 text-gray-900 group-hover:bg-gray-100 transition-colors`}>
                           <card.icon size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 leading-none">{card.title}</h3>
                            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{card.subtitle}</span>
                        </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. MA SIGNATURE UNIQUE (Refined Venn Diagram) */}
          <section className="py-24 bg-white overflow-hidden relative">
            <div className="container mx-auto px-6">
              <SectionHeading 
                title="Ma Signature Unique" 
                subtitle="La fusion de deux expertises souvent séparées."
              />

              {/* Flexbox Container for Centering */}
              <div className="mt-12 flex justify-center items-center w-full">
                 <div className="relative flex justify-center items-center h-[400px] md:h-[450px]">
                     
                     {/* LEFT Circle: OPERATIONAL */}
                     {/* Padding Right added to push text away from overlap */}
                     <motion.div 
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-emerald-50/95 to-emerald-100/50 border border-emerald-100/50 shadow-[0_10px_40px_rgba(16,185,129,0.05)] flex flex-col items-center justify-center text-center relative z-10 -mr-16 md:-mr-24 pr-16 md:pr-28"
                     >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-emerald-100/80 text-emerald-600 flex items-center justify-center mb-3 backdrop-blur-sm">
                           <Factory size={28} />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-emerald-900 leading-tight">Monde<br/>Opérationnel</h3>
                        <div className="w-10 h-1 bg-emerald-200 rounded-full my-3"></div>
                        <p className="text-emerald-800/70 font-medium text-xs md:text-sm leading-snug max-w-[140px] md:max-w-[180px]">
                           Lean, 5S, VSM,<br/>Terrain, Qualité
                        </p>
                     </motion.div>

                     {/* RIGHT Circle: DIGITAL */}
                     {/* Padding Left added to push text away from overlap */}
                     <motion.div 
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-bl from-blue-50/95 to-blue-100/50 border border-blue-100/50 shadow-[0_10px_40px_rgba(59,130,246,0.05)] flex flex-col items-center justify-center text-center relative z-10 -ml-16 md:-ml-24 pl-16 md:pl-28"
                     >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center mb-3 backdrop-blur-sm">
                           <Laptop size={28} />
                        </div>
                        <h3 className="text-lg md:text-2xl font-bold text-blue-900 leading-tight">Monde<br/>Digital</h3>
                        <div className="w-10 h-1 bg-blue-200 rounded-full my-3"></div>
                        <p className="text-blue-800/70 font-medium text-xs md:text-sm leading-snug max-w-[140px] md:max-w-[180px]">
                           Power Platform,<br/>Data, Code
                        </p>
                     </motion.div>

                     {/* CENTER Badge: The Fusion */}
                     <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 15 }}
                        className="absolute z-30 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                     >
                        {/* Animated Glow Pulse */}
                        <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        
                        {/* The Main Badge */}
                        <div className="relative w-52 h-52 md:w-64 md:h-64 bg-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-secondary/10 flex flex-col items-center justify-center text-center p-2 backdrop-blur-sm bg-white/95">
                            
                            {/* Icon Centered at Top Edge */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-orange-500 text-white p-3 rounded-full shadow-lg">
                               <Zap size={24} fill="currentColor" />
                            </div>

                            {/* Centered Content */}
                            <div className="flex flex-col items-center justify-center h-full w-full px-4 pt-3">
                                <h4 className="font-heading font-black text-sm md:text-base text-gray-900 leading-tight uppercase tracking-wide">
                                  Ma Valeur<br/>Ajoutée
                                </h4>
                                
                                <div className="w-10 h-1 bg-gray-100 mx-auto my-3 rounded-full"></div>
                                
                                <p className="text-[10px] md:text-xs text-gray-600 font-medium leading-tight max-w-[150px]">
                                   Traduire le besoin métier en solution technique performante.
                                </p>
                            </div>
                        </div>
                     </motion.div>

                 </div>
              </div>
            </div>
          </section>

          {/* 4. TIMELINE PARCOURS : Titles Colored, No Dates */}
          <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
              <SectionHeading 
                title="Parcours Professionnel" 
                subtitle="Une expérience forgée au sein de leaders industriels exigeants."
              />

              <div className="relative max-w-6xl mx-auto mt-16">
                 
                 {/* CENTRAL LINE */}
                 <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 md:transform md:-translate-x-1/2"></div>

                 <div className="space-y-12">
                   {[
                     {
                       company: "Corteva Agriscience",
                       role: "Improvement Engineer",
                       desc: "Pilotage de la performance site. Déploiement de solutions Power Platform à l'échelle du site pour digitaliser les processus qualité et production.",
                       color: "bg-emerald-500",
                       textColor: "text-emerald-600",
                       tags: ["Power Platform", "Lean", "Agro"]
                     },
                     {
                       company: "Sanofi",
                       role: "Support Production",
                       desc: "Support opérationnel et résolution de problèmes en production pharmaceutique. Premiers pas dans l'automatisation de reporting via Excel/VBA.",
                       color: "bg-blue-500",
                       textColor: "text-blue-600",
                       tags: ["Pharma", "VBA", "Production"]
                     },
                     {
                       company: "Aptar Pharma",
                       role: "Ingénieur Amélioration Continue",
                       desc: "Optimisation des flux de production & Conformité GMP. Conduite de chantiers Kaizen et SMED en salle blanche.",
                       color: "bg-cyan-500",
                       textColor: "text-cyan-600",
                       tags: ["Pharma", "Qualité", "VSM"]
                     },
                     {
                       company: "ACTM",
                       role: "Production Industrielle & ISO 9001",
                       desc: "Mise en place et structuration du système de management de la qualité ISO 9001. Optimisation de l'organisation de production.",
                       color: "bg-indigo-500",
                       textColor: "text-indigo-600",
                       tags: ["ISO 9001", "Qualité", "Process"]
                     },
                     {
                       company: "Alva",
                       role: "Marketing & Crowdfunding",
                       desc: "Lancement de produit et gestion de campagne de financement participatif. Mise en place de la stratégie marketing digitale.",
                       color: "bg-purple-500",
                       textColor: "text-purple-600",
                       tags: ["Marketing", "Digital", "Gestion Projet"]
                     }
                   ].map((job, index) => {
                     const isLeft = index % 2 === 0; // Even items on Left (Desktop)

                     return (
                       <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="relative flex flex-col md:flex-row items-center justify-between w-full"
                       >
                          
                          {/* LEFT SIDE (Content if Even, Spacer if Odd) */}
                          <div className="w-full md:w-[45%] mb-4 md:mb-0 order-2 md:order-1 flex md:justify-end pl-12 md:pl-0">
                             {isLeft ? (
                               <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative text-left md:text-right w-full">
                                     <h3 className={`text-xl font-bold ${job.textColor} mb-1`}>{job.company}</h3>
                                     <div className="text-sm font-medium mb-3 text-gray-500">{job.role}</div>
                                     <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.desc}</p>
                                     <div className="flex flex-wrap gap-2 md:justify-end">
                                        {job.tags.map(tag => (
                                           <span key={tag} className="text-[10px] font-semibold bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100">#{tag}</span>
                                        ))}
                                     </div>
                                     {/* Arrow for Desktop */}
                                     <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white border-t border-r border-gray-100 rotate-45 transform -translate-y-1/2"></div>
                                      {/* Arrow for Mobile */}
                                     <div className="md:hidden absolute top-8 -left-3 w-6 h-6 bg-white border-b border-l border-gray-100 rotate-45"></div>
                               </div>
                             ) : (
                               <div className="hidden md:block"></div> // Spacer
                             )}
                          </div>

                          {/* CENTER DOT */}
                          <div className="absolute left-[11px] md:left-1/2 transform md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-20 order-1 md:order-2" style={{ backgroundColor: job.color === 'bg-emerald-500' ? '#10b981' : job.color === 'bg-blue-500' ? '#3b82f6' : job.color === 'bg-cyan-500' ? '#06b6d4' : job.color === 'bg-indigo-500' ? '#6366f1' : '#a855f7' }}></div>

                          {/* RIGHT SIDE (Content if Odd, Spacer if Even) */}
                          <div className="w-full md:w-[45%] order-3 flex justify-start pl-12 md:pl-0">
                              {!isLeft ? (
                                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative text-left w-full">
                                     <h3 className={`text-xl font-bold ${job.textColor} mb-1`}>{job.company}</h3>
                                     <div className="text-sm font-medium mb-3 text-gray-500">{job.role}</div>
                                     <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.desc}</p>
                                     <div className="flex flex-wrap gap-2">
                                        {job.tags.map(tag => (
                                           <span key={tag} className="text-[10px] font-semibold bg-gray-50 text-gray-500 px-2 py-1 rounded border border-gray-100">#{tag}</span>
                                        ))}
                                     </div>
                                      {/* Arrow for Desktop */}
                                     <div className="hidden md:block absolute top-1/2 -left-3 w-6 h-6 bg-white border-b border-l border-gray-100 rotate-45 transform -translate-y-1/2"></div>
                                     {/* Arrow for Mobile */}
                                     <div className="md:hidden absolute top-8 -left-3 w-6 h-6 bg-white border-b border-l border-gray-100 rotate-45"></div>
                                 </div>
                              ) : (
                                <div className="hidden md:block"></div> // Spacer
                              )}
                          </div>

                       </motion.div>
                     );
                   })}
                 </div>
              </div>
            </div>
          </section>

          {/* 5. BENTO GRID : FORMATION */}
          <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
              <div className="text-center mb-16">
                 <h2 className="text-3xl font-heading font-bold mb-4">Formation & Diplômes</h2>
                 <p className="text-gray-500">Un socle académique solide renforcé par la pratique.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[auto]">
                  
                  {/* Card 1: Ingénieur Production */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 bg-[#0F172A] text-white rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group shadow-xl min-h-[220px]"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <GraduationCap size={120} />
                    </div>
                    <div className="relative z-10">
                        <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
                            <Factory size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Ingénieur Production Industrielle</h3>
                        <p className="text-slate-400 mt-2 max-w-md">
                           Formation d'excellence en Génie Industriel. Maîtrise des systèmes de production, de la mécanique et de l'organisation industrielle.
                        </p>
                    </div>
                  </motion.div>

                  {/* Card 2: Supply Chain */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-blue-50 border border-blue-100 text-slate-900 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                  >
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm mb-4">
                        <Rocket size={24} />
                     </div>
                     <h3 className="text-xl font-bold leading-tight">Management Supply Chain</h3>
                     <p className="text-slate-600 text-sm mt-2">
                        Vision globale de la chaîne logistique, des approvisionnements à la distribution.
                     </p>
                  </motion.div>

                  {/* Card 3: Lean & Qualité */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="bg-emerald-50 border border-emerald-100 text-slate-900 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                  >
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm mb-4">
                        <Microscope size={24} />
                     </div>
                     <h3 className="text-xl font-bold leading-tight">Lean Management & Qualité</h3>
                     <p className="text-slate-600 text-sm mt-2">
                        Spécialisation en amélioration continue, Six Sigma et systèmes de management de la qualité.
                     </p>
                  </motion.div>

                  {/* Card 4: Power BI Editeur */}
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="md:col-span-2 bg-[#FFD700] text-slate-900 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden shadow-lg border border-yellow-400"
                  >
                     <div className="absolute -right-10 -bottom-10 opacity-20">
                        <PenTool size={180} />
                     </div>
                     <div className="relative z-10 flex items-center gap-6">
                        <div className="bg-white/30 p-4 rounded-2xl">
                           <PenTool size={32} className="text-slate-900" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold leading-tight">Power BI Éditeur</h3>
                            <p className="text-slate-800/80 font-medium text-sm mt-1">Création de Visuels Avancés & UX Design</p>
                            <p className="text-slate-900 text-sm mt-2 max-w-lg">
                               Je ne me contente pas des standards. Je crée des visuels sur-mesure pour raconter l'histoire de vos données avec clarté et impact.
                            </p>
                        </div>
                     </div>
                  </motion.div>

              </div>
            </div>
          </section>

          {/* 6. CTA FINAL */}
          <section className="bg-slate-900 text-white py-20 border-t border-slate-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-heading font-bold mb-6">Prêt à collaborer ?</h2>
                <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                   Que ce soit pour une mission ponctuelle ou un accompagnement long terme, je m'adapte à votre contexte.
                </p>
                <a href="#contact" className="inline-flex items-center gap-3 bg-primary hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
                    Réserver un appel découverte <ArrowRight size={20} />
                </a>
            </div>
          </section>
        </>
      )}

    </div>
  );
};

export default About;
