import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "contact@gulshan.dev",
      link: "mailto:contact@gulshan.dev"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+92 300 1234567",
      link: "tel:+923001234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Rahim Yar Khan, Pakistan",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-primary text-glow">Touch</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <Card className="p-8 glass-intense hover-lift hover:shadow-floating transition-all duration-500">
              <h3 className="text-2xl font-semibold text-primary mb-6 gradient-text">
                💬 Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass border-primary/20 focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass border-primary/20 focus:border-primary"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass border-primary/20 focus:border-primary resize-none"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="shimmer" 
                  size="lg" 
                  className="w-full relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              <Card className="p-8 glass-intense hover-lift hover:shadow-floating transition-all duration-500">
                <h3 className="text-2xl font-semibold text-primary mb-6 gradient-text">
                  🤝 Let's Connect
                </h3>
                <p className="text-foreground/80 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with talented individuals. 
                  Whether you have a specific project in mind, need technical consultation, or just want 
                  to discuss ideas, feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 group hover-lift transition-all duration-300">
                      <div className="text-primary p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium">{info.title}</p>
                        {info.link.startsWith('#') ? (
                          <p className="text-foreground/70">{info.value}</p>
                        ) : (
                          <a 
                            href={info.link} 
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 glass hover-lift hover:shadow-floating transition-all duration-500">
                <h4 className="text-lg font-semibold text-primary mb-4 gradient-text">
                  ⚡ Response Time
                </h4>
                <p className="text-foreground/80">
                  I typically respond to messages within 24 hours during weekdays. 
                  For urgent inquiries, please mention "URGENT" in your subject line.
                </p>
              </Card>

              <Card className="p-8 glass hover-lift hover:shadow-floating transition-all duration-500">
                <h4 className="text-lg font-semibold text-primary mb-4 gradient-text">
                  🎯 Available For
                </h4>
                <ul className="text-foreground/80 space-y-2">
                  <li>• Full-stack web development projects</li>
                  <li>• React/Next.js consulting</li>
                  <li>• Code reviews and technical audits</li>
                  <li>• Long-term collaborations</li>
                  <li>• Freelance opportunities</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;