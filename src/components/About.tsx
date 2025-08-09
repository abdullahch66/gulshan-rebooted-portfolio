import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Performance",
      description: "Building fast, optimized applications with excellent user experience."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication and problem-solving skills."
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "Tailwind CSS", "SASS", "Git", "Redux"
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary text-glow">Me</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Passionate developer with expertise in modern web technologies and a love for creating
              innovative digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Full Stack Developer & React Specialist
              </h3>
              
              <p className="text-foreground/80 leading-relaxed">
                Hello! I'm Abdullah Sajjad, also known as Gulshan in the developer community. 
                I'm a passionate full-stack developer with a strong focus on modern web technologies. 
                My journey in web development started with a curiosity about how websites work, and it 
                has evolved into a deep passion for creating exceptional digital experiences.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                I specialize in React and Next.js development, but I'm always excited to learn new 
                technologies and tackle challenging problems. Whether it's building responsive user 
                interfaces, developing robust backend systems, or optimizing application performance, 
                I bring dedication and creativity to every project.
              </p>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Technologies I Love Working With:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <Card key={index} className="p-6 glass hover:shadow-card transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-primary p-2 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;