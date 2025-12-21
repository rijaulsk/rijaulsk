import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhatIHandle from "@/components/landing/WhatIHandle";
import Work from "@/components/landing/Work";
import Process from "@/components/landing/Process";
import WhyMe from "@/components/landing/WhyMe";
import Engagement from "@/components/landing/Engagement";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background relative overflow-hidden">
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <WhatIHandle />
          <Work />
          <Process />
          <WhyMe />
          <Engagement />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
