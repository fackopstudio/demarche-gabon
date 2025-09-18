'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  User,
  MessageSquare,
  Building2
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    console.log('Formulaire soumis:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@demarches-gabon.ga',
      description: 'Écrivez-nous à tout moment'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+241 01 23 45 67',
      description: 'Lun-Ven 8h-17h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      value: 'Libreville, Gabon',
      description: 'Ministère de la Digitalisation'
    }
  ];

  const subjects = [
    'Demande d\'information',
    'Support technique',
    'Partenariat',
    'Suggestion d\'amélioration',
    'Autre'
  ];

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-secondary-50/30 overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
          >
            Contactez{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">nous</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Une question ? Un besoin spécifique ? Notre équipe est là pour vous accompagner dans la digitalisation de vos démarches administratives.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Informations de contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{info.title}</h4>
                      <p className="text-slate-700 font-medium">{info.value}</p>
                      <p className="text-sm text-slate-500">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Carte de localisation simulée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="backdrop-blur-md bg-white/80 rounded-2xl p-6 shadow-xl border border-white/20"
            >
              <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary-600 mr-2" />
                Notre localisation
              </h4>
              <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="h-12 w-12 text-primary-600 mx-auto mb-2" />
                  <p className="text-slate-600 font-medium">Libreville, Gabon</p>
                  <p className="text-sm text-slate-500">Ministère de la Digitalisation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="backdrop-blur-md bg-white/80 rounded-3xl p-8 shadow-2xl border border-white/20"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Envoyez-nous un message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-slate-900 mb-2">Message envoyé !</h4>
                <p className="text-slate-600">Nous vous répondrons dans les plus brefs délais.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Votre nom complet"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="votre@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <Building2 className="h-4 w-4 inline mr-2" />
                    Entreprise/Organisation
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Nom de votre organisation"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    <MessageSquare className="h-4 w-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  <span>Envoyer le message</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
