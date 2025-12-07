import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Microsoft Power BI', level: 5, category: 'Microsoft' },
  { name: 'Power Apps', level: 5, category: 'Microsoft' },
  { name: 'Power Automate', level: 5, category: 'Microsoft' },
  { name: 'Excel / VBA', level: 5, category: 'Microsoft' },
  { name: 'Lean Six Sigma', level: 5, category: 'Methodology' },
  { name: 'SAP Automation', level: 4, category: 'Data' },
  { name: 'SQL & Power Query', level: 4, category: 'Data' },
  { name: 'Gestion de Projet', level: 4, category: 'Methodology' },
];

const SkillBar: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-between"
    >
      <div className="font-semibold text-gray-800">{skill.name}</div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < skill.level ? 'text-secondary fill-secondary' : 'text-gray-200'}`} 
          />
        ))}
      </div>
    </motion.div>
  );
};

const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/2">
            <SectionHeading 
              title="Compétences Techniques" 
              subtitle="Une double compétence rare alliant expertise terrain et maîtrise technologique."
              centered={false}
            />
            <p className="text-gray-600 mb-8 leading-relaxed">
              Mon profil d'ingénieur spécialisé en amélioration continue me permet de comprendre vos problématiques métier (production, qualité, logistique) et d'y répondre avec les outils digitaux les plus adaptés. Je ne suis pas seulement un développeur, je suis un partenaire de votre excellence opérationnelle.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary">
                  <span className="block text-2xl font-bold text-primary mb-1">70%</span>
                  <span className="text-sm text-gray-600">Gain de temps sur tâches admin</span>
               </div>
               <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-secondary">
                  <span className="block text-2xl font-bold text-secondary mb-1">ROI</span>
                  <span className="text-sm text-gray-600">Rapide et mesurable</span>
               </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full grid gap-4">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Expertise;