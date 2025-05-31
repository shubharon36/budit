
import { Separator } from "@/components/ui/separator";
import { Mail, Calendar, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-t from-foreground to-foreground/95 text-background py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/img-uploads/logo.png" 
              alt="BudIt Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
          </div>
          
          <p className="text-background/80 mb-8 max-w-2xl mx-auto">
            Where business is simplified through strategic partnerships and expert guidance for startups across all industries.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="mailto:info.budit@gmail.com"
              className="flex items-center gap-2 text-background/80 hover:text-background transition-colors"
            >
              <Mail className="w-4 h-4" />
              info.budit@gmail.com
            </a>
            <Separator orientation="vertical" className="hidden sm:block h-4 bg-background/30" />
            <button className="flex items-center gap-2 text-background/80 hover:text-background transition-colors">
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </button>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-background/80 hover:text-background" />
              </a>
            ))}
          </div>

          <Separator className="bg-background/20 mb-8" />

          {/* Copyright */}
          <div className="text-sm text-background/60">
            <p>&copy; 2025 BudIt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
