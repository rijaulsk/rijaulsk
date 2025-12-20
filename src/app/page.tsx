import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
<<<<<<< HEAD
import WhatIHandle from "@/components/landing/WhatIHandle";
import Work from "@/components/landing/Work";
import Process from "@/components/landing/Process";
import WhyMe from "@/components/landing/WhyMe";
import Engagement from "@/components/landing/Engagement";
=======
import Services from "@/components/landing/Services";
import Work from "@/components/landing/Work";
import Process from "@/components/landing/Process";
import WhyMe from "@/components/landing/WhyMe";
>>>>>>> 08dc22f (first commit)
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background relative overflow-hidden">
<<<<<<< HEAD
=======
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-5"></div>
      <div className="absolute inset-0 bg-dot opacity-20 dark:opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
>>>>>>> 08dc22f (first commit)
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
<<<<<<< HEAD
          <WhatIHandle />
          <Work />
          <Process />
          <WhyMe />
          <Engagement />
=======
          <Services />
          <Work />
          <Process />
          <WhyMe />
>>>>>>> 08dc22f (first commit)
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
