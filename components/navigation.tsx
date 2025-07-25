"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { createPortal } from "react-dom"
import { Menu, X, User, Briefcase, FolderOpen, MessageCircle } from "lucide-react"
import { throttle } from "@/lib/utils"

const SECTIONS = ["about", "skills-experience", "projects", "contact"] as const

const NAV_ITEMS = [
  { name: "About", href: "#about", id: "about", icon: <User size={18} /> },
  { name: "Experience", href: "#skills-experience", id: "skills-experience", icon: <Briefcase size={18} /> },
  { name: "Projects", href: "#projects", id: "projects", icon: <FolderOpen size={18} /> },
  { name: "Contact", href: "#contact", id: "contact", icon: <MessageCircle size={18} /> },
]

function DesktopNav({
  navItems,
  activeSection,
  onNavClick,
}: {
  navItems: typeof NAV_ITEMS
  activeSection: string
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
}) {
  return (
    <div className="hidden md:flex items-center space-x-2">
      {navItems.map((item) => {
        const isActive = activeSection === item.id
        return (
          <a
            key={item.name}
            href={item.href}
            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
              isActive
                ? "text-white bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg shadow-blue-500/25"
                : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
            }`}
            onClick={(e) => onNavClick(e, item.href)}
          >
            <span className={`${isActive ? "text-white" : "text-purple-600"}`}>{item.icon}</span>
            {item.name}
          </a>
        )
      })}
    </div>
  )
}

function MobileNav({
  navItems,
  activeSection,
  isOpen,
  onNavClick,
  onClose,
}: {
  navItems: typeof NAV_ITEMS
  activeSection: string
  isOpen: boolean
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  onClose: () => void
}) {
  return typeof window !== "undefined"
    ? createPortal(
        <div className="md:hidden">
          <div
            className={`fixed inset-0 z-[10000] bg-gradient-to-br from-blue-900/95 to-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 p-3 rounded-full text-white hover:bg-white/10 transition-all duration-300"
            >
              <X size={28} className="text-purple-400" />
            </button>

            <nav className="flex flex-col items-center gap-6">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-4 text-2xl font-bold px-8 py-4 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-2xl scale-110"
                        : "text-blue-100 hover:text-white hover:scale-105 hover:bg-white/10"
                    }`}
                    onClick={(e) => onNavClick(e, item.href)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-purple-400">{item.icon}</span>
                    {item.name}
                  </a>
                )
              })}
            </nav>
          </div>
        </div>,
        document.body,
      )
    : null
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(
    throttle(() => {
      setScrolled(window.scrollY > 50)
      const scrollPosition = window.scrollY + 120

      if (window.scrollY < 50) {
        setActiveSection("")
        return
      }

      let currentSection = "about"
      for (const section of SECTIONS) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section
            break
          }
        }
      }
      setActiveSection(currentSection)
    }, 16),
    [],
  )

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({ top: offsetTop, behavior: "smooth" })
      setActiveSection(targetId)
      setTimeout(() => setIsOpen(false), 400)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group" aria-label="Go to top">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-xl">MR</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Mohammad Rahal
              </span>
              <span className="text-xs text-slate-500 font-medium">Frontend Developer</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <DesktopNav navItems={NAV_ITEMS} activeSection={activeSection} onNavClick={handleNavClick} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg text-slate-700 hover:scale-105 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} className="text-purple-600" />
          </button>
        </div>
      </div>

      <MobileNav
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        isOpen={isOpen}
        onNavClick={handleNavClick}
        onClose={() => setIsOpen(false)}
      />
    </nav>
  )
}
