'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  MessageCircle,
  ExternalLink,
  Heart
} from 'lucide-react';

const footerLinks = {
  'Démarches': [
    { name: 'Passeport', href: '#passeport' },
    { name: 'Carte d\'identité', href: '#cni' },
    { name: 'Création d\'entreprise', href: '#entreprise' },
    { name: 'Bourse d\'études', href: '#bourse' },
    { name: 'Impôts et taxes', href: '#impots' },
    { name: 'Certificats', href: '#certificats' }
  ],
  'Institutions': [
    { name: 'DGDI', href: '#dgdi' },
    { name: 'ANPI', href: '#anpi' },
    { name: 'DGFiP', href: '#dgfip' },
    { name: 'Mairies', href: '#mairies' },
    { name: 'CNSS', href: '#cnss' },
    { name: 'Ministère Éducation', href: '#education' }
  ],
  'Support': [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Mentions légales', href: '#mentions' },
    { name: 'Politique de confidentialité', href: '#confidentialite' },
    { name: 'Conditions d\'utilisation', href: '#conditions' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
  { name: 'WhatsApp', icon: MessageCircle, href: '#', color: 'hover:text-green-600' },
  { name: 'Email', icon: Mail, href: 'mailto:contact@demarches-gabon.ga', color: 'hover:text-red-600' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contenu principal */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Démarches Gabon</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Simplifiez vos démarches administratives au Gabon. 
              Toutes les informations officielles en un seul endroit.
            </p>
            
            {/* Informations de contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-sm">Libreville, Gabon</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-sm">077538914</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-sm">contact@demarches-gabon.ga</span>
              </div>
            </div>
          </motion.div>

          {/* Liens de navigation */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary-400">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                    >
                      {link.name}
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Séparateur */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© 2024 Démarches Gabon. Tous droits réservés.</span>
              <Heart className="h-4 w-4 text-red-500" />
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Suivez-nous :</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors duration-200`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Note de service */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 p-4 bg-gray-800 rounded-lg"
        >
          <p className="text-gray-300 text-sm text-center">
            <strong>Note importante :</strong> Cette plateforme fournit des informations à titre indicatif. 
            Pour toute démarche officielle, veuillez vous référer aux institutions compétentes.
          </p>
        </motion.div>

        {/* Crédit Fackop Studio */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-gray-700"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-gray-400 text-sm">
              Plateforme conçue et développée avec ❤️ par
            </p>
            <motion.a
              href="https://fackop.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-primary rounded-lg text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <span>Fackop Studio</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
