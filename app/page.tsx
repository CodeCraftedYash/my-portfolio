import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WindowsLoading from "@/components/WindowsLoading";
import { AnimatedEye } from "@/components/AnimatedEye";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="w-full relative">
      <Navbar />
      <Hero />
      <div className="flex flex-col sm:flex-row items-center justify-center sm:px-20 sm:gap-10 md:gap-10 md:px-10 gap-12 px-4">
      <About />
      <WindowsLoading />
      </div>
          <div className="hidden">
            <AnimatedEye />
          </div>
          <Skills />
          
    </main>
    );
}
