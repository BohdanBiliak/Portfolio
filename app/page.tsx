import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Experience = dynamic(() => import("@/components/Experience"), {
  loading: () => <div className="min-h-screen" />,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <div className="min-h-screen" />,
});

const Languages = dynamic(() => import("@/components/Languages"), {
  loading: () => <div className="min-h-screen" />,
});

const Courses = dynamic(() => import("@/components/Courses"), {
  loading: () => <div className="min-h-screen" />,
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen pt-16">
      <Hero />
      <Experience />
      <Skills />
      <Languages />
      <Courses />
      <Footer />
    </main>
  );
}
