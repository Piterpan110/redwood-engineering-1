import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import BusinessModel from "@/components/BusinessModel";
import SupportSection from "@/components/SupportSection";
import ProcessSection from "@/components/ProcessSection";
import MultipleRolesSection from "@/components/MultipleRolesSection";
import TeamSection from "@/components/TeamSection";
import CompensationSection from "@/components/CompensationSection";
import WhoWereLookingFor from "@/components/WhoWereLookingFor";
import PartnerTerms from "@/components/PartnerTerms";
import BookMeeting from "@/components/BookMeeting";
import ContactFooter from "@/components/ContactFooter";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <WhoWeAre />
      <BusinessModel />
      <SupportSection />
      <ProcessSection />
      <MultipleRolesSection />
      <TeamSection />
      <CompensationSection />
      <WhoWereLookingFor />
      <PartnerTerms />
      <BookMeeting />
      <ContactFooter />
    </div>
  );
};

export default Index;
