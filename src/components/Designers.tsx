import { motion } from "framer-motion";
import { useState } from "react";

const Designers = () => {
  const [isHovered, setIsHovered] = useState(false);

  const designers = [
    {
      name: "Limay",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2025/03/Portada-LIMAY.jpg",
    },
    {
      name: "Sofia",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2024/08/SOFIA-SARKANY-Portada.png",
    },
    {
      name: "Pucheta",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2024/08/PUCHETAPAZ-Portada.png",
    },
    // { name: 'Mario', image: '/images/mario.jpg' },
  ];

  const designersFirstColumns = [
    {
      name: "Void",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2025/03/Portada-HARVEY2.jpg",
    },
    {
      name: "Javi",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2025/03/Portada-GONE.jpg",
    },
    {
      name: "Medina",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2025/03/Portada-LABEL99.jpg",
    },
    {
      name: "Empty",
      image:
        "https://bafweek.com.ar/wp-content/uploads/2025/03/Portada-SCHUCHNER.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-16 px-4 md:px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-10">
        <motion.div
          className="grid grid-cols-2 gap-4 h-full"
          variants={containerVariants}
        >
          {designersFirstColumns.map((designer, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <motion.img
                src={designer.image}
                alt={designer.name}
                className="w-full h-64 object-cover"
                whileHover={{ scale: 0.8 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 flex items-end justify-center pb-4 text-white text-center">
                <span className="px-2 font-medium">{designer.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Diseñadores informacion  */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col justify-between h-full"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            variants={itemVariants}
          >
            Diseñadores
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-8"
            variants={itemVariants}
          >
            Conoce los diseñadores que hacen posible nuestra visión creativa.
            Cada uno aporta un estilo único y una perspectiva innovadora a
            nuestras colecciones.
          </motion.p>

          <motion.div className="space-y-4 mb-8" variants={containerVariants}>
            {designers.map((designer) => (
              <motion.div
                key={designer.name}
                className="flex items-center gap-4"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-gray-800">
                  {designer.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className="bg-black text-white px-8 py-3 rounded-md font-medium self-start hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="flex items-center gap-2">
              Ver más
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Designers;
