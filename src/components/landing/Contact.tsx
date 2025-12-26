"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "eac80dcb-abb7-476c-ba4b-51f51ca48157",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New project inquiry from ${formData.name}`,
          from_name: "Mail from Portfolio",
          to_email: "rijaul@debugswift.com"
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-20 bg-muted/30 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-dot opacity-[0.03]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Select Projects
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Let's <span className="text-primary">Talk</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70 max-w-2xl mx-auto">
            If you're looking for someone who can take responsibility for digital execution, reach out. I respond personally within 24 hours.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Currently taking on 2 new projects</span>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form - Takes more space */}
          <div className="md:col-span-3">
            <div className="relative group bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-[100px] transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

              <div className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange(e, 'name')}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e, 'email')}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all hover:border-primary/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    What are you looking to build? <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange(e, 'message')}
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none hover:border-primary/50"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-start gap-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 px-4 py-3 rounded-lg text-sm animate-in fade-in slide-in-from-top-2 duration-500">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Message sent successfully!</p>
                      <p className="text-xs mt-1 opacity-90">I'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-start gap-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-lg text-sm animate-in fade-in slide-in-from-top-2 duration-500">
                    <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Something went wrong</p>
                      <p className="text-xs mt-1 opacity-90">Please try again or contact me directly via email/phone below.</p>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleSubmit}
                  size="lg" 
                  className="w-full h-12 text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Contact Sidebar */}
          <div className="md:col-span-2 space-y-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-foreground mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:rijaul.debugswift.com" 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:item:bg-primary group-hover:item:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm text-foreground/80 group-hover:item:text-primary transition-colors truncate">rijaul.debugswift.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:item:bg-primary group-hover:item:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-1">WhatsApp</p>
                      <p className="text-sm text-foreground/80 group-hover:item:text-primary transition-colors">+91 8479823836</p>
                    </div>
                  </a>

                  <a 
                    href="https://linkedin.com/in/rijaulsk" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:item:bg-primary group-hover:item:text-primary-foreground transition-all duration-300 flex-shrink-0">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground/50 font-medium uppercase tracking-wider mb-1">LinkedIn</p>
                      <p className="text-sm text-foreground/80 group-hover:item:text-primary transition-colors">linkedin.com/in/rijaulsk</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">24-Hour Response</p>
                  <p className="text-xs text-foreground/60 leading-relaxed">I personally review every message and respond within one business day.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
