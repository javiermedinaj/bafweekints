import AnimatedText from "../components/animated-text";

export default function Home() {
  return (
    <main className=" bg-white">
      <div className="container mx-auto px-4 md:px-8 pt-16 md:pt-24">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-full md:w-1/2 pt-8">
            <AnimatedText text="BUENOS" />
            <AnimatedText text="AIRES" delay={0.2} />
            <AnimatedText text="FASHION" delay={0.4} />
            <AnimatedText text="WEEK" delay={0.6} />
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 bg-blue-600 mix-blend-multiply z-10"></div>
              <img
                src="/placeholder.svg?height=800&width=600"
                alt="Fashion Week"
                className="object-cover"
              />
              <div className="absolute top-8 left-8 z-20">
                <h2 className="text-5xl md:text-6xl font-bold text-white">
                  BAFWEEK
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
