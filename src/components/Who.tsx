import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Who() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContent = [
    "BAFWEEK es la plataforma endoser de moda argentina que invita a presentar sus colecciones a marcas líderes, diseñadores consagrados y talentos emergentes en sus dos ediciones anuales.",
    "Llevando propuestas creativas con desfiles, shows performáticos y experiencias únicas, en puntos icónicos de la Ciudad de Buenos Aires.",
    "Aspirando a ser un espacio de formación y difusión de las últimas tendencias del país."
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Quiénes somos</h3>

        <div ref={containerRef} className="space-y-12 md:space-y-16">
          {textContent.map((paragraph, idx) => (
            <AnimatedParagraph key={idx} text={paragraph} />
          ))}
        </div>

        <div className="h-px w-full bg-black mt-16 md:mt-24"></div>
      </div>
    </section>
  );
}

interface AnimatedParagraphProps {
  text: string;
}

function AnimatedParagraph({ text }: AnimatedParagraphProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0.75"] 
  });

  const words = text.split(" ");
  
  return (
    <div ref={ref} className="overflow-hidden">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[3vw] leading-snug md:leading-relaxed font-medium">
        {words.map((word, i) => (
          <WordAnimation 
            key={i} 
            word={word} 
            scrollYProgress={scrollYProgress}
            totalWords={words.length}
            wordIndex={i}
          />
        ))}
      </h2>
    </div>
  );
}

function WordAnimation({ word, scrollYProgress, totalWords, wordIndex }: { 
  word: string, 
  scrollYProgress: any,
  totalWords: number,
  wordIndex: number
}) {
  const progress = useTransform(
    scrollYProgress,
    [0, 0.2 + wordIndex / (totalWords * 2), 0.8 - wordIndex / (totalWords * 2), 1],
    [0, 1, 1, 0]
  );
  
  const textColor = useTransform(
    progress,
    [0, 1],
    ["#9CA3AF", "#000000"]
  );

  return (
    <motion.span 
      className="inline-block mr-[0.3em]"
      style={{ 
        color: textColor,
        opacity: useTransform(progress, [0, 0.1], [0.6, 1]) 
      }}
      initial={{ opacity: 0.6, color: "#9CA3AF" }}
    >
      {word}
    </motion.span>
  );
}