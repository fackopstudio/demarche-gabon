'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import WaitlistModal from './WaitlistModal';

export default function Hero() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section id="accueil" className="relative pt-16 bg-gradient-to-br from-slate-50 via-primary-50 to-secondary-50 min-h-screen flex items-center overflow-hidden">
      {/* Éléments décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full opacity-5 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Logo et titre */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className="relative">
                  <Image
                    src="/demarches-simplifiees-logo/demarches-simplifiees-logo.png"
                    alt="Démarches Simplifiées Gabon"
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                    priority
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl md:text-3xl font-bold bg-gradient-text bg-clip-text text-transparent">
                    Démarches Simplifiées
                  </h1>
                  <p className="text-sm text-slate-600 font-medium">République Gabonaise</p>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
              >
                Simplifiez vos{' '}
                <span className="bg-gradient-text bg-clip-text text-transparent">démarches</span>{' '}
                administratives au{' '}
                <span className="bg-gradient-text bg-clip-text text-transparent">Gabon</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-slate-600 leading-relaxed"
              >
                Toutes les informations officielles, regroupées en un seul endroit.
                Gagnez du temps et évitez les déplacements inutiles.
              </motion.p>
            </div>

            {/* Points clés */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              {[
                'Informations officielles et à jour',
                'Processus simplifiés et clairs',
                'Gain de temps considérable',
                'Disponible 24h/24'
              ].map((point, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="flex items-center space-x-3 group"
                >
                  <div className="p-1 rounded-full bg-gradient-primary">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-200">{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWaitlistOpen(true)}
                className="relative bg-gradient-primary text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Rejoindre la liste d&apos;attente</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative backdrop-blur-md bg-white/80 border-2 border-primary-500/20 text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-50/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Nous contacter
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Illustration avec glassmorphism */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative backdrop-blur-md bg-white/80 rounded-3xl shadow-2xl p-8 space-y-6 border border-white/20">
              {/* Simulation d'interface */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-slate-200 rounded-full h-2"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-primary rounded w-3/4"></div>
                  <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                </div>

                {/* Cartes de démarches simulées */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '🛂', title: 'Passeport', color: 'bg-gradient-to-br from-primary-100 to-primary-200', textColor: 'text-primary-700' },
                    { icon: '🆔', title: 'CNI', color: 'bg-gradient-to-br from-secondary-100 to-secondary-200', textColor: 'text-secondary-700' },
                    { icon: '💼', title: 'Entreprise', color: 'bg-gradient-to-br from-primary-200 to-secondary-200', textColor: 'text-slate-700' },
                    { icon: '🎓', title: 'Bourse', color: 'bg-gradient-to-br from-secondary-200 to-primary-200', textColor: 'text-slate-700' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`${item.color} p-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className={`text-sm font-medium ${item.textColor}`}>{item.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Éléments décoratifs flottants */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-full opacity-20 blur-sm"
            ></motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 blur-sm"
            ></motion.div>

            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-primary-300 to-secondary-300 rounded-full opacity-10 blur-xl"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal de liste d'attente */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </section>
  );
}



