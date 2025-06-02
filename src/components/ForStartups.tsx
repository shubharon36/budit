import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Phone } from "lucide-react";

const ForStartups = () => {
  return (
    <section id="for-startups" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Building2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">For Startups</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Focus on Building. <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">We'll Handle the Rest.</span>
          </h2>
          
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            You don't need more chaos; you need clarity. BudIt helps you move fast by connecting you with experts who understand what startups need at every stage.
          </p>

          <Card className="p-8 sm:p-12 bg-white border-blue-200 rounded-3xl mb-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mb-6">
                <Phone className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-semibold text-slate-900 mb-4">
                Ready to Get Started?
              </h3>
              
              <p className="text-slate-700 mb-8 text-center max-w-md">
                Call us now for a free consultation and discover how BudIt can accelerate your startup's growth.
              </p>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-2xl px-8 py-6 text-lg font-semibold group w-full sm:w-auto"
                onClick={() => window.location.href = 'tel:+1-555-123-4567'}
              >
                +91 7984513324
                <Phone className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ForStartups;
