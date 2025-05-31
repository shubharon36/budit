
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building2, Calendar } from "lucide-react";

const ForStartups = () => {
  return (
    <section id="for-startups" className="py-20 bg-gradient-to-b from-card/30 to-accent/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-soft-green/10 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-soft-green" />
            <span className="text-sm font-medium text-soft-green">For Startups</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Focus on Building. <span className="text-transparent bg-gradient-to-r from-soft-green to-soft-blue bg-clip-text">We'll Handle the Rest.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            You don't need more chaos; you need clarity. BudIt helps you move fast by connecting you with experts who understand what startups need at every stage.
          </p>

          <Card className="p-8 sm:p-12 bg-card/70 backdrop-blur-sm border-border rounded-3xl mb-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-soft-green to-soft-blue rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Ready to Get Started?
              </h3>
              
              <p className="text-muted-foreground mb-8 text-center max-w-md">
                Schedule a free consultation and discover how BudIt can accelerate your startup's growth.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-soft-green to-soft-blue hover:from-soft-green/90 hover:to-soft-blue/90 text-white rounded-2xl px-8 py-6 text-lg font-semibold group w-full sm:w-auto"
              >
                Request a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForStartups;
