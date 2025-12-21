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
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
