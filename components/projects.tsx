"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Code, ShoppingCart, Star, Folder, Eye } from "lucide-react"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Fully functional e-commerce website with custom WordPress plugins, payment integration, and admin dashboard. Built for scalability and user experience.",
      technologies: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS"],
      icon: <ShoppingCart size={32} />,
      gradient: "from-purple-600 via-blue-600 to-indigo-600",
      category: "WordPress",
      status: "Live",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Perfume E-Commerce",
      description:
        "Modern e-commerce platform for perfume sales using MERN stack with Tailwind CSS for responsive design and smooth user experience.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      icon: <ShoppingCart size={32} />,
      gradient: "from-blue-600 via-purple-600 to-pink-600",
      category: "MERN Stack",
      status: "Featured",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Psychology Platform",
      description:
        "Professional psychology consultation platform with appointment booking, user profiles, and secure communication features.",
      technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
      icon: <Code size={32} />,
      gradient: "from-green-600 via-teal-600 to-blue-600",
      category: "Healthcare",
      status: "Live",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website showcasing skills and projects, built with React.js and modern design principles.",
      technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript"],
      icon: <Code size={32} />,
      gradient: "from-orange-600 via-red-600 to-pink-600",
      category: "Portfolio",
      status: "Current",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-lg">
              <Folder size={20} className="text-purple-600" />
              <span className="font-semibold text-slate-700">My Work</span>
            </div>
            {/* Solid Color Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions crafted with passion and precision
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`group relative bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${isVisible ? "animate-fade-in-up" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image/Header */}
                <CardHeader className="relative p-0 h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-20"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-bold shadow-lg ${
                        project.status === "Featured"
                          ? "bg-yellow-500 text-white"
                          : project.status === "Live"
                            ? "bg-green-600 text-white"
                            : project.status === "Current"
                              ? "bg-blue-600 text-white"
                              : "bg-white/90 text-slate-700"
                      }`}
                    >
                      {project.status === "Featured" && <Star size={12} className="inline mr-1" />}
                      {project.status}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-700 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-lg">
                      {project.icon}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-200 border border-slate-300 rounded-lg text-xs text-slate-700 font-semibold hover:scale-105 transition-transform duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg text-xs font-semibold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-8 pt-0">
                  <div className="flex gap-3 w-full">
                    <button className="flex-1 px-4 py-3 bg-slate-900 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 hover:bg-slate-800">
                      <Github size={16} />
                      Code
                    </button>
                    <button className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 hover:bg-blue-700">
                      <Eye size={16} />
                      Live Demo
                    </button>
                  </div>
                </CardFooter>

                {/* Hover Effect Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none`}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
