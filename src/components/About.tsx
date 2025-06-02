import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Expert consultancy",
      description: "Strategic guidance from experienced professionals"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailored execution plans", 
      description: "Custom roadmaps designed for your specific needs"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Access to vetted professionals",
      description: "Connect with pre-screened service providers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">About BudIt</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            More Than a Platform: A <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">Strategic Partner</span>
          </h2>
          
          <p className="text-lg text-slate-700 mb-8 text-balance">
            BudIt is built for founders, by people who understand the startup journey. We're not just a directory or marketplace; we're a growth partner that empowers early-stage and scaling startups to move faster with confidence and confirmation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-white border-blue-200 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-700">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-700">
            Our mission is simple: <strong className="text-slate-900">Help startups succeed</strong> by eliminating noise, saving time, and connecting them to the right resources at the right time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;