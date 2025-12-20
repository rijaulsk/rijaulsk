import Image from "next/image";
<<<<<<< HEAD
=======
import { Badge } from "@/components/ui/badge";
>>>>>>> 08dc22f (first commit)
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn, FadeInStagger } from "../ui/fade-in";
<<<<<<< HEAD
import { Button } from "../ui/button";

const projects = [
  {
    title: "petsneed.in",
    description: "Built a clean, performance-focused business website with maintainable frontend architecture and clear service structure.",
    link: "https://petsneed.in",
    imageId: "petsneed.png",
  },
  {
    title: "drselimsk.com",
    description: "Designed and developed a professional website for a medical professional, focusing on trust, clarity, and accessibility.",
    link: "https://drselimsk.com",
    imageId: "drselimsk.png",
  },
  {
    title: "welearn.net.in",
    description: "Website built to support an education platform, focusing on clarity, structure, and usability.",
    link: "https://welearn.net.in",
    imageId: "welearnacademy.png",
=======

const projects = [
  {
    title: "Pet's Need",
    subtitle: "Complete Pet Care Center",
    description: "Full-service pet care center website covering grooming, veterinary clinic, and pet store. Built with modern UI, optimized images, WhatsApp integration, and multi-location support. Performance-first approach with clean information architecture.",
    tech: ["React", "Next.js", "Responsive Design"],
    highlights: "Fast Loading • Mobile-Optimized • Service Booking",
    link: "https://petsneed.in",
    imageId: "petsneed-screenshot",
  },
  {
    title: "Dr. Selim SK",
    subtitle: "Veterinary Doctor & Surgeon",
    description: "Professional veterinary practice website featuring emergency services, multi-location management, patient testimonials, and detailed service pages. Trust-focused design with clear calls-to-action and mobile-first approach.",
    tech: ["Custom Build", "Responsive Design"],
    highlights: "Trust-Focused • Emergency System • Location Pages",
    link: "https://drselimsk.com",
    imageId: "drselim-screenshot",
  },
  {
    title: "Welearn Academy",
    subtitle: "Educational Institute",
    description: "Informational website for teaching academy covering courses, faculty, and contact information. Clean, straightforward design focused on clarity and accessibility.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: "Clean Design • Fast • Informational",
    link: "https://welearn.net.in",
    imageId: "welearn-screenshot",
>>>>>>> 08dc22f (first commit)
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
<<<<<<< HEAD
          <h2 className="text-4xl font-headline font-bold leading-tight tracking-tighter text-foreground">Selected Work</h2>
=======
          <h2 className="text-4xl font-headline font-bold leading-tight tracking-tighter text-foreground">Recent Projects</h2>
>>>>>>> 08dc22f (first commit)
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-foreground/80">
            A selection of projects that showcase my focus on clean design, performance, and user experience.
          </p>
        </div>
        <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {projects.map((project) => {
            const image = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <FadeIn key={project.title}>
                <Card className="overflow-hidden h-full shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-transparent hover:border-primary">
<<<<<<< HEAD
                  <div className="overflow-hidden">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold leading-snug">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <p className="text-base leading-relaxed text-foreground/80 mb-4 flex-grow">{project.description}</p>
                    <div className="flex gap-4">
                        <Button asChild>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Live
                            </a>
                        </Button>
                        <Button variant="outline" disabled>
                            View Details
                        </Button>
                    </div>
                  </CardContent>
=======
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
                    <div className="overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          data-ai-hint={image.imageHint}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between text-2xl font-semibold leading-snug">
                        {project.title}
                        <ArrowUpRight className="h-5 w-5 text-foreground/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </CardTitle>
                      <CardDescription>{project.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-base leading-relaxed text-foreground/80 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((t) => (
                          <Badge key={t} variant="secondary">{t}</Badge>
                        ))}
                      </div>
                      <p className="text-sm font-semibold text-primary">{project.highlights}</p>
                    </CardContent>
                  </a>
>>>>>>> 08dc22f (first commit)
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 08dc22f (first commit)
