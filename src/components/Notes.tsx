import { motion } from 'framer-motion';
import { useState } from 'react';

const Notes = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [btnHovered, setBtnHovered] = useState(false);

  const news = [
    {
      id: 1,
      title: 'Se viene Bafweek: estos son los desfiles con las tendencias otoño-invierno 2025',
      source: 'OHLALA',
      date: '6 marzo, 2025',
      image: 'https://bafweek.com.ar/wp-content/uploads/2025/03/bafweek.jpg-600x403.png'
    },
    {
      id: 2,
      title: 'Se viene el BAFWEEK, una semana de moda con todas las tendencias de la próxima temporada invernal',
      source: 'Para Ti',
      date: '28 febrero, 2025',
      image: 'https://bafweek.com.ar/wp-content/uploads/2025/03/PORTADA-BAF-749x561.jpg-600x403.png'
    },
    {
      id: 3,
      title: 'LA CHINA SUÁREZ CONFIRMÓ EL FUROR POR EL PRINT DE LEOPARDO CON LA FALDA QUE NO TE PUEDE FALTAR ESTA TEMPORADA',
      source: 'Chaco Prensa',
      date: '25 septiembre, 2024',
      image: 'https://bafweek.com.ar/wp-content/uploads/2024/09/sofia-sarkany-1867240-1-portada-600x403.jpg'
    }
  ];

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <motion.div 
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
              variants={itemVariants}
            >
              Notas
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600" 
              variants={itemVariants}
            >
              Descubre las últimas noticias sobre Buenos Aires Fashion Week
            </motion.p>
          </div>
          <motion.button 
            className="mt-4 md:mt-0 text-black font-medium flex items-center self-start"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
          >
            <span className="mr-1">Ver todas</span>
            <motion.span
              animate={{ x: btnHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </motion.button>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6" 
          variants={containerVariants}
        >
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden h-52">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: hoveredIndex === index ? 1.05 : 1 
                  }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-700">{item.source}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Notes;