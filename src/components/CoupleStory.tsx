
import { useState, useEffect, useRef } from "react";

export const CoupleStory = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const storySteps = [
    {
      year: "2018",
      title: "First Meeting",
      description: "We met at a coffee shop in downtown Portland on a rainy Tuesday morning. Sarah was reading her favorite book while Michael was working on his laptop.",
      position: "left"
    },
    {
      year: "2019",
      title: "First Date",
      description: "Our first official date was a hiking trip to Mount Hood. We talked for hours about our dreams, goals, and shared love for adventure.",
      position: "right"
    },
    {
      year: "2021",
      title: "Moving In",
      description: "We decided to take the next step and move in together. Our little apartment became our sanctuary filled with laughter, love, and countless memories.",
      position: "left"
    },
    {
      year: "2023",
      title: "The Proposal",
      description: "Michael proposed during a sunset picnic at our favorite spot by the lake. Sarah said yes through happy tears, and we celebrated with champagne under the stars.",
      position: "right"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = sectionRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-dancing text-5xl md:text-6xl text-royal-600 mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-px bg-gradient-royal mx-auto mb-6" />
          <p className="body-text text-lg text-gray-600 max-w-2xl mx-auto">
            Every love story is beautiful, but ours is our favorite. Here's how our journey began and continues to unfold.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-royal-200 via-blush-200 to-burgundy-200 rounded-full" />

          {storySteps.map((step, index) => (
            <div
              key={step.year}
              className={`timeline-item flex items-center mb-16 ${
                step.position === 'left' ? 'flex-row-reverse' : ''
              }`}
              data-index={index}
            >
              <div className={`w-1/2 ${step.position === 'left' ? 'pl-8' : 'pr-8'}`}>
                <div className={`luxury-card p-8 transition-all duration-700 transform ${
                  visibleSteps.includes(index) 
                    ? step.position === 'left' 
                      ? 'animate-slide-in-right' 
                      : 'animate-slide-in-left'
                    : 'opacity-0 translate-x-full'
                }`}>
                  <div className="sparkle-effect">
                    <h3 className="font-dancing text-3xl text-blush-600 mb-2">
                      {step.year}
                    </h3>
                    <h4 className="elegant-text text-xl font-semibold mb-4">
                      {step.title}
                    </h4>
                    <p className="body-text text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline dot */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                visibleSteps.includes(index) 
                  ? 'bg-gradient-royal scale-125' 
                  : 'bg-gray-300 scale-100'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
