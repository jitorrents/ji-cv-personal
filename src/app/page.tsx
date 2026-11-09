import { About } from "@/components/sections/home/About";
import { Contact } from "@/components/sections/home/Contact";
import { Explore } from "@/components/sections/home/Explore";
import { FocusAreas } from "@/components/sections/home/FocusAreas";
import { Hero } from "@/components/sections/home/Hero";
import { KeyFacts } from "@/components/sections/home/KeyFacts";

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFacts />
      <About />
      <FocusAreas />
      <Explore />
      <Contact />
    </>
  );
}
