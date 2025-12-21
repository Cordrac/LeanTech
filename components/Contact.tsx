
import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Calendar, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Logo from './Logo';

const Contact: React.FC = () => {
  const email = "francois.mastroeni@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/fran%C3%A7ois-mastroeni-153781171?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BO%2Fo6Kd2rSP2GbBiXdVBmfA%3D%3D";
  const calendlyUrl = "https://calendly.com/francois-mastroeni/30min";

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'Dashboard Power BI',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`[Nouveau Projet] ${formData.type} - ${formData.name}`);
    
    const body = encodeURIComponent(
      `Bonjour François,\n\n` +
      `Voici une nouvelle demande de la part de ${formData.name} de l'entreprise ${formData.company || 'Non précisée'}.\n\n` +
      `Type de projet : ${formData.type}\n\n` +
      `Message :\n"${formData.message}"\n\n` +
      `Vous pouvez me contacter par mon adresse mail : ${formData.email}\n\n` +
      `--- Message envoyé via le formulaire de LeanTech Solutions ---`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <footer id="contact" className="bg-[#0f172a] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Parlons de votre projet" 
          subtitle="Prêt à transformer vos processus ? Envoyez-moi un message ou réservez directement un créneau."
          light={true}
        />

        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          
          {/* Contact Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 shadow-2xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
                  <span className="w-8 h-1 bg-secondary rounded-full"></span>
                  Coordonnées
                </h3>
                
                <div className="space-y-8">
                  <a 
                    href={`mailto:${email}`}
                    className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all"
                  >
                    <div className="bg-primary/20 p-4 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email professionnel</p>
                      <p className="text-lg font-medium group-hover:text-primary transition-colors">{email}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-5 p-4 rounded-2xl">
                    <div className="bg-emerald-500/20 p-4 rounded-xl text-emerald-400">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Localisation</p>
                      <p className="text-lg font-medium">Toulouse & Région Occitanie</p>
                      <p className="text-sm text-slate-500 mt-1">Disponible en distanciel France entière</p>
                    </div>
                  </div>

                  <a 
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all"
                  >
                    <div className="bg-blue-600/20 p-4 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Réseau Professionnel</p>
                      <p className="text-lg font-medium group-hover:text-blue-400 transition-colors">Mon profil LinkedIn</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700/50">
                <a 
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-secondary hover:bg-orange-600 text-white text-center py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 group shadow-xl hover:shadow-secondary/20 hover:-translate-y-1"
                >
                  <Calendar className="group-hover:animate-bounce" />
                  Réserver 30 min (Calendly)
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            {!submitted ? (
              <form 
                className="bg-white rounded-3xl p-8 md:p-10 text-slate-800 shadow-2xl relative overflow-hidden" 
                onSubmit={handleSubmit}
              >
                <div className="absolute top-0 right-0 p-12 bg-slate-50 rounded-bl-full -mr-6 -mt-6 pointer-events-none"></div>
                
                <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3 relative z-10">
                  <span className="p-2 bg-primary/10 rounded-lg text-primary"><Send size={24} /></span>
                  Envoyez-moi un message
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nom complet</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 font-medium" 
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Entreprise</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 font-medium" 
                      placeholder="Ex: Ma Société SAS" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>

                <div className="mb-6 space-y-2 relative z-10">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email professionnel</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 font-medium" 
                    placeholder="jean@entreprise.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="mb-6 space-y-2 relative z-10">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Type de projet</label>
                  <select 
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 font-medium appearance-none"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option>Dashboard Power BI</option>
                    <option>Application Power Apps</option>
                    <option>Automatisation de processus</option>
                    <option>Consulting Lean / Amélioration Continue</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div className="mb-8 space-y-2 relative z-10">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Votre message</label>
                  <textarea 
                    rows={4} 
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-slate-50 font-medium resize-none" 
                    placeholder="Comment puis-je vous aider ?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-slate-900 hover:bg-primary text-white font-bold py-5 rounded-2xl transition-all shadow-xl hover:shadow-primary/20 flex items-center justify-center gap-3 relative z-10 group">
                  Envoyer ma demande
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center shadow-2xl h-full flex flex-col items-center justify-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Demande prête !</h3>
                <p className="text-slate-600 mb-8 max-w-sm">
                  Votre messagerie vient de s'ouvrir avec un message pré-rempli. <br/><br/>
                  <strong>Important :</strong> Cliquez sur "Envoyer" dans votre logiciel d'email pour finaliser l'envoi.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-bold hover:underline"
                >
                  Modifier ou envoyer un autre message
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <Logo light={true} size={30} showText={true} />
             <div className="h-4 w-[1px] bg-slate-700 hidden md:block"></div>
             <p>© {new Date().getFullYear()} LeanTech Solutions. Expert Amélioration Continue.</p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors underline-offset-4 hover:underline">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
