
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guestCount: "1",
    dietaryRestrictions: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "RSVP Submitted Successfully! 💕",
      description: "Thank you for your response. We can't wait to celebrate with you!",
    });

    setFormData({
      name: "",
      email: "",
      attendance: "",
      guestCount: "1",
      dietaryRestrictions: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-blush-50 to-ivory-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-dancing text-5xl md:text-6xl text-royal-600 mb-4">
            Please RSVP
          </h2>
          <div className="w-24 h-px bg-gradient-royal mx-auto mb-6" />
          <p className="body-text text-lg text-gray-600">
            We hope you can join us on our special day. Please respond by August 15th, 2024
          </p>
        </div>

        <div className="luxury-card p-8 md:p-12 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="body-text font-semibold text-royal-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-royal-200 rounded-lg focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all duration-300 body-text"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="body-text font-semibold text-royal-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-royal-200 rounded-lg focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all duration-300 body-text"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="body-text font-semibold text-royal-700">
                  Will you attend? *
                </label>
                <select
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-royal-200 rounded-lg focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all duration-300 body-text"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I'll be there! 🎉</option>
                  <option value="no">Sorry, can't make it 😢</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="body-text font-semibold text-royal-700">
                  Number of Guests
                </label>
                <select
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full p-4 border border-royal-200 rounded-lg focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all duration-300 body-text"
                >
                  <option value="1">Just me</option>
                  <option value="2">2 people</option>
                  <option value="3">3 people</option>
                  <option value="4">4 people</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="body-text font-semibold text-royal-700">
                Dietary Restrictions or Allergies
              </label>
              <input
                type="text"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full p-4 border border-royal-200 rounded-lg focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all duration-300 body-text"
                placeholder="Please let us know of any dietary needs"
              />
            </div>

            <div className="space-y-2">
              <label className="body-text font-semibold text-royal-700">
                Special Message (Optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 border border-royal-200 rounded-lg focus:ring-2 focus:ring-royal-400 focus:border-transparent transition-all duration-300 resize-none body-text"
                placeholder="Share your wishes or any special requests..."
              />
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-gradient-royal text-white px-12 py-4 rounded-lg font-cormorant text-xl font-semibold transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'hover:scale-105 hover:shadow-lg sparkle-effect'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Send RSVP 💕'}
              </button>
            </div>
          </form>
        </div>

        <div className="text-center mt-12 animate-fade-in-up">
          <p className="body-text text-gray-600 mb-4">
            Questions? Feel free to reach out to us directly
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8">
            <a href="mailto:sarah@email.com" className="text-blush-600 hover:text-blush-700 transition-colors duration-300">
              Sarah: sarah@email.com
            </a>
            <a href="mailto:michael@email.com" className="text-royal-600 hover:text-royal-700 transition-colors duration-300">
              Michael: michael@email.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
