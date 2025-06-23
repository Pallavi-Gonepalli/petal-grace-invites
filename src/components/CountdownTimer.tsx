
import { useState, useEffect } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const weddingDate = new Date('2025-08-01T23:58:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-royal-50 via-blush-50 to-ivory-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <h2 className="font-dancing text-5xl md:text-6xl text-royal-600 mb-8">
            Counting Down to Forever
          </h2>
          <div className="w-24 h-px bg-gradient-royal mx-auto mb-12" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Days', value: timeLeft.days },
            { label: '1Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={item.label}
              className={`luxury-card p-6 animate-scale-in sparkle-effect`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-playfair font-bold text-royal-700 mb-2 animate-pulse">
                {item.value.toString().padStart(2, '0')}
              </div>
              <div className="body-text text-sm uppercase tracking-wider text-gray-600">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <p className="body-text text-lg text-gray-600 animate-fade-in-up">
          Until we say "I do" and begin our forever together
        </p>
      </div>
    </section>
  );
};
