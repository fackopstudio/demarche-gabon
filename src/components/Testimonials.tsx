'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Marie Nguema',
    role: 'Étudiante',
    location: 'Libreville',
    content: 'J\'ai enfin compris facilement comment obtenir ma carte d\'identité. Plus besoin de faire plusieurs allers-retours !',
    rating: 5,
    avatar: '👩🏾‍🎓'
  },
  {
    id: 2,
    name: 'Jean-Baptiste Mba',
    role: 'Entrepreneur',
    location: 'Port-Gentil',
    content: 'La création de mon entreprise était un casse-tête. Maintenant, je sais exactement quels documents préparer.',
    rating: 5,
    avatar: '👨🏾‍💼'
  },
  {
    id: 3,
    name: 'Fatou Diallo',
    role: 'Mère de famille',
    location: 'Franceville',
    content: 'Gagner du temps sur les démarches administratives, c\'est précieux quand on a des enfants. Merci !',
    rating: 5,
    avatar: '👩🏾‍👧🏾'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous simplifions la vie des Gabonais au quotidien
          </p>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Icône de citation */}
              <div className="absolute -top-3 -left-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <Quote className="h-4 w-4 text-primary-600" />
                </div>
              </div>

              {/* Note */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Contenu du témoignage */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Informations de l'utilisateur */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Utilisateurs satisfaits</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Démarches disponibles</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">75%</div>
              <div className="text-primary-100">Temps économisé</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez la communauté
          </h3>
          <p className="text-gray-600 mb-6">
            Simplifiez vos démarches administratives dès aujourd&apos;hui
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold text-lg shadow-lg"
          >
            Commencer maintenant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
