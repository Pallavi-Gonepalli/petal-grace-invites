
import { useState } from "react";

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      url: "./images/Img1.jpeg",
      alt: "Engagement photo 1",
      category: "engagement"
    },
    {
      url: "./images/Img2.jpeg",
      alt: "Engagement photo 2",
      category: "engagement"
    },
    {
      url: "./images/Img3.jpeg",
      alt: "Pre-wedding photo 1",
      category: "prewedding"
    },
    {
      url: "./images/Img4.jpeg",
      alt: "Pre-wedding photo 2",
      category: "prewedding"
    },
    {
      url: "./images/IMG5.jpeg",
      alt: "Engagement photo 3",
      category: "engagement"
    },
    {
      url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80",
      alt: "Pre-wedding photo 3",
      category: "prewedding"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-dancing text-5xl md:text-6xl text-royal-600 mb-4">
            Our Journey in Pictures
          </h2>
          <div className="w-24 h-px bg-gradient-royal mx-auto mb-6" />
          <p className="body-text text-lg text-gray-600">
            Capturing the moments that led us to this beautiful day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`luxury-card p-2 overflow-hidden group cursor-pointer animate-fade-in-up hover:scale-105 transition-all duration-300`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(photo.url)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-dancing text-lg capitalize">
                      {photo.category === 'engagement' ? 'Engagement' : 'Pre-Wedding'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Selected photo"
                className="max-w-full max-h-full object-contain animate-scale-in"
              />
              <button
                className="absolute top-4 right-4 text-white text-4xl hover:text-blush-300 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="body-text text-gray-600 mb-6">
            Want to see more? Follow our journey on social media
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-royal text-white px-6 py-3 rounded-lg font-cormorant font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              #SarahAndMichael2024
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
