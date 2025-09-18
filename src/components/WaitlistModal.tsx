'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Mail, User, Building2, CheckCircle, Clock } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: '',
    interest: ''
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
    console.log('Inscription liste d\'attente:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', position: '', interest: '' });
      onClose();
    }, 3000);
  };

  const interests = [
    'Passeport et documents d\'identité',
    'Création d\'entreprise',
    'Impôts et taxes',
    'Certificats administratifs',
    'Bourses et aides',
    'Autres démarches'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex overflow-y-auto fixed inset-0 z-50 justify-center items-center p-2 backdrop-blur-sm bg-black/50 sm:p-4"
          onClick={onClose}
        >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="overflow-hidden relative mx-2 my-4 w-full max-w-xs rounded-3xl border shadow-2xl backdrop-blur-md bg-white/90 border-white/20 sm:max-w-lg md:max-w-2xl sm:mx-4 sm:my-6 md:mx-6 lg:mx-8"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
            {/* En-tête */}
            <div className="relative p-4 text-white bg-gradient-primary sm:p-6 lg:p-8">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-2 rounded-full transition-colors duration-200 hover:bg-white/20 sm:top-4 sm:right-4"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex justify-center items-center mx-auto mb-3 w-12 h-12 rounded-2xl bg-white/20 sm:mb-4 sm:w-16 sm:h-16"
                >
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
                </motion.div>
                <h2 className="mb-2 text-xl font-bold sm:text-2xl">Rejoignez la liste d&apos;attente</h2>
                <p className="text-sm text-white/90 sm:text-base">
                  Soyez parmi les premiers à découvrir la plateforme de démarches simplifiées du Gabon
                </p>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-4 sm:p-6 lg:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center sm:py-8"
                >
                  <CheckCircle className="mx-auto mb-3 w-12 h-12 text-primary-600 sm:mb-4 sm:w-16 sm:h-16" />
                  <h3 className="mb-2 text-lg font-bold text-slate-900 sm:text-xl">Inscription confirmée !</h3>
                  <p className="text-sm text-slate-600 sm:text-base">
                    Merci de votre intérêt. Nous vous contacterons dès que la plateforme sera disponible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        <User className="inline mr-2 w-4 h-4" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="px-3 py-2 w-full rounded-xl border backdrop-blur-sm transition-all duration-300 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white/50 sm:px-4 sm:py-3"
                        placeholder="Votre nom complet"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="block mb-2 text-sm font-medium text-slate-700">
                        <Mail className="inline mr-2 w-4 h-4" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="px-3 py-2 w-full rounded-xl border backdrop-blur-sm transition-all duration-300 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white/50 sm:px-4 sm:py-3"
                        placeholder="votre@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      <Building2 className="inline mr-2 w-4 h-4" />
                      Entreprise/Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-xl border backdrop-blur-sm transition-all duration-300 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white/50 sm:px-4 sm:py-3"
                      placeholder="Nom de votre organisation"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Poste/Fonction
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-xl border backdrop-blur-sm transition-all duration-300 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white/50 sm:px-4 sm:py-3"
                      placeholder="Votre poste ou fonction"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block mb-2 text-sm font-medium text-slate-700">
                      Démarches qui vous intéressent
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="px-3 py-2 w-full rounded-xl border backdrop-blur-sm transition-all duration-300 border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 bg-white/50 sm:px-4 sm:py-3"
                    >
                      <option value="">Sélectionnez vos démarches d&apos;intérêt</option>
                      {interests.map((interest) => (
                        <option key={interest} value={interest}>{interest}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-6 py-3 w-full text-base font-semibold text-white rounded-xl shadow-xl transition-all duration-300 bg-gradient-primary hover:shadow-2xl sm:px-8 sm:py-4 sm:text-lg"
                  >
                    Rejoindre la liste d&apos;attente
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
