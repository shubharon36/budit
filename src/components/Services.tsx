
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
      color: "bg-soft-blue text-white"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Branding & Marketing", 
      color: "bg-soft-purple text-white"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Legal & Compliance",
      color: "bg-soft-pink text-white"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Talent & Recruitment",
      color: "bg-soft-green text-white"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Fundraising & Financial Strategy",
      color: "bg-soft-orange text-white"
    },
    {
      icon: <Navigation className="w-6 h-6" />,
      title: "Go-to-Market Planning",
      color: "bg-soft-blue text-white"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Logistics & Operations",
      color: "bg-soft-purple text-white"
    }
  ];

  const qualities = [
    { text: "Startup experience", checked: true },
    { text: "Reliability", checked: true },
    { text: "Cost-efficiency", checked: true }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-soft-pink/10 rounded-full px-4 py-2 mb-6">
            <Package className="w-4 h-4 text-soft-pink" />
            <span className="text-sm font-medium text-soft-pink">What We Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Curated <span className="text-transparent bg-gradient-to-r from-soft-pink to-soft-orange bg-clip-text">Business Solutions</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BudIt gives startups an edge with high-quality, pre-vetted solutions across critical functions:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/60 backdrop-blur-sm border-border rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="font-display font-semibold text-foreground group-hover:text-soft-blue transition-colors">
                {service.title}
              </h3>
            </Card>
          ))}
          
          {/* "And more" card */}
          <Card className="p-6 bg-gradient-to-br from-soft-blue/10 to-soft-purple/10 border-2 border-dashed border-soft-blue/30 rounded-2xl flex items-center justify-center">
            <p className="text-soft-blue font-semibold text-center">
              And the list continues...
            </p>
          </Card>
        </div>

        {/* Quality Assurance */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-card/70 backdrop-blur-sm border-border rounded-3xl">
            <h3 className="text-xl font-display font-semibold text-center text-foreground mb-6">
              All vendors are vetted for:
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {qualities.map((quality, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-soft-green/10 text-soft-green border-soft-green/20 px-4 py-2 rounded-full text-sm font-medium"
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
