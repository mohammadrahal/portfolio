"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, User, BookOpen, Languages, Award, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" ref={sectionRef} className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-lg">
              <User size={20} className="text-purple-600" />
              <span className="font-semibold text-slate-700">About Me</span>
            </div>
            {/* Solid Color Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900">
              My Journey
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story Content */}
            <div
              className={`space-y-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            >
              <div className="space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed">
                  I'm a passionate{" "}
                  <span className="font-bold text-blue-600 relative">
                    Frontend Developer
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                  </span>{" "}
                  from Lebanon, dedicated to crafting exceptional digital experiences that bridge the gap between design
                  and functionality.
                </p>

                <p className="text-xl text-slate-600 leading-relaxed">
                  With expertise in the <span className="font-bold text-purple-600">MERN stack</span> and extensive{" "}
                  <span className="font-bold text-indigo-600">WordPress development</span> experience, I transform
                  complex ideas into intuitive, scalable solutions that drive business growth.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {["React.js", "Next.js", "Node.js", "WordPress", "MongoDB"].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl text-slate-700 font-semibold hover:scale-105 transition-transform duration-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div
              className={`space-y-8 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            >
              {/* Education Card */}
              <Card className="group bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <BookOpen size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="relative p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">TS2 Management Information Systems</h4>
                          <p className="text-slate-600 mb-3">Ipnet maarakeh, Tyre</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar size={16} />
                            <span>2023</span>
                          </div>
                        </div>
                        <Award size={20} className="text-purple-600" />
                      </div>
                    </div>

                    <div className="relative p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-l-4 border-purple-500">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Bt3 Information Technology</h4>
                          <p className="text-slate-600 mb-3">Al Afak Sur, Tyre, Lebanon</p>
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar size={16} />
                            <span>2019</span>
                          </div>
                        </div>
                        <Award size={20} className="text-purple-600" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card className="group bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Languages size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Languages</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <span className="font-bold text-slate-900">Arabic</span>
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-purple-600" />
                        <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold shadow-lg">
                          Native
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                      <span className="font-bold text-slate-900">English</span>
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-purple-600" />
                        <span className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                          Professional
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}