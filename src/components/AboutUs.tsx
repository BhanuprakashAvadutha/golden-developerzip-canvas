import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Users, 
  Lightbulb, 
  Rocket,
  Award,
  Globe
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower startups, small businesses, and enterprises through effective digital solutions that drive growth and success."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We combine cutting-edge design, development, and strategy to create high-performance web applications."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, becoming their trusted digital transformation partner."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4">About DeveloperZip</Badge>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Creative Web Development Agency
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            DeveloperZip is a creative web development agency specializing in modern, responsive websites 
            and intuitive user experiences. Our mission is to empower startups, small businesses, and 
            enterprises through effective digital solutions. We combine design, development, and strategy 
            to deliver high-performance web applications.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="text-center border-border bg-card/50 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="group hover:shadow-gold transition-all duration-300 hover:scale-105 border-border bg-card/50 backdrop-blur-sm animate-slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What Sets Us Apart */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              What Sets Us Apart
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="border-border bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Rocket className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Fast Delivery</h4>
                        <p className="text-sm text-muted-foreground">Lightning-fast turnaround times without compromising quality.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Premium Quality</h4>
                        <p className="text-sm text-muted-foreground">Every project is crafted with attention to detail and modern standards.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Global Reach</h4>
                        <p className="text-sm text-muted-foreground">Serving clients worldwide with 24/7 support and communication.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Our Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React", "TypeScript", "Node.js", "Firebase", "Tailwind CSS",
                    "Next.js", "Supabase", "API Integration", "UI/UX Design", "SEO Optimization"
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-foreground mb-3">Industries We Serve</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "E-commerce", "SaaS", "Healthcare", "Education", "Finance",
                    "Real Estate", "Marketing", "Startups", "Enterprise"
                  ].map((industry) => (
                    <Badge key={industry} variant="outline" className="text-xs">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;