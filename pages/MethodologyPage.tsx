
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, FolderKanban, ShieldCheck, Lock, 
  FileCheck, Target, BarChart3, Clock, 
  Search, Layout, CheckCircle2 
} from 'lucide-react';

const MethodologyPage: React.FC = () => {

  // --- Animation Variants ---
  // CORRECTION TECHNIQUE "SAUT" / "JITTER" :
  // Le saut est causé par le navigateur qui supprime la couche GPU quand l'animation
  // atteint une valeur "entière" ou "par défaut" (comme x:0 ou scale:1).
  // La solution est de laisser une valeur infinitésimale (0.01) pour forcer le navigateur
  // à maintenir le rendu en mode "Composite Layer".
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number = 0) => ({ 
      opacity: 1, 
      y: 0.01, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut", 
        delay: customDelay 
      } 
    })
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0.01,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0.01,
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (customDelay: number = 0) => ({ 
      opacity: 1, 
      scale: 1,
      // AJOUT CRUCIAL ICI : x: 0.01
      // Même si on anime l'échelle, on ajoute un micro-déplacement invisible.
      // Cela empêche le navigateur de "snapper" l'image sur la grille de pixels
      // quand scale atteint 1, supprimant ainsi le saut visuel.
      x: 0.01,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: customDelay 
      } 
    })
  };

  return (
    <div className="pt-20 min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 lg:py-28 relative overflow-hidden">
        {/* Abstract Background with Image Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
                alt="Planning background"
                className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              Une démarche structurée,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">adaptée à vos enjeux</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              Je ne vends pas simplement du code, mais une <strong className="text-white font-semibold">garantie de résultat</strong>. Mon approche hybride (Lean + Dev) sécurise votre investissement, du diagnostic rapide au projet d'envergure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. LES DEUX APPROCHES : ONESHOT vs PROJET */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">Quel est votre choix ?</h2>
            <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">Deux formats d'intervention pensés pour s'adapter à votre maturité et à l'urgence de votre besoin.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Mode OneShot */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 flex flex-col"
              style={{ backfaceVisibility: 'hidden' }} // Extra safety
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-amber-600/20 group-hover:bg-amber-600/10 transition-colors z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=1000&auto=format&fit=crop" 
                    alt="Focus target" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-6 z-20">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm uppercase tracking-wider flex items-center gap-2">
                        <Zap size={14} /> One Shot
                      </span>
                  </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                   Mission Commando
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Une intervention ciblée sur un objectif unique défini à l'avance. Idéal pour débloquer une situation, auditer un processus ou livrer un outil spécifique rapidement.
                </p>
                
                <div className="space-y-3 mb-8">
                   <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="bg-amber-200 p-1.5 rounded-full text-amber-700"><Target size={16}/></div>
                      <span className="text-sm font-medium text-gray-800">Objectif unique & Forfaitaire</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl border border-amber-100">
                      <div className="bg-amber-200 p-1.5 rounded-full text-amber-700"><Clock size={16}/></div>
                      <span className="text-sm font-medium text-gray-800">Livraison Rapide (1-5 jours)</span>
                   </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Cas d'usage</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Audit VSM', 'Debug VBA/PowerApps', 'Dashboard BI Spécifique', 'Formation'].map((tag, i) => (
                            <span key={i} className="text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1.5 rounded-full hover:bg-amber-100 transition-colors">
                              #{tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>

            {/* Mode Projet */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              custom={0.15}
              className="group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/10 transition-colors z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop" 
                    alt="Project planning" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                   <div className="absolute bottom-4 left-6 z-20">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-bold shadow-sm uppercase tracking-wider flex items-center gap-2">
                        <FolderKanban size={14} /> Mode Projet
                      </span>
                  </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                   Transformation & Structure
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Une approche globale incluant l'analyse, la conception et le déploiement. Pour les besoins complexes nécessitant une architecture robuste et un accompagnement au changement.
                </p>
                
                <div className="space-y-3 mb-8">
                   <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="bg-blue-200 p-1.5 rounded-full text-blue-700"><Layout size={16}/></div>
                      <span className="text-sm font-medium text-gray-800">Cycle en V / Agile</span>
                   </div>
                   <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                      <div className="bg-blue-200 p-1.5 rounded-full text-blue-700"><BarChart3 size={16}/></div>
                      <span className="text-sm font-medium text-gray-800">Suivi ROI & Jalons</span>
                   </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Cas d'usage</h4>
                    <div className="flex flex-wrap gap-2">
                        {['Digitalisation Atelier', 'App Métier Complexe', 'Intranet SharePoint', 'Refonte Process'].map((tag, i) => (
                            <span key={i} className="text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors">
                              #{tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. CYCLE DE VIE (Timeline visuelle avec Pattern Grid) */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative Grid BG */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">Cycle de vie Projet</h2>
            <p className="text-gray-500 text-lg">Une méthodologie rigoureuse pour sécuriser chaque étape.</p>
          </motion.div>

          <div className="space-y-8 relative max-w-5xl mx-auto">
            {/* Ligne connectrice centrale (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-slate-800 transform -translate-x-1/2 rounded-full opacity-30"></div>

            {/* ÉTAPE 1: ANALYSE */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-[45%] w-full mb-6 md:mb-0">
                <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.3 }}
                   variants={fadeInLeft}
                   className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden hover:border-emerald-500/50 transition-colors"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-5"><Search size={80} /></div>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shadow-sm">1</div>
                      <h3 className="text-xl font-bold text-gray-900">Analyse & Cadrage Lean</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed">
                     Mon expertise Lean en action. Analyse des flux (VSM) pour éliminer les gaspillages <strong>avant</strong> de digitaliser. Définition du ROI cible et du cahier des charges fonctionnel.
                   </p>
                </motion.div>
              </div>
              <div className="md:w-[45%] w-full flex justify-start md:justify-start">
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleIn}
                    custom={0.2}
                    className="w-full h-48 md:h-40 rounded-2xl overflow-hidden shadow-md opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                  >
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" alt="Meeting" className="w-full h-full object-cover" />
                  </motion.div>
              </div>
            </div>

            {/* ÉTAPE 2: CONCEPTION */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
              <div className="md:w-[45%] w-full mb-6 md:mb-0">
                 <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.3 }}
                   variants={fadeInRight}
                   className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden hover:border-blue-500/50 transition-colors"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-5"><Layout size={80} /></div>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shadow-sm">2</div>
                      <h3 className="text-xl font-bold text-gray-900">Conception & UX</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed">
                     Validation de l'architecture Data. Maquettage des écrans (UI) pour valider l'ergonomie avec les futurs utilisateurs. Pas d'effet tunnel : vous savez ce que vous achetez.
                   </p>
                </motion.div>
              </div>
              <div className="md:w-[45%] w-full flex justify-end md:justify-end">
                   <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.3 }}
                     variants={scaleIn}
                     custom={0.2}
                     className="w-full h-48 md:h-40 rounded-2xl overflow-hidden shadow-md opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                   >
                     <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop" alt="Wireframing" className="w-full h-full object-cover" />
                  </motion.div>
              </div>
            </div>

             {/* ÉTAPE 3: DÉVELOPPEMENT */}
             <div className="relative flex flex-col md:flex-row items-center justify-between group">
              <div className="md:w-[45%] w-full mb-6 md:mb-0">
                <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.3 }}
                   variants={fadeInLeft}
                   className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden hover:border-indigo-500/50 transition-colors"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-5"><Zap size={80} /></div>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shadow-sm">3</div>
                      <h3 className="text-xl font-bold text-gray-900">Dév. Itératif</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed">
                     Développement par sprints courts. Points de validation réguliers. Tests unitaires et recettes utilisateurs intégrés au fil de l'eau pour garantir la qualité du code.
                   </p>
                </motion.div>
              </div>
              <div className="md:w-[45%] w-full flex justify-start md:justify-start">
                   <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.3 }}
                     variants={scaleIn}
                     custom={0.2}
                     className="w-full h-48 md:h-40 rounded-2xl overflow-hidden shadow-md opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                   >
                     <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Coding" className="w-full h-full object-cover" />
                  </motion.div>
              </div>
            </div>

            {/* ÉTAPE 4: DÉPLOIEMENT */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
              <div className="md:w-[45%] w-full mb-6 md:mb-0">
                 <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.3 }}
                   variants={fadeInRight}
                   className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden hover:border-slate-800/50 transition-colors"
                >
                   <div className="absolute top-0 right-0 p-4 opacity-5"><CheckCircle2 size={80} /></div>
                   <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-bold shadow-sm">4</div>
                      <h3 className="text-xl font-bold text-gray-900">Déploiement</h3>
                   </div>
                   <p className="text-gray-600 leading-relaxed">
                     Mise en production sécurisée. Formation des équipes et remise de la documentation technique. Transfert de compétences pour une autonomie totale.
                   </p>
                </motion.div>
              </div>
              <div className="md:w-[45%] w-full flex justify-end md:justify-end">
                   <motion.div 
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.3 }}
                     variants={scaleIn}
                     custom={0.2}
                     className="w-full h-48 md:h-40 rounded-2xl overflow-hidden shadow-md opacity-90 grayscale hover:grayscale-0 transition-all duration-500"
                   >
                     <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop" alt="Success" className="w-full h-full object-cover" />
                  </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENTS (Section Impactante) */}
      <section className="py-24 bg-[#0B0F19] text-white relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               variants={fadeInUp}
               className="text-center mb-20"
             >
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Engagements & Garanties</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  La confiance se construit sur des preuves. Voici les piliers de ma relation client.
                </p>
             </motion.div>
             
             <div className="grid md:grid-cols-3 gap-8">
               
               {/* Carte 1 - Garantie */}
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }}
                 variants={fadeInUp}
                 custom={0}
                 className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden"
                 style={{ backfaceVisibility: 'hidden' }}
               >
                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <ShieldCheck size={120} />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-shadow">
                        <ShieldCheck size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Garantie 3 Mois</h3>
                    <p className="text-gray-400 leading-relaxed">
                       Sérénité totale post-livraison. Je m'engage à corriger gratuitement et rapidement tout bug ou dysfonctionnement pendant les 3 mois suivant la mise en production.
                    </p>
                 </div>
               </motion.div>

               {/* Carte 2 - Sécurité */}
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }}
                 variants={fadeInUp}
                 custom={0.15}
                 className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                 style={{ backfaceVisibility: 'hidden' }}
               >
                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <Lock size={120} />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-shadow">
                        <Lock size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Sécurité & Data</h3>
                    <p className="text-gray-400 leading-relaxed">
                       Vos données sont sacrées et ne sortent jamais de votre Tenant Microsoft. Je respecte scrupuleusement vos règles RBAC et standards de confidentialité (NDA).
                    </p>
                 </div>
               </motion.div>

               {/* Carte 3 - Propriété */}
               <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }}
                 variants={fadeInUp}
                 custom={0.3}
                 className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700 p-8 rounded-2xl hover:bg-gray-800 hover:border-purple-500/50 transition-all duration-500 overflow-hidden"
                 style={{ backfaceVisibility: 'hidden' }}
               >
                 <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                    <FileCheck size={120} />
                 </div>
                 <div className="relative z-10">
                    <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-shadow">
                        <FileCheck size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Code Propriétaire</h3>
                    <p className="text-gray-400 leading-relaxed">
                       Transparence totale. Pas de "Black Box" : vous êtes propriétaire à 100% du code source, des flux et des applications. Tout est documenté pour votre DSI.
                    </p>
                 </div>
               </motion.div>
             </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default MethodologyPage;
