"use client"

import { Mail, Linkedin} from "lucide-react"
import { useEffect, useState } from "react"

const CONTACT = {
  email: "rahalmohamad21@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammadrahal/",
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer
      className={`relative py-10 bg-slate-900 text-white transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8">
            {/* Email Button */}
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-center gap-4 w-full sm:w-auto px-8 py-4 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-500"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Mail size={20} className="text-white" />
              </div>
              <div className="text-left">
                <span className="block text-sm text-slate-400 font-medium">Email</span>
                <span className="block text-white font-bold group-hover:text-blue-400 transition-colors duration-300">
                  Gmail
                </span>
              </div>
            </a>

            {/* LinkedIn Button */}
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 w-full sm:w-auto px-8 py-4 bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-blue-500"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                <Linkedin size={20} className="text-white" />
              </div>
              <div className="text-left">
                <span className="block text-sm text-slate-400 font-medium">Connect</span>
                <span className="block text-white font-bold group-hover:text-blue-400 transition-colors duration-300">
                  LinkedIn
                </span>
              </div>
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8" />


          {/* Copyright */}
          <p className="text-slate-500 text-sm">&copy; 2025 Mohammad Rahal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
