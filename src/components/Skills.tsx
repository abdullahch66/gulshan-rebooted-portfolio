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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 glass hover:shadow-card transition-all duration-300">
                <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        <div 
                          className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-tech-blue-light rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <Card className="p-8 glass max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Always Learning
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