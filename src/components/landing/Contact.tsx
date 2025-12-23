"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { FadeIn } from "../ui/fade-in";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");
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

  const handleChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-background">
      <FadeIn className="mx-auto max-w-xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">
            Let's Talk
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/80">
            If you're looking for someone who can take responsibility for digital execution, feel free to reach out. I'll respond personally.
          </p>
          <p className="mt-6 text-sm font-semibold text-primary">
            Currently taking on 2 new projects.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-card border border-border rounded-lg p-8 shadow-lg">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange(e, 'name')}
                className="w-full px-4 py-3 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange(e, 'email')}
                className="w-full px-4 py-3 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                What are you looking to build? *
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange(e, 'message')}
                rows={6}
                className="w-full px-4 py-3 bg-background border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>

            {status === "success" && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 px-4 py-3 rounded-md text-sm">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 px-4 py-3 rounded-md text-sm">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <Button 
              onClick={handleSubmit}
              size="lg" 
              className="w-full h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
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

        {/* Contact Info */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/80">
          <a 
            href="mailto:rijaulsk@debugswift.com" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>rijaulsk@debugswift.com</span>
          </a>
          <a 
            href="tel:+918479823836" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>+91 8479823836</span>
          </a>
          <a 
            href="https://linkedin.com/in/rijaulsk" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
