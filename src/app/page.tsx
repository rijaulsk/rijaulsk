import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import Work from "@/components/landing/Work";
import Process from "@/components/landing/Process";
import WhyMe from "@/components/landing/WhyMe";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-5"></div>
      <div className="absolute inset-0 bg-dot opacity-20 dark:opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="relative z-10">
        <Header />
        <main className="flex-1">
          <Hero />
          <Services />
          <Work />
          <Process />
          <WhyMe />
          <Contact />
          <About />
        </main>
        <Footer />
      </div>
    </div>
  );
}
