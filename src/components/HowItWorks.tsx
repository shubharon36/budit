import { Card } from "@/components/ui/card";
import { MessageSquare, Map, Users, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      number: "1",
      title: "Tell Us What You Need",
      description: "Share your startup's goals, pain points, or active projects.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Map className="w-8 h-8" />,
      number: "2", 
      title: "We Craft a Roadmap",
      description: "Get expert insight + a tailored action plan designed for your stage.",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "3",
      title: "Connect to Vetted Pros", 
      description: "We match you with handpicked service providers—no more cold outreach or guesswork.",
      color: "from-blue-700 to-blue-900"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      number: "4",
      title: "Execute & Grow",
      description: "Build efficiently, stay focused, and scale with confidence.",
      color: "from-blue-500 to-blue-800"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">How BudIt Works</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Simple Process, <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">Powerful Results</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent z-0" />
                )}
                
                <Card className="relative p-8 bg-white border-blue-200 rounded-3xl hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group z-10">
                  {/* Number Badge */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
