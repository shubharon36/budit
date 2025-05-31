
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Target } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-accent overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-soft-purple/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-soft-pink/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-soft-green/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 max-w-7xl pt-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-soft-blue" />
            <span className="text-sm font-medium text-muted-foreground">Strategic Platform for Startups</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-foreground mb-6 animate-fade-in text-balance">
            Where <span className="text-transparent bg-gradient-to-r from-soft-blue to-soft-purple bg-clip-text">business</span> is simplified
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in text-balance max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
            BudIt is a strategic platform dedicated to empowering startup founders and teams across all industries.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-soft-blue hover:bg-soft-blue/90 text-white rounded-2xl px-8 py-6 text-lg font-semibold group w-full sm:w-auto">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-card/50 border-border hover:bg-card/70 text-foreground rounded-2xl px-8 py-6 text-lg font-semibold backdrop-blur-sm w-full sm:w-auto"
            >
              Explore Services
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost" 
              className="text-muted-foreground hover:text-foreground rounded-2xl px-8 py-6 text-lg font-semibold w-full sm:w-auto"
            >
              Join as a Vendor
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5 text-soft-blue" />
              <span className="text-sm">100+ Vetted Vendors</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Target className="w-5 h-5 text-soft-purple" />
              <span className="text-sm">500+ Successful Projects</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-5 h-5 text-soft-pink" />
              <span className="text-sm">95% Satisfaction Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
