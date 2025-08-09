import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: "mailto:contact@gulshan.dev",
      label: "Email"
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/abdullahch66",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/abdullah-sajjad",
      label: "LinkedIn"
    }
  ];

  return (
    <footer className="bg-section-bg border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary text-glow">
                Gulshan
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences 
                with modern web technologies.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="hover:text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">
                Quick Links
              </h4>
              <nav className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-foreground/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-primary">
                Get In Touch
              </h4>
              <div className="space-y-2 text-foreground/70">
                <p>
                  <a 
                    href="mailto:contact@gulshan.dev" 
                    className="hover:text-primary transition-colors"
                  >
                    contact@gulshan.dev
                  </a>
                </p>
                <p>Rahim Yar Khan, Pakistan</p>
                <p className="text-sm">
                  Available for freelance opportunities and collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-foreground/60 text-sm">
                © {currentYear} Gulshan (Abdullah Sajjad). All rights reserved.
              </p>
              
              <div className="flex items-center space-x-2 text-foreground/60 text-sm">
                <span>Made with</span>
                <Heart size={16} className="text-primary fill-current" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;