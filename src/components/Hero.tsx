import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden particles">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 code-bg opacity-10" />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-tech-blue-light/20 animate-gradient-x" />
      </div>

      {/* Enhanced floating elements with more variety */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full floating opacity-60" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-tech-blue-light rounded-full floating-slow opacity-40" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-primary rounded-full floating-delayed opacity-80" />
      <div className="absolute top-60 left-1/4 w-1 h-1 bg-tech-blue-light rounded-full animate-glow-pulse opacity-50" />
      <div className="absolute bottom-60 right-1/4 w-2 h-2 bg-primary rounded-full floating opacity-30" />
      
      {/* Geometric shapes */}
      <div className="absolute top-32 right-16 w-8 h-8 border border-primary/30 rotate-45 animate-spin" style={{animationDuration: '20s'}} />
      <div className="absolute bottom-32 left-16 w-6 h-6 border border-tech-blue-light/40 animate-bounce-slow" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Greeting with enhanced animation */}
        <div className="mb-6 animate-fade-in-scale">
          <span className="inline-flex items-center gap-2 text-primary text-lg font-medium">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="animate-wave inline-block origin-[70%_70%]">👋</span>
            Hello, I'm
          </span>
        </div>

        {/* Name with gradient text effect */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <span className="gradient-text text-glow-intense animate-shimmer bg-gradient-to-r from-primary via-tech-blue-light to-primary bg-[length:200%_100%]">
            Muhammad Abdullah
          </span>
        </h1>

        {/* Enhanced title with typewriter effect */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
          Full Stack Developer, React Specialist & Web Enthusiast
        </p>

        {/* Description */}
        <p className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.6s'}}>
          I build exceptional digital experiences with modern technologies like React, Next.js, and TypeScript. 
          Let's create something amazing together.
        </p>

        {/* Enhanced CTA Buttons with more effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-scale" style={{animationDelay: '0.8s'}}>
          <Button variant="hero" size="xl" className="hover-lift group" asChild>
            <a href="#projects">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-tech-blue-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </a>
          </Button>
          <Button variant="glass" size="xl" className="hover-glow backdrop-blur-md" asChild>
            <a href="#contact">Let's Talk</a>
          </Button>
        </div>

        {/* Enhanced Social Links with hover effects */}
        <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
          <Button variant="ghost" size="icon" className="hover:text-primary hover-lift hover:shadow-glow transition-all duration-300" asChild>
            <a href="mailto:mabdullah43670@gmail.com" aria-label="Email">
              <Mail size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary hover-lift hover:shadow-glow transition-all duration-300" asChild>
            <a href="https://github.com/abdullahch66" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={24} />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary hover-lift hover:shadow-glow transition-all duration-300" asChild>
            <a href="https://linkedin.com/in/abdullah-sajjad" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-fade-in" style={{animationDelay: '1.2s'}}>
          <Button variant="ghost" size="icon" className="animate-bounce-slow hover:text-primary hover:shadow-glow transition-all duration-300" asChild>
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