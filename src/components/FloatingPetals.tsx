
export const FloatingPetals = () => {
  const petals = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal}
          className="absolute animate-petal-fall opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <div className="w-4 h-4 bg-blush-300 rounded-full transform rotate-45" />
        </div>
      ))}
      
      {/* Additional sparkle elements */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-royal-400 animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
};
