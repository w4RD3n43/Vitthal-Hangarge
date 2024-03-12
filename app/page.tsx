import Hero from "@/Components/main/Hero";
import Skills from "@/Components/main/Skills";
import Encryption from "@/Components/main/Encryption";
import Projects from "@/Components/main/Projects";
import Contactme from '@/Components/main/Contactme'
export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Skills/>
        <Encryption/>
        <Projects/>
        <Contactme/>
      </div>
    </main>
  );
}
