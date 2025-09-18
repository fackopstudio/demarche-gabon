'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FileText, 
  GraduationCap, 
  CreditCard, 
  Building2, 
  Receipt, 
  Landmark,
  ArrowRight,
  Clock
} from 'lucide-react';
import WaitlistModal from './WaitlistModal';

const demarches = [
  {
    id: 1,
    title: 'Passeport',
    description: 'Renouvellement et obtention de passeport',
    icon: FileText,
    color: 'bg-gradient-to-br from-primary-100 to-primary-200 text-primary-700',
    borderColor: 'border-primary-200/50',
    institution: 'DGDI',
    duration: '15-30 jours',
    documents: '5 pièces requises'
  },
  {
    id: 2,
    title: 'Carte d\'identité',
    description: 'CNI nationale et renouvellement',
    icon: CreditCard,
    color: 'bg-gradient-to-br from-secondary-100 to-secondary-200 text-secondary-700',
    borderColor: 'border-secondary-200/50',
    institution: 'DGDI',
    duration: '7-15 jours',
    documents: '3 pièces requises'
  },
  {
    id: 3,
    title: 'Création d\'entreprise',
    description: 'Formalités de création d\'entreprise',
    icon: Building2,
    color: 'bg-gradient-to-br from-primary-200 to-secondary-200 text-slate-700',
    borderColor: 'border-primary-300/50',
    institution: 'ANPI',
    duration: '5-10 jours',
    documents: '8 pièces requises'
  },
  {
    id: 4,
    title: 'Bourse d\'études',
    description: 'Demande de bourse nationale',
    icon: GraduationCap,
    color: 'bg-gradient-to-br from-secondary-200 to-primary-200 text-slate-700',
    borderColor: 'border-secondary-300/50',
    institution: 'Ministère Éducation',
    duration: '30-45 jours',
    documents: '6 pièces requises'
  },
  {
    id: 5,
    title: 'Impôts et taxes',
    description: 'Déclaration et paiement des impôts',
    icon: Receipt,
    color: 'bg-gradient-to-br from-accent-error/10 to-accent-error/20 text-accent-error',
    borderColor: 'border-accent-error/30',
    institution: 'DGFiP',
    duration: 'Immédiat',
    documents: '2 pièces requises'
  },
  {
    id: 6,
    title: 'Certificats mairie',
    description: 'Certificats d\'état civil',
    icon: Landmark,
    color: 'bg-gradient-to-br from-accent-info/10 to-accent-info/20 text-accent-info',
    borderColor: 'border-accent-info/30',
    institution: 'Mairie',
    duration: '1-3 jours',
    documents: '2 pièces requises'
  }
];

export default function Demarches() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section id="demarches" className="relative py-20 bg-gradient-to-br from-slate-50 via-white to-primary-50/30 overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-5 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Démarches{' '}
              <span className="bg-gradient-text bg-clip-text text-transparent">populaires</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-xl text-slate-600"
          >
            Accédez rapidement aux informations essentielles pour vos démarches administratives les plus courantes
          </motion.p>
        </motion.div>

        {/* Grille de démarches */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {demarches.map((demarche, index) => (
            <motion.div
              key={demarche.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative backdrop-blur-md bg-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${demarche.borderColor} p-6 group overflow-hidden`}
            >
              {/* Effet de brillance au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* En-tête de la carte */}
              <div className="flex justify-between items-start mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`p-4 rounded-xl shadow-lg ${demarche.color}`}
                >
                  <demarche.icon className="w-6 h-6" />
                </motion.div>
                <span className="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100/80 backdrop-blur-sm rounded-full border border-slate-200/50">
                  {demarche.institution}
                </span>
              </div>

              {/* Contenu principal */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:bg-gradient-text group-hover:bg-clip-text group-hover:text-transparent">
                  {demarche.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {demarche.description}
                </p>

                {/* Informations pratiques */}
                <div className="pt-3 space-y-3">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-200"
                  >
                    <div className="p-1 rounded-full bg-primary-100">
                      <Clock className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="font-medium">{demarche.duration}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-sm text-slate-500 group-hover:text-slate-700 transition-colors duration-200"
                  >
                    <div className="p-1 rounded-full bg-secondary-100">
                      <FileText className="w-4 h-4 text-secondary-600" />
                    </div>
                    <span className="font-medium">{demarche.documents}</span>
                  </motion.div>
                </div>
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex justify-center items-center py-3 mt-6 space-x-2 w-full font-semibold rounded-xl transition-all duration-300 bg-gradient-primary text-white shadow-lg hover:shadow-xl group-hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Voir plus</span>
                <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsWaitlistOpen(true)}
            className="relative px-10 py-5 text-lg font-bold text-white rounded-2xl shadow-2xl transition-all duration-300 bg-gradient-primary hover:shadow-3xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Rejoindre la liste d&apos;attente</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </motion.button>
        </motion.div>
      </div>

      {/* Modal de liste d'attente */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  );
}
