
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  BarChart2, Zap, Database, CheckCircle, 
  RefreshCw, Search, Layout, Smartphone, 
  Workflow, FileSpreadsheet, Code, 
  Layers, BrainCircuit, Share2, Shield, 
  Globe, Table, ArrowRight, User, Mail,
  TrendingUp, Settings, Activity, Clock, Lock
} from 'lucide-react';

const m365Apps = [
  { name: "Excel", icon: "https://img.icons8.com/color/96/000000/microsoft-excel-2019--v1.png" },
  { name: "Word", icon: "https://img.icons8.com/color/96/000000/microsoft-word-2019--v2.png" },
  { name: "PowerPoint", icon: "https://img.icons8.com/color/96/000000/microsoft-powerpoint-2019--v1.png" },
  { name: "Outlook", icon: "https://img.icons8.com/color/96/000000/microsoft-outlook-2019--v1.png" },
  { name: "Teams", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Microsoft_Teams_af_icon.svg/144px-Microsoft_Teams_af_icon.svg.png" },
  { name: "SharePoint", icon: "https://img.icons8.com/color/96/000000/microsoft-sharepoint-2019.png" },
  { name: "OneDrive", icon: "https://img.icons8.com/color/96/000000/microsoft-onedrive-2019.png" },
  { name: "OneNote", icon: "https://img.icons8.com/color/96/000000/microsoft-onenote-2019.png" },
  { name: "Power BI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "Power Apps", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Microsoft_Power_Apps_2020.svg/144px-Microsoft_Power_Apps_2020.svg.png" },
  { name: "Power Automate", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_Power_Automate.svg/144px-Microsoft_Power_Automate.svg.png" },
  { name: "Planner", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Microsoft_Planner_2019.svg/144px-Microsoft_Planner_2019.svg.png" },
  { name: "Forms", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Microsoft_Forms_2019.svg/144px-Microsoft_Forms_2019.svg.png" },
  { name: "Stream", icon: "https://img.icons8.com/color/96/000000/microsoft-stream-2019.png" },
  { name: "Visio", icon: "https://img.icons8.com/color/96/000000/microsoft-visio-2019.png" },
];

const ExpertisePage: React.FC = () => {
  
  // Animation Variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] font-sans text-gray-900 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* 1. HERO SECTION (Refined Design) */}
      <section className="relative pt-40 pb-28 bg-[#0B0F19] text-white overflow-hidden">
        {/* Background Base */}
        <div className="absolute inset-0 bg-[#0B0F19]"></div>
        
        {/* Tech Grid Pattern with Radial Mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight flex flex-col items-center justify-center gap-2 leading-none">
              <span className="text-white drop-shadow-sm">Expertise</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pb-2">
                 & Savoir-Faire
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light mt-8 border-t border-white/5 pt-8">
              Je conçois et déploie les architectures digitales qui transforment vos processus industriels en avantages compétitifs durables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PERFORMANCE OPÉRATIONNELLE (Distinct Background) */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            {/* "Fondations" badge removed */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Performance Opérationnelle
            </h2>
            <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Le digital n'est qu'un amplificateur. Avant d'automatiser, nous simplifions et standardisons vos processus physiques.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Activity, 
                color: "text-emerald-400", 
                bg: "bg-emerald-400/10",
                border: "hover:border-emerald-500/50",
                title: "Culture Kaizen", 
                desc: "Instauration d'une dynamique d'amélioration continue. Implication des équipes terrain pour chasser les gaspillages (Muda)." 
              },
              { 
                icon: Search, 
                color: "text-blue-400", 
                bg: "bg-blue-400/10",
                border: "hover:border-blue-500/50",
                title: "Analyse VSM", 
                desc: "Cartographie des flux (Value Stream Mapping) pour identifier les goulots d'étranglement et optimiser le Lead Time." 
              },
              { 
                icon: Layout, 
                color: "text-indigo-400", 
                bg: "bg-indigo-400/10",
                border: "hover:border-indigo-500/50",
                title: "5S & Standards", 
                desc: "Organisation rigoureuse de l'espace de travail. Création de standards visuels pour garantir la qualité et la sécurité." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-slate-800 rounded-2xl p-8 border border-white/5 shadow-lg ${item.border} transition-all duration-300 group hover:-translate-y-1 hover:bg-slate-750`}
              >
                <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 ${item.color} ring-1 ring-inset ring-white/5`}>
                  <item.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MICROSOFT POWER PLATFORM (Dynamic Zig-Zag Layout) */}
      <section className="py-24 bg-[#0B0F19] text-white overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          
          <div className="text-center mb-24">
             <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
               Microsoft Power Platform
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Votre suite d'outils interconnectés pour une transformation digitale rapide.
             </p>
          </div>

          <div className="space-y-32">
            
            {/* --- POWER BI: Left Text, Right Visual --- */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className="lg:w-1/2 text-left"
               >
                  <h3 className="text-5xl md:text-6xl font-bold text-[#F2C811] mb-6">Power BI</h3>
                  <p className="text-2xl font-light text-white mb-6">
                    Transformez la data en décisions.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Connectez vos sources (SAP, Excel, Web) et visualisez vos KPI en temps réel. Fini les rapports statiques, place au pilotage dynamique.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                     {['Reporting Production', 'Temps Réel', 'Data Storytelling'].map((tag, i) => (
                       <span key={i} className="px-4 py-2 rounded-full border border-[#F2C811]/30 bg-[#F2C811]/10 text-[#F2C811] font-semibold text-sm">
                         {tag}
                       </span>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: 50 }} 
                 whileInView={{ opacity: 1, x: 0 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8 }}
                 className="lg:w-1/2 w-full"
               >
                  {/* PRO VISUAL: Power BI Dashboard Mockup (Full CSS) */}
                  <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col hover:border-gray-600 transition-colors duration-500">
                      {/* Top Bar */}
                      <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 justify-between">
                        <div className="flex gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="text-gray-400 text-[10px] font-mono tracking-wider">Production_Cockpit.pbix</div>
                      </div>
                      <div className="flex-1 flex">
                        {/* Sidebar */}
                        <div className="w-10 bg-gray-800 border-r border-gray-700 flex flex-col items-center py-4 gap-4">
                           <div className="w-6 h-6 rounded bg-yellow-500/20 text-yellow-500 flex items-center justify-center"><BarChart2 size={14}/></div>
                           <div className="w-6 h-6 rounded hover:bg-gray-700 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"><Table size={14}/></div>
                           <div className="w-6 h-6 rounded hover:bg-gray-700 text-gray-500 flex items-center justify-center cursor-pointer transition-colors"><Database size={14}/></div>
                        </div>
                        {/* Canvas */}
                        <div className="flex-1 p-4 bg-[#0B0F19] grid grid-cols-4 grid-rows-3 gap-3">
                            {/* KPI 1 */}
                            <div className="col-span-1 bg-gray-800/50 rounded-lg p-3 border border-gray-700 relative overflow-hidden group">
                                <div className="text-gray-400 text-[10px] uppercase tracking-wider">OEE / TRS</div>
                                <div className="text-2xl font-bold text-white mt-1 group-hover:scale-105 transition-transform">87%</div>
                                <div className="text-green-400 text-[10px] flex items-center gap-1 mt-1"><TrendingUp size={10}/> +2.4%</div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700"><div className="w-[87%] h-full bg-yellow-500"></div></div>
                            </div>
                            {/* KPI 2 */}
                            <div className="col-span-1 bg-gray-800/50 rounded-lg p-3 border border-gray-700 relative overflow-hidden group">
                                <div className="text-gray-400 text-[10px] uppercase tracking-wider">Disponibilité</div>
                                <div className="text-2xl font-bold text-white mt-1 group-hover:scale-105 transition-transform">92%</div>
                                <div className="text-red-400 text-[10px] flex items-center gap-1 mt-1"><TrendingUp size={10} className="rotate-180"/> -1.1%</div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700"><div className="w-[92%] h-full bg-blue-500"></div></div>
                            </div>
                            {/* KPI 3 */}
                            <div className="col-span-1 bg-gray-800/50 rounded-lg p-3 border border-gray-700 relative overflow-hidden group">
                                 <div className="text-gray-400 text-[10px] uppercase tracking-wider">Qualité</div>
                                <div className="text-2xl font-bold text-white mt-1 group-hover:scale-105 transition-transform">99.8%</div>
                                <div className="text-green-400 text-[10px] flex items-center gap-1 mt-1">Stable</div>
                                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700"><div className="w-[99%] h-full bg-green-500"></div></div>
                            </div>
                             {/* KPI 4 */}
                            <div className="col-span-1 bg-gray-800/50 rounded-lg p-3 border border-gray-700 relative overflow-hidden group">
                                 <div className="text-gray-400 text-[10px] uppercase tracking-wider">Performance</div>
                                <div className="text-2xl font-bold text-white mt-1 group-hover:scale-105 transition-transform">95%</div>
                                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700"><div className="w-[95%] h-full bg-purple-500"></div></div>
                            </div>

                            {/* Main Chart */}
                            <div className="col-span-3 row-span-2 bg-gray-800/50 rounded-lg p-3 border border-gray-700 flex flex-col">
                                <div className="flex justify-between items-center mb-2">
                                    <div className="text-gray-300 text-xs font-semibold">Production Horaire (Pces)</div>
                                    <div className="flex gap-1">
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                        <div className="text-[8px] text-gray-500">Objectif</div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500 ml-2"></div>
                                        <div className="text-[8px] text-gray-500">Réel</div>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between gap-1 px-1">
                                     {[40, 60, 45, 70, 50, 60, 75, 80, 60, 50, 65, 70, 85, 90, 70, 60].map((h, i) => (
                                        <div key={i} className="w-full bg-gray-700 rounded-t-sm relative h-full group/bar">
                                            <div className="absolute bottom-0 w-full bg-yellow-500/80 group-hover/bar:bg-yellow-500 transition-colors rounded-t-sm" style={{height: `${h}%`}}></div>
                                            <div className="absolute bottom-0 w-full border-t border-dashed border-blue-500/50" style={{bottom: '75%'}}></div>
                                        </div>
                                     ))}
                                </div>
                                <div className="flex justify-between mt-1 text-[8px] text-gray-500">
                                    <span>06:00</span>
                                    <span>12:00</span>
                                    <span>18:00</span>
                                </div>
                            </div>

                            {/* Side Chart (Donut) */}
                             <div className="col-span-1 row-span-2 bg-gray-800/50 rounded-lg p-3 border border-gray-700 flex flex-col items-center justify-center relative">
                                <div className="absolute top-3 left-3 text-gray-300 text-xs font-semibold">Arrêts</div>
                                <div className="relative w-20 h-20 xl:w-24 xl:h-24 rounded-full border-[6px] xl:border-[8px] border-gray-700 flex items-center justify-center">
                                     <svg viewBox="0 0 36 36" className="w-full h-full rotate-[-90deg]">
                                        <path className="text-red-500" strokeDasharray="20, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                        <path className="text-orange-500" strokeDasharray="30, 100" strokeDashoffset="-20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                                        <path className="text-gray-600" strokeDasharray="50, 100" strokeDashoffset="-50" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                     </svg>
                                     <div className="absolute flex flex-col items-center">
                                         <span className="text-lg xl:text-xl font-bold text-white">4h</span>
                                         <span className="text-[8px] text-gray-400">Total</span>
                                     </div>
                                </div>
                                 <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1 w-full">
                                     <div className="flex items-center text-[8px] text-gray-400 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Panne</div>
                                     <div className="flex items-center text-[8px] text-gray-400 gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>Réglage</div>
                                 </div>
                             </div>

                        </div>
                      </div>
                  </div>
               </motion.div>
            </div>

            {/* --- POWER APPS: Visual Left, Text Right --- */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
               <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="lg:w-1/2 text-left lg:text-right"
               >
                  <h3 className="text-5xl md:text-6xl font-bold text-[#A437D2] mb-6">Power Apps</h3>
                  <p className="text-2xl font-light text-white mb-6">
                     Le terrain, enfin digitalisé.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Des applications sur-mesure pour vos opérateurs. Saisie intuitive sur tablette et mobile, scan de QR codes, et photos intégrées directement dans votre SI.
                  </p>
                  <div className="flex flex-wrap gap-3 lg:justify-end">
                     {['Saisie Mobile', 'Scan QR Code', 'Zéro Papier'].map((tag, i) => (
                       <span key={i} className="px-4 py-2 rounded-full border border-[#A437D2]/30 bg-[#A437D2]/10 text-[#A437D2] font-semibold text-sm">
                         {tag}
                       </span>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, x: -50 }} 
                 whileInView={{ opacity: 1, x: 0 }} 
                 viewport={{ once: true }} 
                 transition={{ duration: 0.8 }}
                 className="lg:w-1/2 w-full flex justify-center lg:justify-start"
               >
                   {/* PRO VISUAL: Mobile App Mockup */}
                   <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-0 w-full h-6 bg-gray-800 z-20 flex justify-center">
                           <div className="h-5 w-24 bg-black rounded-b-xl"></div>
                      </div>
                      
                      {/* Screen */}
                      <div className="flex-1 bg-slate-50 relative flex flex-col w-full h-full pt-8">
                          
                          {/* Header with Search */}
                          <div className="px-4 py-3 bg-white shadow-sm z-10">
                               <div className="flex justify-between items-center mb-3">
                                   <div>
                                      <h3 className="font-bold text-slate-800 text-lg">Inventaire</h3>
                                      <p className="text-xs text-slate-400">Entrepôt B - Allée 4</p>
                                   </div>
                                   <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 border border-purple-200"><User size={16}/></div>
                               </div>
                               <div className="relative">
                                   <Search className="absolute left-2.5 top-2 text-gray-400" size={14} />
                                   <div className="w-full bg-gray-100 rounded-lg py-1.5 pl-8 text-xs text-gray-600">Rechercher réf...</div>
                               </div>
                          </div>

                          {/* Content List */}
                          <div className="flex-1 overflow-y-auto p-4 space-y-3">
                               
                               {/* Item Card 1 */}
                               <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0 animate-pulse"></div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold text-sm text-gray-800">Moteur AX-500</span>
                                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 rounded font-medium">Stock</span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-0.5">Ref: 458-992</p>
                                        <div className="mt-2 flex items-center justify-between">
                                             <span className="text-xs font-bold text-slate-700">Qté: 45</span>
                                             <div className="w-5 h-5 rounded bg-purple-600 flex items-center justify-center text-white"><ArrowRight size={12}/></div>
                                        </div>
                                    </div>
                               </div>

                               {/* Item Card 2 (Scan Action) */}
                               <div className="bg-purple-50 p-3 rounded-xl border border-purple-100 flex flex-col items-center justify-center py-6 border-dashed border-2 cursor-pointer hover:bg-purple-100 transition-colors">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-2 border border-purple-200">
                                         <Smartphone size={20} />
                                    </div>
                                    <span className="text-xs font-bold text-purple-700">Scanner Code Barre</span>
                                    <span className="text-[10px] text-purple-400">Caméra active</span>
                               </div>

                               {/* Item Card 3 */}
                               <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex gap-3 opacity-70">
                                    <div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <span className="font-bold text-sm text-gray-800">Joints Torique</span>
                                            <span className="text-[10px] bg-red-100 text-red-700 px-1.5 rounded font-medium">Critique</span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-0.5">Ref: 112-004</p>
                                    </div>
                               </div>
                          </div>

                          {/* Bottom Nav */}
                          <div className="bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center text-gray-400">
                               <div className="flex flex-col items-center gap-1 text-purple-600">
                                    <Layout size={20} />
                                    <span className="text-[8px] font-medium">Accueil</span>
                               </div>
                               <div className="flex flex-col items-center gap-1 hover:text-purple-600 transition-colors cursor-pointer">
                                    <Search size={20} />
                                    <span className="text-[8px] font-medium">Recherche</span>
                               </div>
                               <div className="flex flex-col items-center gap-1 hover:text-purple-600 transition-colors cursor-pointer">
                                    <Settings size={20} />
                                    <span className="text-[8px] font-medium">Config</span>
                               </div>
                          </div>

                      </div>
                   </div>
               </motion.div>
            </div>

            {/* --- POWER AUTOMATE: Left Text, Right Visual --- */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
               <motion.div 
                 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                 className="lg:w-1/2 text-left"
               >
                  <h3 className="text-5xl md:text-6xl font-bold text-[#0066FF] mb-6">Power Automate</h3>
                  <p className="text-2xl font-light text-white mb-6">
                    L'automatisation intelligente.
                  </p>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                     Supprimez les tâches manuelles à faible valeur ajoutée. Connectez vos applications (Outlook, Teams, SharePoint) et laissez les workflows gérer la routine.
                  </p>
                  <div className="flex flex-wrap gap-3">
                     {['Workflows', 'Alertes Teams', 'Approbations'].map((tag, i) => (
                       <span key={i} className="px-4 py-2 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 text-[#0066FF] font-semibold text-sm">
                         {tag}
                       </span>
                     ))}
                  </div>
               </motion.div>

               <motion.div 
                  initial={{ opacity: 0, x: 50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2 w-full"
               >
                   {/* PRO VISUAL: Workflow Diagram Canvas */}
                   <div className="relative bg-[#111827] rounded-xl overflow-hidden shadow-2xl border border-gray-700 w-full max-w-md mx-auto aspect-[4/5] flex flex-col hover:border-blue-500/30 transition-colors duration-500">
                        {/* Header */}
                        <div className="bg-[#1F2937] px-4 py-3 border-b border-gray-700 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white"><Workflow size={14}/></div>
                                <span className="text-white text-xs font-medium">Appro_Commande_SAP</span>
                            </div>
                            <div className="px-2 py-0.5 bg-green-900/50 text-green-400 text-[10px] rounded border border-green-700 font-bold uppercase tracking-wider">Actif</div>
                        </div>
                        
                        {/* Canvas */}
                        <div className="flex-1 bg-[#111827] p-6 relative flex flex-col items-center overflow-hidden">
                            {/* Background Grid */}
                            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#6b7280 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>

                            {/* Step 1: Trigger */}
                            <div className="z-10 w-full bg-[#1F2937] border border-gray-600 rounded-lg p-3 shadow-lg flex items-center gap-3 relative group hover:border-blue-500 transition-colors cursor-pointer transform hover:-translate-y-1 duration-200">
                                <div className="w-9 h-9 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase font-bold">Quand un email arrive</div>
                                    <div className="text-white text-xs font-medium">Objet contient "Urgent"</div>
                                </div>
                                <div className="absolute -bottom-5 left-1/2 w-0.5 h-5 bg-gray-600"></div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-600 text-gray-900 flex items-center justify-center z-20 hover:scale-125 transition-transform cursor-pointer hover:bg-white"><div className="w-2 h-0.5 bg-gray-400 hover:bg-gray-800"></div><div className="absolute h-2 w-0.5 bg-gray-400 hover:bg-gray-800"></div></div>
                            </div>

                            {/* Connector Space */}
                            <div className="h-10"></div>

                            {/* Step 2: Action */}
                            <div className="z-10 w-full bg-[#1F2937] border border-gray-600 rounded-lg p-3 shadow-lg flex items-center gap-3 relative group hover:border-purple-500 transition-colors cursor-pointer transform hover:-translate-y-1 duration-200">
                                <div className="w-9 h-9 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                                    <BrainCircuit size={18} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 uppercase font-bold">AI Builder</div>
                                    <div className="text-white text-xs font-medium">Extraire Infos PDF</div>
                                </div>
                                <div className="absolute -bottom-5 left-1/2 w-0.5 h-5 bg-gray-600"></div>
                                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-600 text-gray-900 flex items-center justify-center z-20 hover:scale-125 transition-transform cursor-pointer hover:bg-white"><div className="w-2 h-0.5 bg-gray-400 hover:bg-gray-800"></div><div className="absolute h-2 w-0.5 bg-gray-400 hover:bg-gray-800"></div></div>
                            </div>

                            {/* Connector Space */}
                            <div className="h-10"></div>

                            {/* Step 3: Condition (Diamond) */}
                            <div className="z-10 flex flex-col items-center w-full">
                                <div className="w-full border-t border-gray-600 relative h-6">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1F2937] border border-gray-600 px-4 py-1.5 rounded-full text-[10px] font-bold text-gray-300 shadow hover:border-gray-400 transition-colors cursor-default">Montant > 1000€ ?</div>
                                    <div className="absolute top-0 left-0 w-0.5 h-6 bg-gray-600"></div>
                                    <div className="absolute top-0 right-0 w-0.5 h-6 bg-gray-600"></div>
                                </div>
                                <div className="flex w-full justify-between px-1">
                                    {/* Left Branch */}
                                    <div className="w-[48%] bg-[#1F2937] border border-green-700/50 rounded-lg p-2.5 flex flex-col gap-2 items-center text-center opacity-80 hover:opacity-100 hover:border-green-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-green-900/20">
                                        <div className="w-7 h-7 rounded bg-green-900/50 text-green-500 flex items-center justify-center border border-green-500/20"><Share2 size={14}/></div>
                                        <div className="text-[10px] font-medium text-gray-300 leading-tight">Approbation Teams</div>
                                    </div>
                                    {/* Right Branch */}
                                    <div className="w-[48%] bg-[#1F2937] border border-blue-700/50 rounded-lg p-2.5 flex flex-col gap-2 items-center text-center opacity-80 hover:opacity-100 hover:border-blue-500 transition-all cursor-pointer hover:shadow-lg hover:shadow-blue-900/20">
                                        <div className="w-7 h-7 rounded bg-blue-900/50 text-blue-500 flex items-center justify-center border border-blue-500/20"><Database size={14}/></div>
                                        <div className="text-[10px] font-medium text-gray-300 leading-tight">Créer Item SAP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. COPILOT (Futuristic / Impactful) */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Animated Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 blur-[100px] rounded-full"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="max-w-4xl mx-auto"
           >
             <div className="inline-block p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 mb-8 shadow-[0_0_50px_rgba(236,72,153,0.3)]">
               <BrainCircuit className="text-pink-400" size={48} />
             </div>
             <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
               Le futur est là avec <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Microsoft Copilot</span>
             </h2>
             <p className="text-xl text-gray-300 mb-10 leading-relaxed">
               L'intelligence artificielle générative arrive dans vos processus. Je vous aide à préparer vos données et à identifier les cas d'usage où l'IA apportera une valeur immédiate.
             </p>
             <div className="flex justify-center gap-4">
                <span className="px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-300 text-sm font-bold">Agent IA perso</span>
                <span className="px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-bold">Analyse de Données</span>
                <span className="px-6 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-bold">Automatisation IA</span>
             </div>
           </motion.div>
        </div>
      </section>

      {/* 5. GESTION DES DONNÉES (Renamed/Refactored) */}
      <section className="py-24 bg-[#111827] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] -z-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="mb-16 text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
             <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
               Gestion des Données & Socle Technique
             </h2>
             <p className="text-gray-400 max-w-2xl mx-auto text-lg">
               Au-delà du Low-Code, je maîtrise les briques techniques essentielles pour traiter vos données en masse et connecter vos systèmes historiques.
             </p>
          </motion.div>

          {/* MAIN MODULE: EXCEL (Center of Gravity) */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={scaleIn}
            className="relative mb-8 group"
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="relative bg-gradient-to-br from-[#064e3b] to-[#111827] rounded-3xl p-8 md:p-12 border border-emerald-500/30 hover:border-emerald-400 shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                   <div className="lg:w-1/2">
                      <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                         <FileSpreadsheet size={16} />
                         <span>Le standard industriel</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Excel & Automatisation VBA
                      </h3>
                      <p className="text-emerald-100/80 text-lg leading-relaxed mb-8">
                        L'outil universel poussé à ses limites. Je transforme vos fichiers Excel statiques en véritables applications métiers : UserForms ergonomiques, macros de traitement de données complexes et calculateurs robustes.
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                         <div className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-lg border border-emerald-500/20 text-emerald-100 text-sm">
                            <Code size={16} /> Automation VBA
                         </div>
                         <div className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-lg border border-emerald-500/20 text-emerald-100 text-sm">
                            <Table size={16} /> Power Pivot
                         </div>
                         <div className="flex items-center gap-2 bg-black/20 px-3 py-2 rounded-lg border border-emerald-500/20 text-emerald-100 text-sm">
                            <Layout size={16} /> UserForms
                         </div>
                      </div>
                   </div>
                   
                   <div className="lg:w-1/2 w-full">
                      <div className="bg-[#1F2937]/50 p-2 rounded-xl border border-white/10 backdrop-blur-sm">
                         <ExcelMacroVisual />
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* SECONDARY MODULES (Grid of 3) */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* SAP Automation */}
            <motion.div 
               variants={fadeInUp}
               initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
               whileHover={{ y: -5 }}
               className="bg-[#1F2937] p-8 rounded-2xl border border-gray-700 hover:border-blue-500 hover:bg-gradient-to-b hover:from-[#1F2937] hover:to-blue-900/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                 <Database size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">SAP & Scripting</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Automatisation des tâches répétitives dans SAP (GUI Scripting). Extraction massive de données pour alimenter vos BI sans intervention humaine.
              </p>
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                 <div className="w-0 group-hover:w-full h-full bg-blue-500 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>

            {/* Power Query */}
            <motion.div 
               variants={fadeInUp}
               initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
               whileHover={{ y: -5 }}
               className="bg-[#1F2937] p-8 rounded-2xl border border-gray-700 hover:border-amber-500 hover:bg-gradient-to-b hover:from-[#1F2937] hover:to-amber-900/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-amber-900/20 rounded-xl flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform border border-amber-500/20">
                 <Table size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">Power Query (ETL)</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Le moteur de transformation de données. Nettoyage, fusion et normalisation de sources disparates (CSV, Web, PDF) en modèles propres.
              </p>
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                 <div className="w-0 group-hover:w-full h-full bg-amber-500 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>

            {/* Python */}
            <motion.div 
               variants={fadeInUp}
               initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
               whileHover={{ y: -5 }}
               className="bg-[#1F2937] p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 hover:bg-gradient-to-b hover:from-[#1F2937] hover:to-yellow-900/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-yellow-900/20 rounded-xl flex items-center justify-center text-yellow-400 mb-6 group-hover:scale-110 transition-transform border border-yellow-400/20">
                 <Code size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">Python</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Automatisation via Python : traitement de fichiers, connexion APIs, scripts personnalisés. Pour les tâches impossibles à faire autrement.
              </p>
              <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                 <div className="w-0 group-hover:w-full h-full bg-yellow-400 transition-all duration-500 ease-out"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. ECOSYSTEM & SHAREPOINT (Closing Section) */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-900 to-blue-900 p-8 md:p-16 border border-cyan-500/30 shadow-2xl">
         <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
            <Globe size={300} />
         </div>
         
         <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
               <div className="inline-flex items-center gap-2 mb-6 bg-cyan-800/50 px-4 py-2 rounded-full border border-cyan-400/30">
                  <Globe className="text-cyan-300" size={20} />
                  <span className="text-cyan-100 font-bold text-sm">Écosystème Microsoft 365</span>
               </div>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                  Tout est intégré, <br/>rien de plus à payer.
               </h2>
               <p className="text-lg text-cyan-100 leading-relaxed mb-8">
                  Vous avez déjà Microsoft 365 ? Exploitez-le à 100% ! Je structure vos solutions (SharePoint, Power Apps, Power BI) sans coûts additionnels. Pas de licences Premium nécessaires, pas de surprises.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-white">
                     <div className="bg-white/10 p-2 rounded-lg"><Shield size={18}/></div>
                     <span>Sécurisé (Active Directory)</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                     <div className="bg-white/10 p-2 rounded-lg"><User size={18}/></div>
                     <span>Contrôle total des accès</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                     <div className="bg-white/10 p-2 rounded-lg"><Layers size={18}/></div>
                     <span>Centralisation Data</span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                     <div className="bg-white/10 p-2 rounded-lg"><Share2 size={18}/></div>
                     <span>Espace Collaboratif</span>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 w-full">
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                     <span className="font-bold text-white">Architecture Solution</span>
                     <span className="text-xs bg-cyan-500 text-white px-2 py-1 rounded">Standard</span>
                  </div>
                  <div className="space-y-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-500/30"><Database size={24}/></div>
                        <div>
                           <h4 className="font-bold text-white">SharePoint Online</h4>
                           <p className="text-sm text-cyan-200">Base de données & Documents</p>
                        </div>
                     </div>
                     <div className="w-0.5 h-8 bg-white/20 ml-6"></div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/30"><Smartphone size={24}/></div>
                        <div>
                           <h4 className="font-bold text-white">Power Apps / Automate</h4>
                           <p className="text-sm text-cyan-200">Interface & Logique métier</p>
                        </div>
                     </div>
                     <div className="w-0.5 h-8 bg-white/20 ml-6"></div>
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-yellow-500/30"><BarChart2 size={24}/></div>
                        <div>
                           <h4 className="font-bold text-white">Power BI</h4>
                           <p className="text-sm text-cyan-200">Restitution & Analyse</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* 7. M365 APPS MARQUEE */}
      <div className="py-12 bg-[#0B0F19] overflow-hidden border-t border-white/5 relative">
         <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
         
         <div className="flex overflow-hidden relative">
            <motion.div 
               className="flex items-center"
               animate={{ x: "-50%" }}
               transition={{ duration: 60, ease: "linear", repeat: Infinity }}
               style={{ width: "fit-content" }}
            >
               {/* Double the list for seamless loop */}
               {[...m365Apps, ...m365Apps].map((app, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 min-w-[80px] mr-16 group cursor-default">
                     <img src={app.icon} alt={app.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" />
                     <span className="text-xs text-gray-400 font-medium group-hover:text-white transition-colors">{app.name}</span>
                  </div>
               ))}
            </motion.div>
         </div>
      </div>

    </div>
  );
};

// --- HELPER COMPONENTS ---

const ExcelMacroVisual = () => {
  // We use discrete states for exact control over the "Batch Processing" feel
  const [activeRow, setActiveRow] = useState(0);
  const TOTAL_ROWS = 4;
  const STEP_DURATION = 1500; // 1.5s per row
  const RESET_DELAY = 2000; // 2s pause at end

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (activeRow === TOTAL_ROWS) {
      // End of batch reached, wait before reset
      timer = setTimeout(() => {
        setActiveRow(0); // Reset to beginning
      }, RESET_DELAY);
    } else {
      // Process next row
      timer = setTimeout(() => {
        setActiveRow(prev => prev + 1);
      }, STEP_DURATION);
    }

    return () => clearTimeout(timer);
  }, [activeRow]);

  const progressPercentage = Math.min((activeRow / TOTAL_ROWS) * 100, 100);

  return (
    <div className="mt-2 bg-gray-900 rounded-lg overflow-hidden border border-gray-700 font-mono text-[10px] relative select-none shadow-2xl h-[300px] flex flex-col">
      {/* Excel Header */}
      <div className="bg-[#1D6F42] px-3 py-1.5 flex items-center justify-between z-20 relative shrink-0">
        <div className="flex items-center gap-2">
           <FileSpreadsheet size={12} className="text-white" />
           <span className="font-semibold text-white tracking-wide">Macro_Processor.xlsm</span>
        </div>
        <div className="flex gap-1.5">
           <div className="w-2 h-2 rounded-full bg-white/30"></div>
           <div className="w-2 h-2 rounded-full bg-white/30"></div>
           <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
        </div>
      </div>
      
      {/* Formula Bar */}
      <div className="bg-gray-800 border-b border-gray-700 px-2 py-1 flex items-center gap-2 z-20 relative shrink-0">
         <span className="text-gray-500 italic">fx</span>
         <div className="h-4 w-full bg-gray-900 rounded border border-gray-700"></div>
      </div>

      {/* Grid Area */}
      <div className="relative bg-[#1F2937] p-0 z-10 flex-1 overflow-hidden">
          <div className="grid grid-cols-4 border-b border-gray-700 bg-gray-800 text-gray-400 font-semibold">
              <div className="py-1 text-center border-r border-gray-700 w-8">#</div>
              <div className="py-1 px-2 border-r border-gray-700 col-span-1">ID</div>
              <div className="py-1 px-2 border-r border-gray-700 col-span-1">Ref</div>
              <div className="py-1 px-2 col-span-1">Status</div>
          </div>
          
          {/* Rows */}
          {[1, 2, 3, 4].map((i) => {
             const rowIndex = i - 1;
             const isDone = rowIndex < activeRow;
             const isProcessing = rowIndex === activeRow;

             return (
               <div key={i} className="grid grid-cols-4 border-b border-gray-700/50 text-gray-300 relative group h-10 items-center transition-colors duration-300">
                  <div className="text-center border-r border-gray-700 bg-gray-800 text-gray-500 w-8 h-full flex items-center justify-center">{i}</div>
                  <div className="px-2 border-r border-gray-700 col-span-1">ORD-{1020+i}</div>
                  <div className="px-2 border-r border-gray-700 col-span-1 text-blue-300">#XJ9{i}</div>
                  
                  {/* Status Cell */}
                  <div className="px-2 col-span-1 relative h-full flex items-center">
                     {isDone ? (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-1 text-emerald-400 font-bold bg-emerald-500/10 -mx-2 px-2 py-0.5 w-full h-full"
                        >
                           <CheckCircle size={12} /> Done
                        </motion.div>
                     ) : (
                        <span className={`text-gray-500 italic transition-opacity ${isProcessing ? 'animate-pulse text-gray-400' : ''}`}>
                           Pending
                        </span>
                     )}
                  </div>
                  
                  {/* Active Row Highlighter Overlay */}
                  {isProcessing && (
                    <motion.div 
                       layoutId="activeRowHighlight"
                       className="absolute inset-0 bg-emerald-500/10 border-y border-emerald-500/50 pointer-events-none z-10"
                       transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                  )}
               </div>
             );
          })}
      </div>

      {/* STATUS BAR */}
      <div className="bg-[#2D3748] border-t border-gray-600 p-2 shrink-0">
         <div className="flex justify-between items-center text-[9px] text-gray-300">
             <div className="flex items-center gap-2">
                 {activeRow < TOTAL_ROWS ? (
                   <div className="flex items-center gap-2">
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </div>
                      <span className="font-bold">RUNNING MACRO...</span>
                   </div>
                 ) : (
                   <div className="flex items-center gap-2 text-emerald-400">
                      <CheckCircle size={10} />
                      <span className="font-bold">COMPLETED</span>
                   </div>
                 )}
             </div>
             
             {/* Progress Bar */}
             <div className="w-24 bg-gray-700 rounded-full h-1.5 overflow-hidden">
                <motion.div 
                   className="h-full bg-emerald-500"
                   initial={{ width: 0 }}
                   animate={{ width: `${progressPercentage}%` }}
                   transition={{ duration: 0.5, ease: "linear" }}
                />
             </div>
         </div>
      </div>

    </div>
  );
};

export default ExpertisePage;
