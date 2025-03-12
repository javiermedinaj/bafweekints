import { useEffect, useRef } from "react";

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

export default function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    textElement.style.opacity = "0";
    textElement.style.transform = "translateY(20px)";

    const timer = setTimeout(() => {
      textElement.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      textElement.style.opacity = "1";
      textElement.style.transform = "translateY(0)";

      textElement.addEventListener("mouseenter", () => {
        textElement.style.transform = "translateY(-5px)";
      });

      textElement.addEventListener("mouseleave", () => {
        textElement.style.transform = "translateY(0)";
      });
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      textElement.removeEventListener("mouseenter", () => {});
      textElement.removeEventListener("mouseleave", () => {});
    };
  }, [delay]);

  return (
    <h1
      ref={textRef}
      className="text-7xl md:text-8xl lg:text-9xl font-bold leading-tight tracking-tighter"
    >
      {text}
    </h1>
  );
}
