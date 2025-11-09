import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageSquare, Calendar } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only form submission
    toast.success("Thank you for your interest! We'll contact you within 24 hours.");
    setFormData({ name: "", company: "", email: "", country: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Ready to transform your HR management? We're here to help you get started.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            {/* <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="United States"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-[150px]"
                    placeholder="Tell us about your HR needs and how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-light"
                >
                  Send Message
                </Button>
              </form>
            </div> */}

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Other Ways to Reach Us
                </h2>
                <p className="text-muted-foreground mb-8">
                  Choose the method that works best for you. We're committed to responding within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="border border-border hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          For general inquiries and support
                        </p>
                        <a
                          href="mailto:saikiran@peoplehrm.co.in"
                          className="text-primary hover:text-primary-light font-medium"
                        >
                          support@peoplehrm.co.in
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Speak with our team directly
                        </p>
                        <a
                          href="tel:+911234567890"
                          className="text-primary hover:text-primary-light font-medium"
                        >
                          +91 807 331 5880
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-border hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Quick questions and instant support
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() =>
                            window.open("https://wa.me/918073315880", "_blank")
                          }
                        >
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* <Card className="border border-border hover:shadow-medium transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          Schedule a Call
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          Book a time that works for you
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => toast.info("Calendar integration coming soon!")}
                        >
                          Book a Meeting
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </div>

              {/* Business Hours */}
              <Card className="border-none shadow-soft bg-secondary mt-8">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-4">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    * Enterprise clients receive 24/7 support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Global Presence, Local Support
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            While we serve clients worldwide, every implementation gets personal attention from our expert team. We understand local compliance requirements and can support you in multiple languages.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🇮🇳</div>
              <div className="text-sm font-medium text-foreground">India</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🇺🇸</div>
              <div className="text-sm font-medium text-foreground">USA</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🇬🇧</div>
              <div className="text-sm font-medium text-foreground">Europe</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🇦🇪</div>
              <div className="text-sm font-medium text-foreground">Middle East</div>
            </div>
            <div>
              <div className="text-2xl mb-2">🇦🇺</div>
              <div className="text-sm font-medium text-foreground">Australia</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
