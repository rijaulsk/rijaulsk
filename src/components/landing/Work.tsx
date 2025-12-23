import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const projects = [
  {
    title: "Pet's Need",
    subtitle: "Complete Pet Care Center",
    description: "Professional website built with a focus on clarity, performance, and maintainable frontend structure.",
    tech: ["Custom Build", "Responsive Design"],
    highlights: "Fast • Mobile-Optimized • SEO-Friendly",
    link: "https://petsneed.in",
    imageId: "petsneed-screenshot",
  },
  {
    title: "Dr. Selim SK",
    subtitle: "Veterinary Doctor & Surgeon",
    description: "Website designed for a medical professional, prioritizing trust, accessibility, and clean information flow.",
    tech: ["Custom Build", "Responsive Design"],
    highlights: "Trust-Focused • Mobile-Optimized • Accessible",
    link: "https://drselimsk.com",
    imageId: "drselim-screenshot",
  },
  {
    title: "Welearn Academy",
    subtitle: "Educational Institute",
    description: "Website built for an education platform with emphasis on structure, responsiveness, and usability matching brand colors.",
    tech: ["HTML", "CSS", "JavaScript"],
    highlights: "Clean Design • Fast • Informational",
    link: "https://welearn.net.in",
    imageId: "welearn-screenshot",
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold leading-tight tracking-tighter text-foreground">Recent Projects</h2>
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
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}
