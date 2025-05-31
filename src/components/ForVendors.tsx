
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Handshake, Star } from "lucide-react";

const ForVendors = () => {
  return (
    <section id="for-vendors" className="py-20 bg-gradient-to-b from-accent/30 to-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-soft-orange/10 rounded-full px-4 py-2 mb-6">
            <Handshake className="w-4 h-4 text-soft-orange" />
            <span className="text-sm font-medium text-soft-orange">For Vendors & Professionals</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Work with Serious Startups. <span className="text-transparent bg-gradient-to-r from-soft-orange to-soft-pink bg-clip-text">Do Meaningful Work.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            BudIt connects top-tier professionals with startups that are ready to build. If you're reliable, startup-savvy, and driven; let's talk!
          </p>

          <Card className="p-8 sm:p-12 bg-card/70 backdrop-blur-sm border-border rounded-3xl mb-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-soft-orange to-soft-pink rounded-full flex items-center justify-center mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-foreground mb-4">
                Join Our Vendor Network
              </h3>
              
              <p className="text-muted-foreground mb-8 text-center max-w-md">
                Connect with high-quality startups and grow your business with meaningful partnerships.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-soft-orange to-soft-pink hover:from-soft-orange/90 hover:to-soft-pink/90 text-white rounded-2xl px-8 py-6 text-lg font-semibold group w-full sm:w-auto"
              >
                Apply to Join Our Vendor Network
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForVendors;
