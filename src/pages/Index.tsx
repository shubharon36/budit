
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import WhyBudIt from "@/components/WhyBudIt";
import ForStartups from "@/components/ForStartups";
import ForVendors from "@/components/ForVendors";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <WhyBudIt />
      <ForStartups />
      {/* <ForVendors /> */}
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
