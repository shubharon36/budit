
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What kinds of startups do you work with?",
      answer: "We support early-stage and scaling startups across industries: tech, fintech, health, consumer goods, SaaS, sustainability, and more."
    },
    {
      question: "How do you vet vendors?",
      answer: "We conduct personal interviews, review case studies, validate references, and ensure experience with startups."
    },
    {
      question: "Is BudIt free for startups?",
      answer: "Initial consultations are free. Service costs depend on scope, but we prioritize cost-efficiency and transparency."
    },
    {
      question: "Can I get multiple vendor options?",
      answer: "Yes. We typically match you with top-fit providers per request."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-soft-purple/10 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-4 h-4 text-soft-purple" />
              <span className="text-sm font-medium text-soft-purple">FAQs</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Frequently Asked <span className="text-transparent bg-gradient-to-r from-soft-purple to-soft-pink bg-clip-text">Questions</span>
            </h2>
          </div>

          <div className="bg-card/60 backdrop-blur-sm border border-border rounded-3xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-2xl px-6 bg-card/30"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
