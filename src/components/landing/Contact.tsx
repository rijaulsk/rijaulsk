import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { FadeIn } from "../ui/fade-in";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-gray-50 dark:bg-black/20 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">Have a project in mind?</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          I’m available for a limited number of new projects. If you need a reliable, focused developer, let's talk.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="h-12 text-lg">
            <a href="mailto:rijaul@debugswift.com">
              Get in Touch
            </a>
          </Button>
        </div>
=======
import { Mail, Phone, Linkedin } from "lucide-react";
import { FadeIn } from "../ui/fade-in";

const whatsappLink = "https://wa.me/918479823836?text=Hi%20Rijaul,%20I%20want%20to%20discuss%20a%20project";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-16 md:py-20">
      <FadeIn className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">Let's Talk</h2>
        <p className="mt-4 text-lg leading-relaxed text-foreground/80">
          If you need someone to handle your complete digital setup — or have a project in mind — reach out.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="h-14 text-lg bg-green-500 hover:bg-green-600 text-white">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Start a Conversation on WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-8 text-sm font-semibold text-primary">Currently taking on 2 new projects.</p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground/80">
            <a href="mailto:rijaul@debugswift.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>rijaul@debugswift.com</span>
            </a>
            <a href="tel:+918479823836" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span>+91 8479823836</span>
            </a>
            <a href="https://linkedin.com/in/rijaulsk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
            </a>
        </div>
>>>>>>> 08dc22f (first commit)
      </FadeIn>
    </section>
  );
}
