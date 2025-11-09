import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Contact Us",
      description: "Perfect for small teams getting started with HR management",
      features: [
        "Up to 50 employees",
        "Employee management",
        "Attendance tracking",
        "Leave management",
        "Basic payroll",
        "Mobile access",
        "Email support",
        "Personal setup included",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "Contact Us",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Up to 250 employees",
        "All Starter features",
        "Performance reviews",
        "Asset tracking",
        "Expense management",
        "Advanced analytics",
        "Shift management",
        "Priority support",
        "Personal setup & training",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solution for large organizations",
      features: [
        "Unlimited employees",
        "All Professional features",
        "Multi-company management",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "24/7 priority support",
        "On-site training available",
        "Custom deployment options",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include personal setup by our team.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-2 border-primary shadow-large scale-105"
                    : "border border-border hover:shadow-medium"
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary-light"
                        : "bg-secondary text-secondary-foreground hover:bg-muted"
                    }`}
                    size="lg"
                  >
                    <Link to="/contact">Request Custom Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-none shadow-soft bg-secondary">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                  What's Included in Every Plan
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Personal Setup Service</p>
                      <p className="text-sm text-muted-foreground">
                        We configure and deploy your HRM server personally
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Data Migration</p>
                      <p className="text-sm text-muted-foreground">
                        Seamless transfer from your existing system
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Team Training</p>
                      <p className="text-sm text-muted-foreground">
                        Comprehensive training for your HR team
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Regular Updates</p>
                      <p className="text-sm text-muted-foreground">
                        Continuous improvements and new features
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Security & Compliance</p>
                      <p className="text-sm text-muted-foreground">
                        Bank-level security and data protection
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">99.9% Uptime SLA</p>
                      <p className="text-sm text-muted-foreground">
                        Reliable service you can count on
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                How does the personal setup work?
              </h3>
              <p className="text-muted-foreground">
                After you sign up, our team schedules a discovery call to understand your requirements. We then configure the system, migrate your data, and provide training to your team. The entire process typically takes 5-7 business days.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-muted-foreground">
                Yes, you can change your plan at any time. We'll work with you to ensure a smooth transition and adjust billing accordingly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Is there a contract or can I cancel anytime?
              </h3>
              <p className="text-muted-foreground">
                We offer both monthly and annual billing options. Annual plans come with a discount. You can cancel anytime with 30 days notice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Do you offer custom features?
              </h3>
              <p className="text-muted-foreground">
                Yes, for Enterprise clients we can develop custom features and integrations based on your specific needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                What kind of support do you provide?
              </h3>
              <p className="text-muted-foreground">
                All plans include email support. Professional plans get priority support, and Enterprise clients receive 24/7 support with a dedicated account manager.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and free consultation
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
