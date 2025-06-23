
import { Calendar, Clock, MapPin } from "lucide-react";

export const EventSchedule = () => {
  const events = [
    {
      time: "9:00 AM",
      title: "Haldhi",
      description: "Join us for the vibrant Haldi celebration filled with love, laughter, and golden hues",
      location: "Our HomeTown, Mudirajupalem",
      icon: Calendar
    },
    {
      time: "6:00 PM",
      title: "Sangeeth",
      description: "Join us for a magical Sangeet night filled with music, dance, and joyous celebrations",
      location: "Mudirajupalem",
      icon: Clock
    },
    {
      time: "7:00 PM",
      title: "Wedding",
      description: "With immense love and gratitude, we invite you to join us as we unite in marriage and celebrate the beginning of our lifelong journey together",
      location: "Mudirajupalem",
      icon: MapPin
    },
    {
      time: "9:00 AM",
      title: "Reception",
      description: "Join us for an evening of love, laughter, and celebration at our Wedding Reception",
      location: "Mudirajupalem",
      icon: Clock
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-dancing text-5xl md:text-6xl text-royal-600 mb-4">
            Wedding Day Schedule
          </h2>
          <div className="w-24 h-px bg-gradient-royal mx-auto mb-6" />
          <p className="body-text text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for a day filled with love, laughter, and unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <div
                key={event.title}
                className={`luxury-card p-8 group hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-royal rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="elegant-text text-xl font-semibold">
                        {event.title}
                      </h3>
                      <span className="font-dancing text-lg text-blush-600 font-semibold">
                        {event.time}
                      </span>
                    </div>
                    <p className="body-text text-gray-600 mb-2 leading-relaxed">
                      {event.description}
                    </p>
                    <p className="text-sm text-royal-600 font-medium">
                      📍 {event.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
};
