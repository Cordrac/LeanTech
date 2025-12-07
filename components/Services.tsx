import React from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart, Cpu, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { Service } from '../types';

const servicesList: Service[] = [
  {
    id: 'lean',
    title: 'Amélioration Continue & Lean',
    description: "Optimisation de vos processus industriels pour réduire les gaspillages et maximiser la valeur ajoutée.",
    icon: Settings,
    features: ['Diagnostic VSM & 5S', 'Pilotage de la performance (TRS)', 'Projets Kaizen & Six Sigma', 'Standardisation des processus']
  },
  {
    id: 'bi',
    title: 'Business Intelligence & Data',
    description: "Transformez vos données brutes en tableaux de bord interactifs pour un pilotage éclairé en temps réel.",
    icon: BarChart,
    features: ['Dashboards Power BI sur mesure', 'Visuels avancés (DENEB)', 'Cockpits de production', 'Formation utilisateurs']
  },
  {
    id: 'automation',
    title: 'Automatisation & Low-Code',
    description: "Digitalisez vos formulaires papier et automatisez vos tâches répétitives pour gagner du temps.",
    icon: Cpu,
    features: ['Power Apps Métier', 'Workflows Power Automate', 'Automatisation SAP & Excel', 'Digitalisation Zéro Papier']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Mes Domaines d'Expertise" 
          subtitle="Une approche hybride combinant l'excellence opérationnelle Lean et la puissance des outils numériques Microsoft."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="text-secondary shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;