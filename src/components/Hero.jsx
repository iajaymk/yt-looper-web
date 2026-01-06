import LooperUI from "./LooperUI";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-white mb-6 text-2xl md:text-4xl">
            Loop Your Favorite Music on YouTube
          </h1>
          <p className="text-gray-300 text-md md:text-xl mb-8 md:mb-0">
            Chrome Extension for music lovers. Loop any section of any track on
            YouTube Music.
          </p>
        </div>
        <LooperUI />
      </div>
    </section>
  );
};

export default Hero;
