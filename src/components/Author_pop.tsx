import { motion } from 'framer-motion';

const Author_pop = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  const renderMarqueeItems = () => {
    const items = [];
    for (let i = 0; i < 6; i++) {
      items.push(
        <div key={i} className="mx-8 whitespace-nowrap">
          <h3 className="text-2xl md:text-3xl font-medium">
            POP UPs –&nbsp; <strong>DE AUTOR&nbsp;</strong> –
          </h3>
        </div>
      );
    }
    return items;
  };

  return (
    <div>
      <div className="overflow-hidden bg-gray-100 py-6">
        <div className="relative w-full">
          <motion.div
            className="flex"
            variants={marqueeVariants}
            animate="animate"
          >
            {renderMarqueeItems()}
          </motion.div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto py-16 px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="https://bafweek.com.ar/wp-content/uploads/2024/08/IM-01-1-1024x749.jpg" 
                alt="Istituto Marangoni" 
                className="w-full h-auto"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6">ISTITUTO MARANGONI</h3>
              <p className="text-lg leading-relaxed">
                En el marco de BAFWEEK Primavera-Verano 2025, FAD Connection presenta el Concurso Marangoni, 
                un beneficio exclusivo para los diseñadores que forman parte de esta edición del evento.
              </p>
              <motion.button 
                className="mt-8 border border-white px-6 py-3 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Más información
                <span>→</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author_pop;
