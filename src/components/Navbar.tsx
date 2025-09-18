'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import WaitlistModal from './WaitlistModal';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Démarches', href: '#demarches' },
    { name: 'Comment ça marche', href: '#etapes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b shadow-lg backdrop-blur-md bg-white/80 border-white/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <Image
                src="/demarches-simplifiees-logo/demarches-simplifiees-logo.png"
                alt="Démarches Simplifiées Gabon"
                width={40}
                height={40}
                className="object-contain w-8 h-8"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-text">
                Démarches Simplifiées
              </span>
              <span className="-mt-1 text-xs text-slate-600">Gabon</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden items-center space-x-8 md:flex"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="relative font-medium transition-all duration-300 text-slate-700 hover:text-primary-600 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsWaitlistOpen(true)}
              className="overflow-hidden relative px-6 py-2 font-semibold text-white rounded-xl shadow-lg transition-all duration-300 bg-gradient-primary hover:shadow-xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 from-primary-600 to-secondary-600 group-hover:opacity-100"></div>
              <span className="relative z-10">Liste d&apos;attente</span>
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:hidden"
          >
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-colors duration-200 text-slate-700 hover:text-primary-600 focus:outline-none focus:text-primary-600 hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t backdrop-blur-md md:hidden bg-white/90 border-slate-200/50"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    href={item.href}
                    className="block px-3 py-2 font-medium rounded-lg transition-all duration-200 text-slate-700 hover:text-primary-600 hover:bg-slate-50/80"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="pt-2">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsWaitlistOpen(true);
                    }}
                    className="px-6 py-3 w-full font-semibold text-white rounded-xl shadow-lg transition-all duration-300 bg-gradient-primary hover:shadow-xl"
                  >
                    Liste d&apos;attente
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal de liste d'attente */}
      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
      />
    </nav>
  );
}
