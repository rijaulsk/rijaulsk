import { Button } from "@/components/ui/button";
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
      </FadeIn>
    </section>
  );
}
