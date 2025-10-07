import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, Send, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import { detectServiceKeywords, getSolutionAreaFromKeywords } from "@/utils/formKeywordDetection";

const Contact = () => {
  const location = useLocation();
  const vendorName = location.state?.vendor;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [suggestedService, setSuggestedService] = useState("");
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (messageValue.length > 10) {
      const detectedServices = detectServiceKeywords(messageValue);
      const suggestion = getSolutionAreaFromKeywords(detectedServices);
      if (suggestion && suggestion !== suggestedService) {
        setSuggestedService(suggestion);
      }
    }
  }, [messageValue, suggestedService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Generate WhatsApp message
    const whatsappMessage = `Hello Lion Heart Team,\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/971555589672?text=${encodeURIComponent(whatsappMessage)}`;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: i18n.language === "ar" ? "تم إرسال الرسالة بنجاح" : "Message Sent Successfully",
      description: i18n.language === "ar" 
        ? "شكراً! سيتواصل معك فريقنا خلال يوم عمل واحد (توقيت الخليج)."
        : "Thanks! Our team will reach out within one business day (GST).",
    });

    setIsSubmitting(false);
    setMessageValue("");
    setSuggestedService("");
    (e.target as HTMLFormElement).reset();

    // Optional: Open WhatsApp
    // window.open(whatsappUrl, "_blank");
  };

  const solutionAreas = [
    "Data Center Solutions",
    "Cloud Solutions", 
    "Enterprise Data Protection",
    "Converged/Hyperconverged Systems",
    "Storage Solutions",
    "Networking Security",
    "Application & Data Migration",
    "Business Continuity & DR",
    "Deployment & Maintenance",
    "EDR/XDR/NDR",
    "Identity Management",
    "Threat Intelligence Management",
    "Security Operations Centre",
    "Network Operations Center",
    "Hybrid IT Management"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern bg-spring-wood dark:bg-neutral-900 section-padding">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
              Let's Secure Your Enterprise IT Together
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reach out for consultations, proposals, or quick questions—our UAE-based team 
              responds within one business day.
            </p>
          </div>
        </div>
      </section>

      <div className="container-width px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            {vendorName && (
              <Alert className="mb-6 border-primary/30 bg-primary/5 dark:bg-primary/10">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertDescription className="text-muted-foreground">
                  Inquiry about <span className="font-semibold text-foreground">{vendorName}</span>. 
                  We'll reach out to discuss this technology partnership.
                </AlertDescription>
              </Alert>
            )}
            <Card className="card-elevated bg-card dark:bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-card-foreground">Request a Consultation</CardTitle>
                <p className="text-muted-foreground">
                  Tell us about your IT challenges and objectives. We'll provide expert 
                  guidance tailored to your specific needs.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" aria-live="polite">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      placeholder="e.g., CIO, CISO, IT Director"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">Area of Interest</Label>
                    <Select name="interest" value={suggestedService} onValueChange={setSuggestedService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {solutionAreas.map((area) => (
                          <SelectItem key={area} value={area.toLowerCase().replace(/\s+/g, '-')}>
                            {area}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {suggestedService && (
                      <p className="text-xs text-primary">
                        ✨ Auto-detected: {solutionAreas.find(a => a.toLowerCase().replace(/\s+/g, '-') === suggestedService)}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={messageValue}
                      onChange={(e) => setMessageValue(e.target.value)}
                      placeholder={
                        vendorName 
                          ? `I'm interested in ${vendorName}. Tell us more about your requirements...`
                          : "Tell us about your current IT challenges, objectives, or specific requirements..."
                      }
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="nda" name="nda" />
                      <Label htmlFor="nda" className="text-sm">
                        Request an NDA before detailed discussions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="proposal" name="proposal" />
                      <Label htmlFor="proposal" className="text-sm">
                        Request a detailed proposal
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="card-elevated bg-card dark:bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-card-foreground">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a
                      href="mailto:naim@lionheartuae.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      naim@lionheartuae.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a
                      href="tel:+971555589672"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +971 55 558 9672
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Business Hours</p>
                    <p className="text-muted-foreground text-sm">Sunday–Thursday, 9 AM–6 PM GST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="card-elevated bg-card dark:bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-card-foreground">Office Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-card-foreground">Address</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Bank Melli Iran Building, 2nd Floor<br />
                      Office No. 11, Khaled Bin Waleed Street<br />
                      P.O. Box 99927, Dubai, U.A.E
                    </p>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full" size="sm">
                  <a 
                    href="https://maps.app.goo.gl/Byon3Bb9YvDZU3c16" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="card-elevated bg-card dark:bg-card border-border">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1626944849874!2d55.293699!3d25.2560512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434b9e1ae60d%3A0x63963d33c9e8a5b!2sBank%20Melli%20Iran%20Building!5e0!3m2!1sen!2sae!4v1234567890"
                    className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lion Heart Computer System Office Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-semibold text-primary mb-2">Quick Response Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                We respond to all inquiries within one business day during our office hours 
                (Sunday–Thursday, 9 AM–6 PM GST). For urgent matters, call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;