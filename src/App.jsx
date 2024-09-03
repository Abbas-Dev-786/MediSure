import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import TeamSection from "./components/TeamSection";
import DemoPage from "./pages/DemoPage";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/team" element={<TeamSection />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
