
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Calendar, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-soft-purple/10 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-soft-purple" />
            <span className="text-sm font-medium text-soft-purple">Let's Talk</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Ready to <span className="text-transparent bg-gradient-to-r from-soft-purple to-soft-blue bg-clip-text">Get Started?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We'd love to hear about your startup, portfolio company, or community. Let's explore how BudIt can add strategic value.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <Card className="p-8 bg-card/70 backdrop-blur-sm border-border rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-soft-purple to-soft-blue rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Send us an Email
              </h3>
              <p className="text-muted-foreground mb-6">
                Drop us a line and we'll get back to you promptly.
              </p>
              <Button 
                variant="outline"
                className="w-full bg-card/50 border-border hover:bg-card/70 rounded-2xl"
                onClick={() => window.location.href = 'mailto:info.budit@gmail.com'}
              >
                info.budit@gmail.com
              </Button>
            </Card>

            {/* Schedule Call Card */}
            <Card className="p-8 bg-card/70 backdrop-blur-sm border-border rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-soft-blue to-soft-green rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                Schedule a Call
              </h3>
              <p className="text-muted-foreground mb-6">
                Book a time that works for you and let's discuss your needs.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-soft-blue to-soft-green hover:from-soft-blue/90 hover:to-soft-green/90 text-white rounded-2xl"
              >
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
