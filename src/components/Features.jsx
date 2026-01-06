import { Repeat, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Repeat,
      title: "Seamless Looping",
      description:
        "Loop any YouTube music track with precision. Set custom start and end points for the perfect repeat.",
    },
    {
      icon: Zap,
      title: "Instant Activation",
      description:
        "Simple one-click interface. No complicated setup - just install and start looping.",
    },
  ];

  return (
    <section id="features" className="bg-black/30 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-2xl md:text-4xl">Features</h2>
          <p className="text-gray-400 text-md md:text-xl max-w-2xl mx-auto">
            Everything you need to master your favorite songs, practice
            routines, or just enjoy music your way.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all hover:scale-105"
            >
              <div className="bg-red-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-red-500/30">
                <feature.icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
