import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Megaphone, 
  Scale, 
  Users, 
  DollarSign, 
  Navigation, 
  Package,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Product & Tech Development",
      color: "bg-blue-500 text-white"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Branding & Marketing", 
      color: "bg-blue-600 text-white"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal & Compliance",
      color: "bg-blue-700 text-white"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Talent & Recruitment",
      color: "bg-blue-500 text-white"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fundraising & Financial Strategy",
      color: "bg-blue-600 text-white"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Go-to-Market Planning",
      color: "bg-blue-700 text-white"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Logistics & Operations",
      color: "bg-blue-800 text-white"
    }
  ];

  const qualities = [
    { text: "Startup experience", checked: true },
    { text: "Reliability", checked: true },
    { text: "Cost-efficiency", checked: true }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <Package className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">What We Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Curated <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">Business Solutions</span>
          </h2>
          
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            BudIt gives startups an edge with high-quality, pre-vetted solutions across critical functions:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-white border-blue-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
            </Card>
          ))}
          
          {/* "And more" card */}
          <Card className="p-6 bg-blue-50 border-2 border-dashed border-blue-300 rounded-2xl flex items-center justify-center">
            <p className="text-blue-700 font-semibold text-center">
              And the list continues...
            </p>
          </Card>
        </div>

        {/* Quality Assurance */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-white border-blue-200 rounded-3xl">
            <h3 className="text-xl font-display font-semibold text-center text-slate-900 mb-6">
              All vendors are vetted for:
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {qualities.map((quality, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 rounded-full text-sm font-medium"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {quality.text}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
