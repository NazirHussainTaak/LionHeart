import { Link } from "react-router-dom";
import { Shield, Target, Users, Award, MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ceoPortrait from "@/assets/portrait/ceo-portrait.jpg";
import cooPortrait from "@/assets/portrait/coo-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood dark:bg-neutral-900 section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              About Lion Heart Computer System
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We protect the heart of your business: data, applications, and uptime.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Dubai, UAE Based</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Enterprise Grade Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To protect the heart of your business through enterprise-grade IT solutions 
                that secure, modernize, and maintain critical infrastructure with unwavering reliability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a UAE-first focus, we understand the unique challenges and opportunities 
                in the regional market. Our approach combines international best practices 
                with local expertise to deliver solutions that truly fit your business context.
              </p>
            </div>
            <Card className="card-elevated bg-card dark:bg-card">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading text-card-foreground">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted IT partner for enterprises across the UAE, 
                  known for our courage in tackling complex challenges and our precision 
                  in delivering results that matter.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-spring-wood dark:bg-neutral-900">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Lion Heart Computer System was founded with a simple belief: enterprise IT 
                shouldn't be complicated or unreliable. Born from years of experience in 
                complex systems integration, we saw too many organizations struggling with 
                technology that held them back instead of propelling them forward.
              </p>
              <p>
                Based in Dubai with deep roots in the UAE market, we bring together 
                international expertise with local understanding. Our team has worked 
                across industries—from financial services to government, from healthcare 
                to manufacturing—always with the same commitment: making enterprise IT 
                work the way it should.
              </p>
              <p>
                Today, we're proud to be the technology backbone for organizations that 
                demand excellence. Whether it's a zero-downtime migration, a comprehensive 
                security overhaul, or building cloud infrastructure from the ground up, 
                we bring both the courage and precision that our name represents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Bios */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the leaders driving our vision forward with expertise, integrity, and innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="card-elevated bg-card dark:bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={ceoPortrait}
                      alt="Naim Taskin, CEO"
                      loading="lazy"
                      className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-2 text-card-foreground">Naim Taskin</h3>
                    <p className="text-primary font-semibold mb-4">Chief Executive Officer</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Naim guides strategy and partnerships, aligning technology with business 
                      outcomes. With extensive experience in enterprise systems and regional 
                      market dynamics, he ensures Lion Heart delivers solutions that truly 
                      serve our clients' strategic objectives.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:naim@lionheartuae.com" className="hover:text-primary transition-colors">
                          naim@lionheartuae.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:+971555589672" className="hover:text-primary transition-colors">
                          +971 55 558 9672
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated bg-card dark:bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img
                      src={cooPortrait}
                      alt="Dr Aliasgar Taskin, COO"
                      loading="lazy"
                      className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-heading font-bold mb-2 text-card-foreground">Dr Aliasgar Taskin</h3>
                    <p className="text-primary font-semibold mb-4">Chief Operating Officer</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Dr Aliasgar leads delivery excellence across cloud, security, and 
                      operations. His technical depth and operational expertise ensure 
                      every project meets our exacting standards for quality and reliability.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 text-primary" />
                        <a href="mailto:aliasgar@lionheartuae.com" className="hover:text-primary transition-colors">
                          aliasgar@lionheartuae.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4 text-primary" />
                        <a href="tel:+971508072786" className="hover:text-primary transition-colors">
                          +971 50 807 2786
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding bg-spring-wood dark:bg-neutral-900">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
              Our Culture & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bold like a lion, precise like an engineer. These aren't just words—they guide 
              everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-elevated text-center bg-card dark:bg-card">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading text-card-foreground">Courage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We take on complex challenges others avoid. Your most critical projects 
                  are safe with us.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center bg-card dark:bg-card">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-heading text-card-foreground">Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every detail matters. From initial assessment to final deployment, 
                  we execute with engineering precision.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated text-center bg-card dark:bg-card">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-mandalay/10 dark:bg-mandalay/20 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-mandalay" />
                </div>
                <CardTitle className="text-xl font-heading text-card-foreground">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Good enough isn't good enough. We deliver solutions that exceed 
                  expectations and stand the test of time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Our Team
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to make a real impact in enterprise IT? We're always looking for 
              talented professionals who share our values of courage and precision.
            </p>
            <Button asChild className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;