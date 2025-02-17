import About from "@/components/About";
import GlowingButton from "@/components/Button";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div>
        <Hero />
        <About />
        <GlowingButton />
      </div>
    </main>
    );
}
