import Hero from "@/components/hero"
import About from "@/components/about"
import SkillsExperience from "@/components/skills-experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <SkillsExperience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
