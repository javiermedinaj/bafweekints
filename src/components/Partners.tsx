import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      name: "Mercedes-Benz",
      logo: "https://bafweek.com.ar/wp-content/uploads/2024/03/mercedeslogo2.png",
      url: "https://www.mercedes-benz.com.ar/"
    },
    {
      name: "Mercado Libre",
      logo: "https://bafweek.com.ar/wp-content/uploads/2024/08/Copia-de-ML-Pluma-Fill-Izquierda-ColorPNG.png",
      url: "https://sustentabilidadmercadolibre.com/"
    },
    {
      name: "Puma",
      logo: "https://bafweek.com.ar/wp-content/uploads/2024/08/Puma-Vertical-3.png",
      url: "https://ar.puma.com/"
    },
    {
      name: "Avon",
      logo: "https://bafweek.com.ar/wp-content/uploads/2024/08/Avon-Logo.png",
      url: "https://www.avon.com.ar/"
    },
    {
      name: "TRESemmé",
      logo: "https://bafweek.com.ar/wp-content/uploads/2024/08/Copia-de-LOGO-HD-1024X747.png",
      url: "https://www.tresemme.com/ar/home.html"
    },
    {
      name: "Infobae",
      logo: "https://bafweek.com.ar/wp-content/uploads/2024/01/Logo__Infobae.png",
      url: "https://www.infobae.com/"
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nuestros partners
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partners.map((partner) => (
            <motion.a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 h-24 transition-all"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                filter: "brightness(1.2)"
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;