import { Check } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const whyWorkWithMe = [
    "I take ownership of execution",
    "I’m not limited to a single stack or tool",
    "I focus on structure and long-term maintainability",
    "I don’t sell business or marketing guarantees",
    "I communicate clearly and honestly",
];

export default function WhyMe() {
    return (
        <section id="why-me" className="w-full bg-background py-16 md:py-20">
            <FadeIn className="mx-auto max-w-7xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">Why Work With Me</h2>
                </div>
                <FadeInStagger className="mt-12 max-w-2xl mx-auto space-y-4">
                    {whyWorkWithMe.map((reason) => (
                        <FadeIn key={reason}>
                            <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-black/20">
                                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-lg text-foreground/80">{reason}</p>
                            </div>
                        </FadeIn>
                    ))}
                </FadeInStagger>
            </FadeIn>
        </section>
    );
}
