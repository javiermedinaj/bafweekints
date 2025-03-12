import { ArrowRight } from "lucide-react";

export default function Section() {
  return (
    <section className="bg-white py-8 md:py-12 px-4">
      <div className="w-full md:px-8">
        <div className="flex flex-col items-start max-w-8xl mx-auto border-r-2 border-black pr-4">
          <div className="w-full mb-2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Edición
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              otoño invierno_25
            </h1>
            <p className="text-lg mt-2">Del 6 al 14 de Marzo</p>
          </div>

          {/* Reduced height gap */}
          <div className="h-10 w-full md:h-16"></div>
          
          <div className="w-full flex justify-center">
            <img
              src="section1.png"
              alt="Marcas y diseñadores"
              className="w-full h-auto object-contain max-h-[400px]"
            />
          </div>

          <div className="w-full mt-6 border-2 border-black"></div>
        </div>
      </div>

      {/*Section 2 - reduced vertical spacing */}
      <div className="md:px-8 mt-8 md:mt-12">
        <div className="max-w-8xl mx-auto relative">
          <div className="relative w-full py-8 md:py-12">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <iframe
                className="w-full h-full object-cover min-h-[200px]"
                src="https://www.youtube.com/embed/jbokFrebcLo?playlist=jbokFrebcLo&iv_load_policy=3&enablejsapi=1&disablekb=1&autoplay=1&controls=0&showinfo=0&rel=0&loop=1&origin=https%3A%2F%2Fbafweek.com.ar&widgetid=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div className="relative z-20 px-4 md:px-8">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
                <div className="w-full md:w-1/2 text-white mb-8 md:mb-0">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                    Reviví los
                    <br />
                    <strong>desfiles completos</strong>
                  </h1>

                  <div className="mt-4 md:mt-6">
                    <a
                      href="https://www.youtube.com/@BAFWEEKOFICIAL/streams"
                      className="inline-flex items-center text-white px-6 py-2 font-medium relative group"
                    >
                      <span className="mr-3 text-xl">Ver</span>
                      <span className="relative">
                        <ArrowRight
                          className="w-6 h-6 transition-transform group-hover:translate-x-1"
                          color="white"
                          strokeWidth={1.5}
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}