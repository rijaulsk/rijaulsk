import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const engagementModels = [
  {
    title: "Fixed-scope builds",
    description: "For clearly defined projects with a set scope and deliverables."
  },
  {
    title: "Custom development projects",
    description: "For more complex or evolving projects that require a flexible approach."
  },
  {
    title: "Ongoing technical support",
    description: "For businesses that need regular maintenance, updates, and technical assistance."
  }
];

export default function Engagement() {
  return (
    <section id="engagement" className="w-full bg-gray-50 dark:bg-black/20 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">How We Can Work Together</h2>
        </div>
        <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <FadeIn key={model.title}>
              <Card className="flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold leading-snug">{model.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-base leading-relaxed text-foreground/80">{model.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}