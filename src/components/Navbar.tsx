import { useState } from "react";
import { Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 py-4 px-4 md:px-8 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-tighter">
          BAFWEEK
        </a>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
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
          <button className="hover:text-gray-600 transition-colors">
            <Search size={20} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 md:hidden z-50">
            <div className="flex flex-col p-4 space-y-4">
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
                className="border border-black px-4 py-1 text-center hover:bg-black hover:text-white transition-colors"
              >
                Última edición
              </a>
              <button className="flex items-center justify-center hover:text-gray-600 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
