"use client"
import { Mail,HeartHandshake } from "lucide-react"
import { useState, useEffect } from "react"

const CONTACT = {
  email: "rahalmohamad21@gmail.com",
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 mt-20 p-10">
      {/* New Modern Background */}
      <div className="absolute inset-0">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/40 rounded-full animate-pulse" />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-purple-200/40 rotate-45 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-32 w-28 h-28 bg-indigo-200/40 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-20 w-20 h-20 bg-blue-300/40 rotate-12 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />

        {/* Subtle Mouse Follower */}
        <div
          className="absolute w-40 h-40 bg-blue-300/20 rounded-full blur-xl transition-all duration-500 ease-out pointer-events-none"
          style={{
            left: mousePosition.x - 80,
            top: mousePosition.y - 80,
          }}
        />

        {/* Diagonal Lines Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,#3b82f6_49%,#3b82f6_51%,transparent_51%)] bg-[length:20px_20px]" />
        </div>
      </div>

      <div
        className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      >
        {/* Floating Badge */}
        <div
          className={`inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full mb-8 border border-blue-200 shadow-lg transition-all duration-700 delay-200 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          <HeartHandshake size={18} className="text-purple-600 animate-pulse" />
          <span className="text-sm font-semibold text-slate-700">Hello Im</span>
        </div>

        {/* Main Heading - Solid Color */}
        <h1
          className={`text-6xl sm:text-7xl lg:text-7xl font-black mb-6 tracking-tight transition-all duration-700 delay-300 text-slate-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="block mb-2">Mohammad Rahal</span>
        </h1>

        {/* Role with Animated Underline */}
        <div
          className={`mb-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            <span className="relative inline-block">
              Frontend Developer
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-blue-600 rounded-full transform scale-x-0 animate-[scaleX_1.5s_ease-out_2s_forwards] origin-left opacity-80" />
            </span>
          </p>
          <p className="text-xl text-slate-600 font-medium">Crafting Digital Experiences That Inspire</p>
        </div>

        {/* Enhanced Description */}
        <p
          className={`text-lg sm:text-xl mb-12 max-w-4xl mx-auto leading-relaxed text-slate-600 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Specializing in modern web technologies including <span className="font-bold text-blue-600">React.js</span>,{" "}
          <span className="font-bold text-blue-700">Next.js</span>, and{" "}
          <span className="font-bold text-blue-800">WordPress</span>. I transform ideas into{" "}
          <span className="font-bold text-slate-900">exceptional digital experiences</span> that drive results.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="group px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 min-w-[200px] justify-center hover:bg-blue-700"
          >
            <Mail size={20} />
            <span>Get In Touch</span>
          </a>
        </div>
      </div>
    </section>
  )
}
