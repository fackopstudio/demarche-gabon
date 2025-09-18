'use client';

import { motion } from 'framer-motion';
import { Search, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Choisissez votre démarche',
    description: 'Parcourez notre liste complète de démarches administratives et sélectionnez celle qui vous concerne.',
    icon: Search,
    color: 'bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700',
    borderColor: 'border-primary-200/50'
  },
  {
    id: 2,
    title: 'Découvrez les pièces requises',
    description: 'Consultez la liste détaillée des documents nécessaires et des conditions à remplir.',
    icon: FileText,
    color: 'bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary-700',
    borderColor: 'border-secondary-200/50'
  },
  {
    id: 3,
    title: 'Suivez les instructions',
    description: 'Accédez aux étapes détaillées et aux contacts officiels pour finaliser votre démarche.',
    icon: CheckCircle,
    color: 'bg-gradient-to-br from-primary-200 to-secondary-200 text-slate-700',
    borderColor: 'border-primary-300/50'
  }
];

export default function Steps() {
  return (
    <section id="etapes" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-secondary-50/30 overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-5 blur-2xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-5 blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
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
            Comment ça{' '}
            <span className="bg-gradient-text bg-clip-text text-transparent">marche</span> ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Un processus simple en 3 étapes pour simplifier vos démarches administratives
          </motion.p>
        </motion.div>

        {/* Étapes */}
        <div className="relative">
          {/* Ligne de connexion pour desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-secondary-200 to-primary-200 transform -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-center">
                  {/* Numéro de l'étape */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${step.color} border-2 ${step.borderColor} mb-6 shadow-xl hover:shadow-2xl transition-all duration-300`}
                  >
                    <step.icon className="h-10 w-10" />
                  </motion.div>

                  {/* Contenu de l'étape */}
                  <div className="space-y-4">
                    <div className="relative pb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:bg-gradient-text group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {step.title}
                      </h3>
                      {/* Ligne décorative sous le titre */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full"></div>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Flèche pour mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-6 w-6 text-primary-400" />
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section d'exemple pratique */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 backdrop-blur-md bg-white/80 rounded-3xl shadow-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-8">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-slate-900 mb-4"
            >
              Exemple{' '}
              <span className="bg-gradient-text bg-clip-text text-transparent">concret</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-slate-600"
            >
              Voici comment obtenir votre carte d&apos;identité en quelques clics
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: 1, title: 'Sélection', description: 'Cliquez sur "Carte d\'identité"', color: 'bg-gradient-to-br from-primary-100 to-primary-200', textColor: 'text-primary-700' },
              { step: 2, title: 'Documents', description: 'Vérifiez la liste des pièces requises', color: 'bg-gradient-to-br from-secondary-100 to-secondary-200', textColor: 'text-secondary-700' },
              { step: 3, title: 'Action', description: 'Rendez-vous à la DGDI avec vos documents', color: 'bg-gradient-to-br from-primary-200 to-secondary-200', textColor: 'text-slate-700' }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center space-y-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                >
                  <span className={`text-2xl font-bold ${item.textColor}`}>{item.step}</span>
                </motion.div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
