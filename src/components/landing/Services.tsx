import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { FadeIn, FadeInStagger } from "../ui/fade-in";

const services = [
  {
    title: "Quick Business Website",
    price: "₹12,000 - ₹18,000",
    features: [
      "Clean, professional website (5-7 pages)",
      "Mobile-optimized, fast loading",
      "Basic SEO setup (meta tags, sitemap)",
      "Google Business optimization",
      "2 weeks support",
    ],
    timeline: "7-10 days",
    bestFor: "Small businesses, consultants, local services",
    isPopular: false,
  },
  {
    title: "Complete Digital Setup",
    price: "₹25,000 - ₹40,000",
    features: [
      "Brand basics (logo direction, colors, style guide)",
      "Custom website (design + development)",
      "Performance optimization (Lighthouse 90+)",
      "SEO foundations (meta, schema, sitemaps)",
      "Google Business setup & optimization",
      "1 month post-launch support",
    ],
    timeline: "2-3 weeks",
    bestFor: "Professionals, established businesses, those wanting complete setup",
    isPopular: true,
  },
  {
    title: "Ongoing Support",
    price: "₹8,000 - ₹15,000/month",
    features: [
      "Monthly updates & changes",
      "Performance monitoring",
      "Content updates",
      "Basic SEO maintenance",
      "Priority support",
    ],
    timeline: "Ongoing",
    bestFor: "Existing clients, agencies, businesses needing regular updates",
    isPopular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-gray-50 dark:bg-black/20 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">What I Offer</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed text-foreground/80">
            Clear, affordable packages to get your business online and growing.
          </p>
        </div>
        <FadeInStagger className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <FadeIn
              key={service.title}
            >
            <Card
              className={`flex flex-col h-full transition-transform duration-300 hover:-translate-y-2 ${
                service.isPopular ? "border-primary shadow-lg" : "shadow-sm"
              }`}
            >
              <CardHeader className="relative">
                {service.isPopular && (
                  <Badge className="absolute top-0 -translate-y-1/2 bg-accent text-accent-foreground">Most Popular</Badge>
                )}
                <CardTitle className="text-2xl font-semibold leading-snug">{service.title}</CardTitle>
                <CardDescription className="text-3xl font-bold text-primary">{service.price}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-base leading-relaxed text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4 pt-6">
                 <div className="w-full text-sm text-foreground/70">
                    <p><span className="font-semibold">Timeline:</span> {service.timeline}</p>
                    <p><span className="font-semibold">Best For:</span> {service.bestFor}</p>
                </div>
                <Button asChild className="w-full" variant={service.isPopular ? "default" : "outline"}>
                   <a href={`https://wa.me/918479823836?text=Hi%20Rijaul,%20I'm%20interested%20in%20the%20${encodeURIComponent(service.title)}%20package.`} target="_blank" rel="noopener noreferrer">
                    Get Started
                    </a>
                </Button>
              </CardFooter>
            </Card>
            </FadeIn>
          ))}
        </FadeInStagger>
      </FadeIn>
    </section>
  );
}
