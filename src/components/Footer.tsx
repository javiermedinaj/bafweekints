import { FaInstagram, FaYoutube, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Footer = () => {
  const [hoveredBtn, setHoveredBtn] = useState(false);

  const socialIcons = [
    { icon: FaInstagram, link: 'https://instagram.com/bafweek' },
    { icon: FaYoutube, link: 'https://youtube.com/bafweek' },
    { icon: FaLinkedin, link: 'https://linkedin.com/company/bafweek' },
    { icon: FaTiktok, link: 'https://tiktok.com/@bafweek' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="flex space-x-4 mb-12"
            variants={containerVariants}
          >
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black rounded-full p-3 text-white hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              BUENOS AIRES FASHION WEEK
            </h2>
          </motion.div>
          <motion.div 
            className="mb-10 text-center"
            variants={itemVariants}
          >
            <p className="text-gray-600 text-sm mb-2">Organizado por</p>
            <div className="flex items-center justify-center space-x-6">
              <span className="font-medium">IRSA</span>
              <span className="font-medium">LA RURAL</span>
              <span className="font-medium">FAD CONNECTION</span>
            </div>
          </motion.div>
          
          <motion.button
            className="border border-black px-8 py-3 hover:bg-black hover:text-white transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={() => setHoveredBtn(true)}
            onMouseLeave={() => setHoveredBtn(false)}
            variants={itemVariants}
          >
            <span className="flex items-center gap-2">
              ACCESO A LA PRENSA
              <motion.span
                animate={{ x: hoveredBtn ? 3 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
    
          <motion.div 
            className="mt-12 text-sm text-gray-500"
            variants={itemVariants}
          >
            © {new Date().getFullYear()} BAFWEEK. Template desarrollado por Javier Medina.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;