import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav className="border-b border-gray-200 py-4 px-4 md:px-8 bg-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-tighter">
            BAFWEEK
          </a>

          <button
            className="md:hidden relative z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-gray-600 transition-colors">
              Ediciones
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Diseñadores
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Notas
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">
              Quiénes somos
            </a>
            <a
              href="#"
              className="border border-black px-4 py-1 hover:bg-black hover:text-white transition-colors"
            >
              Última edición
            </a>
          </div>

          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden z-50 shadow-lg">
              <div className="flex flex-col p-6 space-y-6">
                <a
                  href="#"
                  className="hover:text-gray-600 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ediciones
                </a>
                <a
                  href="#"
                  className="hover:text-gray-600 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Diseñadores
                </a>
                <a
                  href="#"
                  className="hover:text-gray-600 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Notas
                </a>
                <a
                  href="#"
                  className="hover:text-gray-600 transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Quiénes somos
                </a>
                <a
                  href="#"
                  className="border border-black px-4 py-2 text-center hover:bg-black hover:text-white transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Última edición
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
