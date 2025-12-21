import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn, FadeInStagger } from "../ui/fade-in";
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
  },
];

export default function Work() {
  return (
    <section id="work" className="w-full py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold leading-tight tracking-tighter text-foreground">Selected Work</h2>
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
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}