import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const Newsletters = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHoveredBtn, setIsHoveredBtn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el email
    console.log('Email enviado:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-white text-black py-16 px-4 md:px-8">
      <motion.div 
        className="container mx-auto max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div className="text-center mb-2" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Newsletter</h2>
          <p className="text-lg text-gray-900">
            Mantente al día con las últimas novedades, tendencias y eventos exclusivos de BAFWEEK
          </p>
        </motion.div>

        <motion.div 
          className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-xl"
          variants={itemVariants}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl md:text-2xl font-medium mb-2">Suscríbete a nuestra newsletter</h3>
            <p className="text-gray-900">
              Recibe información exclusiva directamente en tu bandeja de entrada
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full px-4 py-3 bg-white/5 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium rounded-md hover:bg-black/90 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setIsHoveredBtn(true)}
                onMouseLeave={() => setIsHoveredBtn(false)}
                disabled={isSubmitted}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitted ? 'Suscrito!' : 'Suscribirse'}
                  {!isSubmitted && (
                    <motion.span
                      animate={{ x: isHoveredBtn ? 3 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  )}
                </span>
              </motion.button>
            </div>
            
            <p className="mt-4 text-sm text-gray-900 text-center">
              Nunca compartiremos tu información con terceros. Puedes darte de baja en cualquier momento.
            </p>
          </form>
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-wrap justify-center gap-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <FaCheck className="h-6 w-6 text-gray-900" />
            <span className="text-gray-900">Contenido exclusivo</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck className="h-6 w-6 text-gray-900" />
            <span className="text-gray-900">Primero en enterarte</span>
          </div>
          <div className="flex items-center gap-3">
            <FaCheck className="h-6 w-6 text-gray-900" />
            <span className="text-gray-900">Invitaciones especiales</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Newsletters;