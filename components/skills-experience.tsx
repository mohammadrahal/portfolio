"use client"

import { useEffect, useRef, useState } from "react"
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Calendar,
  MapPin,
  Building,
  Briefcase,
  Award,
  Target,
  Zap,
  Star,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SkillsExperience() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<"skills" | "experience">("skills")
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe size={28} />,
      skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      title: "Backend & Database",
      icon: <Database size={28} />,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
      gradient: "from-green-500 via-teal-500 to-blue-500",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      title: "Programming Languages",
      icon: <Code size={28} />,
      skills: ["JavaScript", "TypeScript", "PHP", "Java"],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
    },
    {
      title: "Tools & Platforms",
      icon: <Smartphone size={28} />,
      skills: ["WordPress", "Git", "Figma", "VS Code"],
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgGradient: "from-purple-50 to-indigo-50",
    },
  ]

  const experiences = [
    {
      company: "Lela bo Digital",
      position: "Frontend Developer",
      location: "Lebanon, Beirut",
      period: "7/2014 – Present",
      description: [
        "Developed responsive e-commerce websites using WordPress and PHP",
        "Created custom plugins and themes for enhanced functionality",
        "Optimized website performance and user experience",
      ],
      current: true,
      gradient: "from-blue-600 to-purple-600",
    },
    {
      company: "AUF-SIMPLON.CO",
      position: "Full Stack Developer",
      location: "Lebanon, Beirut",
      period: "7/2023 to 1/2024",
      description: [
        "Built e-learning platform using MERN stack with agile methodology",
        "Developed portfolio websites and restaurant management systems",
        "Implemented responsive design and modern UI/UX principles",
      ],
      current: false,
      gradient: "from-green-600 to-teal-600",
    },
    {
      company: "Violet Pro Company",
      position: "Full Stack Developer",
      location: "Lebanon, Tyre",
      period: "2/2022 to 4/2022",
      description: [
        "Developed e-commerce platform using PHP, MySQL, and JavaScript",
        "Designed responsive front-end interfaces with Bootstrap",
        "Integrated payment systems and user authentication",
      ],
      current: false,
      gradient: "from-purple-600 to-pink-600",
    },
  ]

  return (
    <section
      id="skills-experience"
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-slate-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-full mb-8 shadow-xl">
              <Briefcase size={20} className="text-purple-600" />
              <span className="text-slate-300 font-semibold">Skills & Experience</span>
            </div>
            {/* Solid Color Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 text-white">Expertise</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into digital reality through code and creativity
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="relative bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-2 shadow-xl">
              <div
                className={`absolute top-2 h-[calc(100%-16px)] bg-blue-600 rounded-xl transition-all duration-500 shadow-lg ${
                  activeTab === "skills" ? "left-2 w-[calc(50%-8px)]" : "left-[calc(50%+4px)] w-[calc(50%-8px)]"
                }`}
              />
              <div className="flex relative z-10">
                <button
                  onClick={() => setActiveTab("skills")}
                  className="px-8 py-4 font-bold transition-all duration-300 flex items-center gap-3 text-white rounded-xl min-w-[180px] justify-center"
                >
                  <Target size={22} className="text-purple-600" />
                  Skills
                </button>
                <button
                  onClick={() => setActiveTab("experience")}
                  className="px-8 py-4 font-bold transition-all duration-300 flex items-center gap-3 text-white rounded-xl min-w-[180px] justify-center"
                >
                  <Award size={22} className="text-purple-600" />
                  Experience
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          {activeTab === "skills" && (
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <Card
                    key={category.title}
                    className={`group relative bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 overflow-hidden hover:scale-105 ${isVisible ? "animate-fade-in-up" : ""}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                    />
                    <CardContent className="relative z-10 p-0">
                      <div className="flex items-center gap-4 mb-8">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-xl text-white`}
                        >
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                          {category.title}
                        </h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div
                            key={skill}
                            className="group/skill bg-slate-700/50 border border-slate-600 rounded-xl p-4 text-center transition-all duration-300 hover:bg-slate-600 hover:border-blue-500 hover:scale-105"
                            style={{ animationDelay: `${index * 0.15 + skillIndex * 0.1}s` }}
                          >
                            <span className="text-slate-200 font-semibold group-hover/skill:text-white transition-colors duration-300">
                              {skill}
                            </span>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeTab === "experience" && (
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="max-w-5xl mx-auto space-y-8">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className={`group relative bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl p-8 hover:border-slate-600 transition-all duration-500 overflow-hidden hover:scale-[1.02] ${isVisible ? "animate-fade-in-up" : ""}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Desktop: absolute badge top-right; Mobile: static below header */}
                    {exp.current && (
                      <div>
                        {/* Desktop (lg+): absolute top-right */}
                        <div className="hidden lg:block absolute top-6 right-6">
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg">
                            <Star size={14} />
                            Current
                          </div>
                        </div>
                        {/* Mobile (below header) */}
                        <div className="block lg:hidden mb-4">
                          <div className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-full shadow-lg w-max">
                            <Star size={14} />
                            Current
                          </div>
                        </div>
                      </div>
                    )}
                    <CardContent className="relative z-10 p-0">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-3 mb-4">
                            <Building size={24} className="text-purple-600" />
                            <span className="text-xl font-semibold text-blue-300">{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row md:items-center md:gap-8 mb-6">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                          <MapPin size={18} className="text-purple-600" />
                          <span className="text-slate-300">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} className="text-purple-600" />
                          <span className="text-slate-300">{exp.period}</span>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Zap size={16} className="mt-1 text-purple-600 flex-shrink-0" />
                            <span className="text-slate-300 leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
