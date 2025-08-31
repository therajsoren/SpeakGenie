import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Program from "./components/Program";
import Testmonial from "./components/Testmonial";
import WhyMinderyKids from "./components/WhyMinderyKids";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Navbar />
      <Hero />
      <WhyMinderyKids />
      <Program />
      <Pricing />
      <Testmonial />
      <CTA />
      <Footer />
    </div>
  );
};
export default App;
