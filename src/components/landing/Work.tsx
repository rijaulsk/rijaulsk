import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn, FadeInStagger } from "../ui/fade-in";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Pet's Need",
    tagline: "All-in-One Pet Care Platform",
    context: "A multi-service pet care center offering grooming, clinic services, and product categories for local pet owners.",
    role: "Complete digital system — brand direction, UI/UX design, responsive development, SEO setup, and deployment.",
    value: "Clear service discovery and mobile-ready experience that enables customers to explore services and contact easily across devices.",
    tech: ["Responsive Design", "Performance Optimized", "SEO Ready"],
    link: "https://petsneed.in",
    imageId: "petsneed-screenshot",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20"
  },
  {
    title: "Dr. Selim SK",
    tagline: "Multi-Location Medical Practice",
    context: "A veterinary doctor and surgeon with multiple practice locations needing online visibility for appointment bookings.",
    role: "Website design and development focused on trust-building, accessibility, and location discoverability.",
    value: "Professional online presence that helps patients find locations via Google and book appointments through direct contact.",
    tech: ["Trust-Focused Design", "Mobile Optimized", "Local SEO"],
    link: "https://drselimsk.com",
    imageId: "drselim-screenshot",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20"
  }
];

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-muted/30 py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute inset-0 bg-dot opacity-[0.03]" />
      </div>

      <FadeIn className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Live Client Work
          </div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-foreground/70">
            Real projects showing how I approach complete digital systems — from strategy to deployment.
          </p>
        </div>

        <FadeInStagger className="mt-16 space-y-12">
          {projects.map((project, index) => {
            const image = PlaceHolderImages.find(p => p.id === project.imageId);
            const isEven = index % 2 === 0;
            
            return (
              <FadeIn key={project.title}>
                <Card className={`group relative overflow-hidden border-border/50 hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10`}>
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Animated Grid Overlay */}
                  <div className="absolute inset-0 bg-grid opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500" />

                  <div className={`relative z-10 grid md:grid-cols-2 gap-8 p-6 md:p-8 ${isEven ? '' : 'md:grid-flow-dense'}`}>
                    {/* Image Side */}
                    <div className={`relative ${isEven ? '' : 'md:col-start-2'}`}>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block relative group/image"
                      >
                        {/* Image Container with Animated Border */}
                        <div className="relative overflow-hidden rounded-lg border-2 border-border/50 group-hover:border-primary/50 transition-colors duration-500">
                          {/* Corner Accents */}
                          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                          
                          {/* Overlay on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 z-10" />
                          
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={image.description}
                              data-ai-hint={image.imageHint}
                              width={800}
                              height={600}
                              className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover/image:scale-105"
                            />
                          )}
                          
                          {/* View Site Badge */}
                          <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover/image:opacity-100 transform translate-y-2 group-hover/image:translate-y-0 transition-all duration-300">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-medium shadow-lg">
                              <ExternalLink className="h-3 w-3" />
                              View Live Site
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>

                    {/* Content Side */}
                    <div className={`flex flex-col justify-center ${isEven ? '' : 'md:col-start-1 md:row-start-1'}`}>
                      <CardHeader className="p-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-3xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </CardTitle>
                            <p className="text-sm text-primary font-medium mt-1">{project.tagline}</p>
                          </div>
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 ml-4"
                          >
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                              <ArrowUpRight className="h-5 w-5" />
                            </div>
                          </a>
                        </div>
                      </CardHeader>

                      <CardContent className="p-0 mt-6 space-y-4">
                        {/* Context */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Context</h4>
                          <p className="text-sm leading-relaxed text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                            {project.context}
                          </p>
                        </div>

                        {/* Role */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">My Role</h4>
                          <p className="text-sm leading-relaxed text-foreground/70 group-hover:text-foreground/80 transition-colors duration-300">
                            {project.role}
                          </p>
                        </div>

                        {/* Value */}
                        <div className="space-y-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/50">Value Delivered</h4>
                          <p className="text-sm leading-relaxed text-foreground/80 font-medium">
                            {project.value}
                          </p>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tech.map((t, idx) => (
                            <Badge 
                              key={t} 
                              variant="secondary"
                              className="transition-all duration-300 hover:bg-primary/20 hover:text-primary hover:scale-105"
                              style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-4">
                          <Button 
                            asChild 
                            variant="outline" 
                            className="group/btn hover:bg-primary/5 hover:border-primary hover:text-primary transition-all duration-300"
                          >
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              Visit Live Site
                              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </Card>
              </FadeIn>
            );
          })}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}
