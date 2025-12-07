import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Parlons de votre projet" 
          subtitle="Prêt à optimiser vos processus ? Réservez un créneau ou envoyez-moi un message."
          light={true}
        />

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Coordonnées</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:contact@leantech-solutions.fr" className="text-lg font-medium hover:text-primary transition-colors">contact@leantech-solutions.fr</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Localisation</p>
                    <p className="text-lg font-medium">Toulouse & Région Occitanie</p>
                    <p className="text-sm text-gray-500 mt-1">Disponible en distanciel France entière</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg text-primary">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Réseau</p>
                    <a href="#" className="text-lg font-medium hover:text-primary transition-colors">Suivez-moi sur LinkedIn</a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <a 
                  href="#"
                  className="w-full bg-secondary hover:bg-orange-600 text-white text-center py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group"
                >
                  <Calendar className="group-hover:animate-pulse" />
                  Réserver 30 min de conseil gratuit
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="bg-white rounded-2xl p-8 text-gray-800 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Envoyez-moi un message</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Jean Dupont" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Entreprise</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Votre Société" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Email professionnel</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="jean@entreprise.com" required />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Type de projet</label>
              <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white">
                <option>Sélectionnez une option...</option>
                <option>Création de Dashboard Power BI</option>
                <option>Application Power Apps</option>
                <option>Automatisation de processus</option>
                <option>Consulting Lean / Amélioration Continue</option>
                <option>Autre</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Décrivez brièvement votre besoin..." required></textarea>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Envoyer la demande
            </button>
          </form>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LeanTech Solutions. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;