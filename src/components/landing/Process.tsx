import { Card, CardContent } from "@/components/ui/card";
import { Telescope, DraftingCompass, Code, Rocket } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const processSteps = [
  {
    icon: Telescope,
    title: "Understand",
    description: "Goals, constraints, and context come first."
  },
  {
    icon: DraftingCompass,
    title: "Design & Plan",
    description: "UI, structure, and technical decisions are made deliberately."
  },
  {
    icon: Code,
    title: "Build & Optimize",
    description: "Clean, performance-focused execution."
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "Deployment and continued support if needed."
  }
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-background py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">How I Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-foreground/80">
            A structured process to ensure we build the right thing, the right way.
          </p>
        </div>
        <FadeInStagger className="mt-16 relative">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-0.5 bg-border" aria-hidden="true"></div>
          
          {processSteps.map((item, index) => (
            <FadeIn key={item.title} className="relative mb-12">
              <div className="flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <Card className="shadow-lg hover:shadow-primary/20 transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground animate-levitate">
                           <item.icon className="h-6 w-6"/>
                        </div>
                        <h3 className="text-2xl font-semibold leading-snug">{item.title}</h3>
                      </div>
                      <p className="mt-4 text-base leading-relaxed text-foreground/80">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="w-1/2"></div>
              </div>
              
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background flex items-center justify-center text-primary-foreground font-bold">
                {index + 1}
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}
