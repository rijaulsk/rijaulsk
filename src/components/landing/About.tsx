<<<<<<< HEAD
import { FadeIn } from "../ui/fade-in";

export default function About() {
  return (
    <section id="about" className="w-full bg-background py-16 md:py-20">
      <FadeIn className="mx-auto max-w-4xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            <img
              src="/images/rijaulsk.png"
              alt="Rijaul Sk"
              width={200}
              height={200}
              className="rounded-full object-cover aspect-square shadow-lg"
            />
          </div>
          <div className="md:col-span-2">
            <div className="space-y-4 text-lg leading-relaxed text-foreground/80">
                <p>
                    I build and fix digital systems, from branding and UI to deployment and support. I’ve been doing this since 2017.
                </p>
                <p>
                    I don’t sell business outcomes or inflated promises. I focus on clean execution and clear communication, and I deliver what I commit to.
                </p>
                <p>
                    I run a small studio called DebugSwift and teach at Welearn Academy. My background in both building and teaching means I value structure, clarity, and practical results.
                </p>
                 <p>
                    I work with modern tools but am not tied to a specific stack. I use what works for the problem.
                </p>
=======
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "../ui/fade-in";

export default function About() {
  const authorImage = PlaceHolderImages.find(p => p.id === "rijaulsk-photo");

  return (
    <section id="about" className="w-full bg-gray-50 dark:bg-black/20 py-16 md:py-20">
      <FadeIn className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-1 flex justify-center">
              <img
                src="/images/rijaulsk.png"
                alt="Rijaul Sk"
                width={250}
                height={250}
                className="rounded-full object-cover aspect-square shadow-lg"
              />
            </div>
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter text-foreground">About Me</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-foreground/80">
              <p>
                I'm Rijaul Sk — Founder of DebugSwift and Instructor at Welearn Academy.
              </p>
              <p>
                I've been building websites and digital systems since 2017, starting from my college days. What started as curiosity turned into a skill set that covers branding, design, development, SEO, and deployment.
              </p>
              <p>
                I founded DebugSwift to handle custom projects for businesses that need complete digital execution — not just a website, but the full system.
              </p>
              <p>
                I also teach web development, Python, digital marketing, and design at Welearn Academy, where I've trained 100+ students over the past 2+ years. Teaching keeps my fundamentals strong and my approach structured.
              </p>
              <p>
                I work with modern tools and frameworks, but I'm not locked to any single stack. I choose what fits the problem — whether that's React, WordPress, PHP/MySQL, or custom solutions.
              </p>
               <p className="font-semibold text-foreground">
                I don't sell growth promises or inflated guarantees. I focus on clean execution, honest communication, and delivering what I commit to.
              </p>
>>>>>>> 08dc22f (first commit)
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
