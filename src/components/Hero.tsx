import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 code-bg opacity-10" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-tech-blue-light rounded-full animate-float opacity-40" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full animate-float opacity-80" style={{animationDelay: '2s'}} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Greeting */}
        <div className="mb-6 animate-fade-in">
          <span className="inline-flex items-center gap-2 text-primary text-lg font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            Hello, I'm
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <span className="text-glow">Gulshan</span>
          <br />
          <span className="text-foreground">(Abdullah Sajjad)</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          Full Stack Developer, React Specialist & Web Enthusiast
        </p>

        {/* Description */}
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
          I build exceptional digital experiences with modern technologies like React, Next.js, and TypeScript. 
          Let's create something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <Button variant="hero" size="xl" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="xl" asChild>
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
            <a href="mailto:contact@gulshan.dev" aria-label="Email">
              <Mail size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
            <a href="https://github.com/abdullahch66" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
            <a href="https://linkedin.com/in/abdullah-sajjad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
          <Button variant="ghost" size="icon" className="animate-bounce" asChild>
            <a href="#about" aria-label="Scroll to about section">
              <ArrowDown size={24} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;