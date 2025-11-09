import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Users,
  Clock,
  Calendar,
  DollarSign,
  TrendingUp,
  Package,
  Receipt,
  FileText,
  UserCheck,
  BarChart3,
  Briefcase,
  Shield,
  Globe,
  Smartphone,
  Building2,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";

const Index = () => {
  const features = [
    { icon: Users, title: "Employee Management", description: "Complete employee database with profiles, documents, and history" },
    { icon: Clock, title: "Attendance & Biometric Sync", description: "Real-time attendance tracking with biometric device integration" },
    { icon: Calendar, title: "Leave & Holiday Management", description: "Automated leave requests, approvals, and balance tracking" },
    { icon: DollarSign, title: "Payroll Processing", description: "Automated salary calculations, deductions, and payment processing" },
    { icon: TrendingUp, title: "Performance Reviews", description: "Goal setting, 360-degree feedback, and performance analytics" },
    { icon: Package, title: "Asset Tracking", description: "Track company assets assigned to employees" },
    { icon: Receipt, title: "Expense Reimbursements", description: "Submit, approve, and track expense claims effortlessly" },
    { icon: FileText, title: "Document Vault", description: "Secure storage for all HR documents and employee files" },
    { icon: UserCheck, title: "Onboarding & Exit Management", description: "Streamlined processes for new hires and departures" },
    { icon: BarChart3, title: "Timesheets & Productivity", description: "Track project time and measure productivity metrics" },
    { icon: Briefcase, title: "Shift & Roster Planning", description: "Create and manage employee shifts and schedules" },
    { icon: Shield, title: "Role-Based Access Control", description: "Granular permissions for different user roles" },
    { icon: Globe, title: "Multi-Company Management", description: "Manage multiple entities from a single platform" },
    { icon: Smartphone, title: "Mobile App Ready", description: "Fully responsive design for on-the-go access" },
    { icon: Building2, title: "Project Costing", description: "Track project expenses and resource allocation" },
    { icon: BarChart3, title: "Real-Time Analytics", description: "Comprehensive dashboards and insights at your fingertips" },
  ];

  const steps = [
    {
      number: "01",
      title: "You Contact Us",
      description: "Reach out via our contact form, email, or schedule a call to discuss your HR needs.",
    },
    {
      number: "02",
      title: "We Understand Your Workflow",
      description: "Our team works with you to understand your unique HR processes and requirements.",
    },
    {
      number: "03",
      title: "Personal Setup & Training",
      description: "We configure your HRM server, migrate data, and provide comprehensive training to your team.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp USA",
      country: "United States",
      text: "PeopleHRM transformed our HR operations. The personal setup service meant we were up and running in days, not months.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "Operations Manager",
      company: "InfoSystems India",
      country: "India",
      text: "Outstanding support and a feature-rich platform. The team's dedication to understanding our needs was impressive.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      role: "CEO",
      company: "CreativeHub UK",
      country: "United Kingdom",
      text: "Finally, an HRM solution that doesn't feel like a one-size-fits-all product. Highly recommend for growing businesses.",
      rating: 5,
    },
    {
      name: "Ahmed Al-Rashid",
      role: "HR Manager",
      company: "GlobalTech UAE",
      country: "United Arab Emirates",
      text: "The multi-company management feature is a game-changer for us. Excellent product with even better service.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CFO",
      company: "FinanceHub Australia",
      country: "Australia",
      text: "The payroll integration saved us countless hours. PeopleHRM pays for itself within the first month.",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      role: "People Operations",
      company: "StartupLab Spain",
      country: "Spain",
      text: "Best decision we made for our growing team. The platform scales beautifully as we expand internationally.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzR6bTAgNHYyaDJWMzh6bTAtOHYyaDJWMzB6bS00IDR2Mmgydi0yem04IDAgdjJoMnYtMnptLTggNHYyaDJ2LTJ6bTggMHYyaDJ2LTJ6bS00LTR2Mmgydi0yem0wIDh2Mmgydi0yem0wLTR2Mmgydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Complete HR Management.<br />Made Personal.
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              A global HRM solution tailored for companies of all sizes. Fast onboarding, real results, and personal setup for every client.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-large">
                <Link to="/contact">Book a Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
                <a href="#features">Explore Features</a>
              </Button>
            </div>
            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <p className="text-primary-foreground/80 text-sm mb-4">Trusted by teams across</p>
              <div className="flex flex-wrap justify-center gap-6 text-primary-foreground/90 font-medium">
                <span>🇮🇳 India</span>
                <span>🇺🇸 United States</span>
                <span>🇬🇧 Europe</span>
                <span>🇦🇪 Middle East</span>
                <span>🇦🇺 Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PeopleHRM Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why PeopleHRM?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              HR management that scales with your business, without the complexity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Scales With Your Business",
                description: "From startups to enterprises, grow without limits",
              },
              {
                icon: UserCheck,
                title: "Personal Setup Service",
                description: "We handle everything - no confusing installations",
              },
              {
                icon: Globe,
                title: "Built for Global Teams",
                description: "Multi-currency, multi-language, multi-location ready",
              },
              {
                icon: Shield,
                title: "Enterprise-Grade Security",
                description: "Bank-level security without the complexity",
              },
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-all animate-scale-in">
                <CardContent className="pt-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything Your HR Needs. Nothing It Doesn't.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed for modern workforce management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border hover:border-primary/50 transition-all hover:shadow-soft group">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent process from first contact to go-live
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border">
                    <ArrowRight className="absolute -right-2 -top-2 h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-light">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from real customers across the globe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-border hover:shadow-medium transition-all">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.country}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your HR?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies worldwide who trust PeopleHRM for their workforce management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
