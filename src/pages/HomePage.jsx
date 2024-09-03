import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TeamSection from "../components/TeamSection";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TeamSection />
    </div>
  );
};

export default HomePage;
