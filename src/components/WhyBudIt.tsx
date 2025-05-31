
import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Zap, 
  Heart, 
  TrendingUp, 
  MessageCircle 
} from "lucide-react";

const WhyBudIt = () => {
  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Only Quality Vendors",
      description: "Personally vetted by our team",
      color: "from-soft-blue to-soft-purple"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Faster Execution", 
      description: "Skip the sourcing, vetting, and trial-and-error",
      color: "from-soft-purple to-soft-pink"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Founder-Focused",
      description: "Built specifically for early-stage teams",
      color: "from-soft-pink to-soft-orange"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strategic Growth Support",
      description: "Expert guidance, not just services",
      color: "from-soft-orange to-soft-green"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "One Point of Contact",
      description: "Think of us as your extended team",
      color: "from-soft-green to-soft-blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-soft-blue/10 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-soft-blue" />
            <span className="text-sm font-medium text-soft-blue">Why BudIt</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose <span className="text-transparent bg-gradient-to-r from-soft-blue to-soft-green bg-clip-text">BudIt</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 bg-card/60 backdrop-blur-sm border-border rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBudIt;
