
import { HeroSection } from "@/components/HeroSection";
import { CoupleStory } from "@/components/CoupleStory";
import { EventSchedule } from "@/components/EventSchedule";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LocationSection } from "@/components/LocationSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { RSVPForm } from "@/components/RSVPForm";
import { FloatingPetals } from "@/components/FloatingPetals";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-elegant overflow-x-hidden">
      <FloatingPetals />
      <HeroSection />
      <CountdownTimer />
      <EventSchedule />
      <LocationSection />
      <PhotoGallery />
      <RSVPForm />
    </div>
  );
};

export default Index;
