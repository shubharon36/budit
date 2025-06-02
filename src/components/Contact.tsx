import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Let's Talk</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Ready to <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text">Get Started?</span>
          </h2>
          
          <p className="text-xl text-slate-700 mb-12 max-w-3xl mx-auto">
            We'd love to hear about your startup, portfolio company, or community. Let's explore how BudIt can add strategic value.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Email Card */}
            <Card className="p-8 bg-white border-blue-200 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">
                Send us an Email
              </h3>
              <p className="text-slate-700 mb-6">
                Drop us a line and we'll get back to you promptly.
              </p>
              <Button 
                variant="outline"
                className="w-full bg-white border-blue-300 hover:bg-blue-50 text-slate-800 rounded-2xl"
                onClick={() => window.location.href = 'mailto:info.budit@gmail.com'}
              >
                info.budit@gmail.com
              </Button>
            </Card>

            {/* Phone Card */}
            <Card className="p-8 bg-white border-blue-200 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-3">
                Call Us Directly
              </h3>
              <p className="text-slate-700 mb-6">
                Speak directly with our team for immediate assistance.
              </p>
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-2xl"
                onClick={() => window.location.href = 'tel:+1-555-123-4567'}
              >
               +91 7984513324
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
