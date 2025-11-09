import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Shield, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We believe in clear communication and honest partnerships with every client.",
    },
    {
      icon: Globe,
      title: "Global Scalability",
      description: "Built to support businesses from local startups to multinational enterprises.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your success is our success. We're committed to personalized support and service.",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolving our platform with the latest HR technology and best practices.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            About PeopleHRM
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Empowering organizations worldwide with innovative HR technology and personalized service
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              PeopleHRM was born from a simple observation: HR software was either too complex for small businesses or too limited for growing enterprises. We saw companies struggling with one-size-fits-all solutions that didn't understand their unique workflows.
            </p>
            <p className="text-muted-foreground mb-4">
              Founded by HR professionals and technology experts, we set out to create something different. A platform that combines enterprise-grade features with the simplicity small teams need. More importantly, we committed to personally setting up and configuring the system for every single client.
            </p>
            <p className="text-muted-foreground mb-4">
              Today, PeopleHRM serves organizations across six continents, from 5-person startups to 5,000-person corporations. What hasn't changed is our commitment to understanding each client's unique needs and delivering a solution that works perfectly for them.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground">
              "Empowering teams worldwide through effortless HR management."
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground text-center mb-12">
              We believe that HR technology should empower people, not complicate their work. Our mission is to provide world-class HR management tools that are powerful enough for any business challenge, yet simple enough that anyone can use them effectively.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    For HR Teams
                  </h3>
                  <p className="text-muted-foreground">
                    Streamline your workflows, reduce manual work, and focus on strategic initiatives that drive real business value.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    For Employees
                  </h3>
                  <p className="text-muted-foreground">
                    Self-service tools that make it easy to manage time off, view payslips, update information, and stay connected.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    For Managers
                  </h3>
                  <p className="text-muted-foreground">
                    Real-time insights into team performance, attendance, and productivity to make better decisions faster.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-soft">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    For Leadership
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive analytics and reporting to understand workforce trends and plan for growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border border-border hover:shadow-medium transition-all text-center">
                <CardContent className="pt-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Experience You Can Trust
          </h2>
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg">
              With over a decade of combined experience in HR technology, our team has implemented HR systems for companies ranging from tech startups to manufacturing giants, from local businesses to global corporations.
            </p>
            <p className="text-lg">
              We've seen what works and what doesn't. We understand the challenges of managing a distributed workforce, handling complex payroll scenarios, and maintaining compliance across multiple jurisdictions.
            </p>
            <p className="text-lg">
              This experience informs every feature we build and every recommendation we make. When you work with PeopleHRM, you're not just getting software – you're getting a partner who understands the complexities of modern HR management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Employees Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
