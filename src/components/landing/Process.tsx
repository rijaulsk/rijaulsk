import { FadeIn, FadeInStagger } from "../ui/fade-in";

const processSteps = [
  {
    step: "1",
    title: "Understand the problem",
    description: "Goals, constraints, and scope before any build begins.",
  },
  {
    step: "2",
    title: "Design the system",
    description: "UI, structure, and technical approach that fits the real need.",
  },
  {
    step: "3",
    title: "Build & implement",
    description: "Clean, performance-focused execution.",
  },
  {
    step: "4",
    title: "Deliver & support",
    description: "Deployment, handover, and optional ongoing support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-gray-50 dark:bg-black/20 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">How I Work</h2>
        </div>
        <FadeInStagger className="mt-12 max-w-3xl mx-auto space-y-8">
          {processSteps.map((step) => (
            <FadeIn key={step.title}>
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-foreground/80">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}
