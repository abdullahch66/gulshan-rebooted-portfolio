import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "🔺" },
        { name: "TypeScript", level: 88, icon: "📘" },
        { name: "JavaScript", level: 95, icon: "💛" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "SASS/SCSS", level: 85, icon: "💗" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Express.js", level: 80, icon: "⚡" },
        { name: "MongoDB", level: 78, icon: "🍃" },
        { name: "PostgreSQL", level: 75, icon: "🐘" },
        { name: "REST APIs", level: 90, icon: "🔗" },
        { name: "GraphQL", level: 70, icon: "📊" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🐙" },
        { name: "Redux", level: 85, icon: "🔄" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "Figma", level: 80, icon: "🎯" },
        { name: "Bootstrap", level: 88, icon: "🅱️" },
        { name: "Webpack", level: 75, icon: "📦" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-primary text-glow">Skills</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
            </p>
          </div>

          {/* Enhanced Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 glass-intense hover-lift hover:shadow-floating transition-all duration-500">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center gradient-text">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 group">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-xl group-hover:animate-bounce">{skill.icon}</span>
                          <span className="font-medium group-hover:text-primary transition-colors duration-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/60 font-mono">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary via-tech-blue-light to-primary bg-[length:200%_100%] rounded-full transition-all duration-1000 ease-out animate-shimmer relative"
                            style={{ 
                              width: `${skill.level}%`,
                              animationDelay: `${skillIndex * 0.1}s`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 glass-intense max-w-4xl mx-auto hover-lift hover:shadow-floating transition-all duration-500">
              <h3 className="text-2xl font-semibold text-primary mb-4 gradient-text">
                🚀 Always Learning
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                The tech world is constantly evolving, and I'm passionate about staying current with the latest trends 
                and technologies. I regularly explore new frameworks, tools, and best practices to ensure I'm delivering 
                the most modern and efficient solutions. Currently, I'm diving deeper into cloud technologies, 
                serverless architectures, and advanced React patterns.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;