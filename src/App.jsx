import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import TeamSection from "./components/TeamSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Features />
        <HowItWorksSection />
        <TeamSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
