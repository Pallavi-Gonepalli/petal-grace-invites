
import { useState } from "react";
import { MapPin } from "lucide-react";

export const LocationSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-ivory-50 to-blush-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-dancing text-5xl md:text-6xl text-royal-600 mb-4">
            Wedding Location
          </h2>
          <div className="w-24 h-px bg-gradient-royal mx-auto mb-6" />
          <p className="body-text text-lg text-gray-600">
            Let’s gather at our home in Mudirajupalem to celebrate this joyous wedding occasion together.....
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="luxury-card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-royal rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="elegant-text text-2xl font-semibold">
                  Ramalayam Temple
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-cormorant text-lg font-semibold text-royal-700 mb-2">
                    Address
                  </h4>
                  <p className="body-text text-gray-600">
                    Ramalayam Temple Street<br />
                    Mudirajupalem, Gannavaram
                  </p>
                </div>
                
               
              
              <div className="mt-8 space-y-3">
                <button className="w-full bg-gradient-royal text-white py-3 px-6 rounded-lg font-cormorant text-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Get Directions
                </button>
                
              </div>
            </div>
          </div>

          <div className={`animate-slide-in-right transition-all duration-700 ${mapLoaded ? 'animate-scale-in' : ''}`}>
            <div className="luxury-card p-2 overflow-hidden">
              <div 
                className="w-full h-96 bg-gradient-to-br from-royal-100 to-blush-100 rounded-lg flex items-center justify-center cursor-pointer group"
                onClick={() => setMapLoaded(true)}
              >
                {!mapLoaded ? (
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-royal-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="body-text text-royal-600 font-semibold">
                      Click to view interactive map
                    </p>
                  </div>
                ) : (
                  <div className="w-full h-full bg-cover bg-center rounded-lg animate-scale-in"
                       style={{
                         backgroundImage: `url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&q=80')`
                       }}>
                    <div className="w-full h-full bg-gradient-to-t from-black/30 to-transparent rounded-lg flex items-end justify-center">
                      <div className="text-white text-center p-6">
                        <h4 className="font-dancing text-2xl mb-2">Ramalayam Temple</h4>
                        <p className="text-sm">Mudirajupalem, Gannavaram</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
