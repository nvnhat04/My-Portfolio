
import Skills from "@/components/skills";
import Intro from "@/components/intro";
import About from "@/components/about";
import ThemeToggle from "@/components/toggleTheme";
export default function HomePage() {
  return (
    <section className="min-h-screen gap-8">
      <Intro />
      {/* <Content /> */}
      <Skills />
      <About />
      {/* Theme Toggle Button */}
      {/* <ThemeToggle/> */}
    </section>
    
  );
}
