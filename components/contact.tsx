"use client"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Send, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const CONTACT = {
  email: "rahalmohamad21@gmail.com",
  phone: "+96176901968",
  location: "Lebanon, Tyre",
}

export default function Contact() {
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

  const contactMethods = [
    {
      icon: <Mail size={28} />,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      gradient: "from-blue-600 via-purple-600 to-indigo-600",
      description: "Send me an email anytime",
      bgGradient: "from-blue-50 to-purple-50",
    },
    {
      icon: <Phone size={28} />,
      label: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
      gradient: "from-green-600 via-teal-600 to-blue-600",
      description: "Call for immediate assistance",
      bgGradient: "from-green-50 to-teal-50",
    },
    {
      icon: <MapPin size={28} />,
      label: "Location",
      value: CONTACT.location,
      href: "#",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      description: "Based in the Middle East",
      bgGradient: "from-purple-50 to-pink-50",
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-lg">
              <MessageCircle size={20} className="text-purple-600" />
              <span className="font-semibold text-slate-700">Let's Connect</span>
            </div>
            {/* Solid Color Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-slate-900">
              Get In Touch
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              {/* Contact Methods */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card className="relative bg-white/80 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      />
                      <CardContent className="relative z-10 p-8 text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${method.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {method.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{method.label}</h3>
                        <p className="text-slate-600 font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {method.value}
                        </p>
                        <p className="text-sm text-slate-500">{method.description}</p>

                        <div className="mt-4 flex items-center justify-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <span className="text-sm font-semibold">Connect</span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <Card className="bg-blue-600 border-0 shadow-2xl rounded-3xl overflow-hidden">
                  <CardContent className="p-12 text-white text-center">
                    <Sparkles size={48} className="mx-auto mb-6 text-purple-300" />
                    <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                    <p className="text-xl mb-8 text-blue-100">
                      Let's turn your vision into reality with cutting-edge web solutions
                    </p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Send size={20} />
                      Start a Conversation
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
