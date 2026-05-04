import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[--color-light-bg] text-[--color-brand-text] overflow-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Courses />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
