
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Target } from "lucide-react";

const Hero = () => {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-100/50 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 max-w-7xl pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-800">Strategic Platform for Startups</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6 animate-fade-in text-balance">
            Where <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">business</span> is simplified
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 mb-12 animate-fade-in text-balance max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            BudIt is a strategic platform dedicated to empowering startup founders and teams across all industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/80 border-blue-200 hover:bg-white text-slate-800 rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
              onClick={() => handleNavClick('#services')}
            >
              Explore Services
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-slate-700 hover:text-slate-900 hover:bg-blue-50 rounded-2xl px-8 py-6 text-lg font-semibold w-full sm:w-auto"
              onClick={() => handleNavClick('#for-startups')}
            >
              Join as a Vendor
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-slate-700">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-sm">25+ Vetted Vendors</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <Target className="w-5 h-5 text-blue-700" />
              <span className="text-sm">13+ Successful Projects</span>
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;