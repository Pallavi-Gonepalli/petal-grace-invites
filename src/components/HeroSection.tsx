
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(254, 247, 247, 0.8), rgba(251, 242, 228, 0.9)), url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80')`
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 floating-petals" />
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="luxury-card p-12 max-w-4xl mx-auto">
          <h1 className="font-dancing text-6xl md:text-8xl text-royal-600 mb-4 animate-float">
            Sarah & Michael
          </h1>
          <div className="w-32 h-px bg-gradient-royal mx-auto mb-6" />
          <h2 className="elegant-text text-2xl md:text-3xl mb-6">
            Together with our families
          </h2>
          <p className="body-text text-xl md:text-2xl mb-8">
            Request the honor of your presence<br />
            at the celebration of our love
          </p>
          <div className="space-y-2">
            <p className="elegant-text text-xl font-semibold text-royal-700">
              Saturday, September 15th, 2024
            </p>
            <p className="body-text text-lg text-gray-600">
              Sunset Gardens, Napa Valley
            </p>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-royal-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-royal-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
