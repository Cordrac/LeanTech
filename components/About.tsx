
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, GraduationCap, Award, Briefcase, 
  Target, Users, TrendingUp, Factory, 
  Zap, Globe, Database, Cpu, 
  Coffee, Timer, FileCheck, Linkedin, Mail,
  Activity
} from 'lucide-react';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  
  // URL de la photo fournie
  const PROFILE_PHOTO = "https://avatars.githubusercontent.com/u/10103504?v=4";

  return (
    <div className="bg-white overflow-hidden font-sans">
      
      {/* 1. HERO SECTION : Personal Branding */}
      <section className="relative bg-[#0f172a] text-white pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden rounded-b-[3rem]">
        {/* Abstract Tech Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="absolute right-0 top-0 bg-blue-500/30 w-[500px] h-[500px] rounded-full blur-[100px]"></div>
            <div className="absolute left-0 bottom-0 bg-emerald-500/20 w-[400px] h-[400px] rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Photo Card with Floating Elements */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-5/12 relative max-w-sm md:max-w-none mx-auto"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group z-10">
                <img 
                  src={PROFILE_PHOTO}
                  alt="François" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Name Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20">
                  <h2 className="text-gray-900 font-bold text-lg leading-none">François</h2>
                  <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                    <MapPin size={14} className="text-primary" />
                    <span>Toulouse & Occitanie</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 - Experience */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-4 top-12 bg-blue-600 text-white p-4 rounded-2xl shadow-xl z-20 hidden md:block border border-blue-400/30 backdrop-blur-sm"
              >
                 <div className="font-bold text-3xl font-heading">10+</div>
                 <div className="text-xs opacity-90 uppercase tracking-wider font-semibold">Années Exp.</div>
              </motion.div>

              {/* Floating Badge 2 - Role */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -left-6 bottom-24 bg-emerald-500 text-white p-3 rounded-xl shadow-xl z-20 flex items-center gap-3 hidden md:flex border border-emerald-400/30"
              >
                 <div className="bg-white/20 p-2 rounded-lg"><Zap size={20} /></div>
                 <div>
                    <div className="font-bold text-sm">Double Profil</div>
                    <div className="text-[10px] opacity-90 font-medium">Lean + Data</div>
                 </div>
              </motion.div>
            </motion.div>

            {/* Main Pitch */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-7/12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
                 <Briefcase size={14} />
                 <span>Consultant & Ingénieur Indépendant</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                L'Expertise Terrain <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                   puissance Digital.
                </span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                Je ne suis pas un consultant de salon. Je suis un ingénieur de terrain qui a troqué son chronomètre contre des algorithmes pour bâtir des solutions qui durent.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="px-8 py-4 bg-white text-slate-900 hover:bg-blue-50 font-bold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center gap-2 transform hover:-translate-y-1">
                  <Mail size={18} />
                  Me contacter
                </a>
                <a href="#" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-medium rounded-xl transition-all border border-slate-700 flex items-center gap-2 backdrop-blur-md">
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. PHILOSOPHIE (Bento Grid) */}
      <section className="relative -mt-24 z-20 mb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Card 1: Terrain */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Factory size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">L'ADN Industriel</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Issu du terrain, je parle le langage de vos opérateurs. Je comprends les contraintes du 3x8, du GMP et de la sécurité.
              </p>
            </motion.div>

            {/* Card 2: Data */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">L'Approche Data</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Une décision sans data n'est qu'une opinion. Je structure vos données pour qu'elles racontent la vérité de votre performance.
              </p>
            </motion.div>

            {/* Card 3: Humain */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">L'Humain d'Abord</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Un outil digital non utilisé est un échec. Je co-construis chaque solution avec les futurs utilisateurs pour garantir l'adhésion.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. EXPERTISE VENN : Visual Representation */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
           <SectionHeading 
             title="Ma Signature Unique" 
             subtitle="Le pont manquant entre vos équipes opérationnelles et votre DSI."
           />

           <div className="mt-16 relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 max-w-4xl mx-auto min-h-[400px]">
              
              {/* Circle 1: LEAN */}
              <motion.div 
                 initial={{ x: 50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-emerald-500/5 border-2 border-emerald-500/20 flex flex-col items-center justify-center text-center p-8 md:-mr-10 z-10 hover:bg-emerald-500/10 transition-colors cursor-default"
              >
                 <Factory size={32} className="text-emerald-600 mb-3 opacity-80" />
                 <h3 className="font-heading font-bold text-xl text-emerald-800 mb-2">LEAN &<br/>PROCESS</h3>
                 <ul className="text-sm text-emerald-700 space-y-1 font-medium">
                   <li>Excellence Ops</li>
                   <li>VSM & 5S</li>
                   <li>Résolution de Problèmes</li>
                 </ul>
              </motion.div>

              {/* Center Overlap: VALUE */}
              <motion.div 
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="absolute z-30 w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 shadow-2xl flex flex-col items-center justify-center text-white text-center border-[6px] border-white transform hover:scale-110 transition-transform duration-300"
              >
                 <Zap size={28} className="mb-1" />
                 <div className="font-bold text-sm leading-tight tracking-wide">MA VALEUR<br/>AJOUTÉE</div>
              </motion.div>

              {/* Circle 2: DIGITAL */}
              <motion.div 
                 initial={{ x: -50, opacity: 0 }}
                 whileInView={{ x: 0, opacity: 1 }}
                 transition={{ duration: 0.8 }}
                 className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-500/5 border-2 border-blue-500/20 flex flex-col items-center justify-center text-center p-8 md:-ml-10 z-10 hover:bg-blue-500/10 transition-colors cursor-default"
              >
                 <Cpu size={32} className="text-blue-600 mb-3 opacity-80" />
                 <h3 className="font-heading font-bold text-xl text-blue-800 mb-2">MICROSOFT<br/>DIGITAL</h3>
                 <ul className="text-sm text-blue-700 space-y-1 font-medium">
                   <li>Power Platform</li>
                   <li>Data Intelligence</li>
                   <li>Automatisation</li>
                 </ul>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 4. TIMELINE PARCOURS : Visual & Clean */}
      <section className="py-24 bg-gray-50/80">
        <div className="container mx-auto px-6">
          <SectionHeading 
            title="Mon Parcours" 
            subtitle="Forgé au sein de leaders industriels exigeants."
          />

          <div className="max-w-4xl mx-auto mt-16 relative">
             {/* Central Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

             {/* Timeline Items */}
             {[
               { 
                 year: '2020 - Aujourd\'hui', 
                 role: 'Consultant Indépendant', 
                 company: 'LeanTech Solutions', 
                 desc: "Accompagnement de PME et grands groupes dans leur transformation digitale et l'optimisation de leurs processus industriels." 
               },
               { 
                 year: '2017 - 2020', 
                 role: 'Responsable Amélioration Continue', 
                 company: 'Groupe Industriel International', 
                 desc: "Pilotage de chantiers Kaizen, déploiement du Lean Manufacturing sur 3 sites de production." 
               },
               { 
                 year: '2014 - 2017', 
                 role: 'Ingénieur Méthodes & Process', 
                 company: 'Industrie Pharmaceutique', 
                 desc: "Optimisation des flux de production, qualification d'équipements et mise en place d'indicateurs de performance." 
               }
             ].map((item, index) => (
               <div key={index} className={`flex flex-col md:flex-row gap-8 items-center mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                 <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                   <div className="text-primary font-bold text-xl mb-1">{item.year}</div>
                   <h3 className="text-gray-900 font-bold text-lg">{item.role}</h3>
                   <div className="text-gray-500 font-medium mb-2">{item.company}</div>
                   <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                 </div>
                 
                 <div className="relative z-10 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-lg flex-shrink-0"></div>

                 <div className="w-full md:w-5/12"></div>
               </div>
             ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
