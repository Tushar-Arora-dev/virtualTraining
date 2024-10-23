import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
// import Workflow from "./components/Workflow";
// import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import AboutUs from './components/About';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        {/* <Workflow /> */}
        <Pricing />
        <AboutUs />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default App;
