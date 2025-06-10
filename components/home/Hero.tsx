"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative bg-[radial-gradient(ellipse_at_center,_#bcb3fa_0%,_#9585ff_30%,_#0d0714_80%)] text-white overflow-hidden">
      <div className="mx-auto px-4 pt-16 md:pt-24 lg:pt-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 hero-element hero-heading ${isLoaded ? 'animate-in' : ''}`}>
            Powerful Landing Pages
            <br />
            That Convert
          </h1>
          <p className={`text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto hero-element hero-description ${isLoaded ? 'animate-in' : ''}`}>
            Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing
            efforts—all with one simple solution.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center hero-element hero-buttons ${isLoaded ? 'animate-in' : ''}`}>
            <Button variant="outline" size="lg" className="text-white border-gray-600 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
              Watch demo
            </Button>
            <Button size="lg" className="bg-[#c1ff72] text-black hover:bg-[#a8e55d] hover:scale-105 transition-all duration-300">
              Start my trial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
        
        {/* Hero Image with 3D Drop Animation */}
        <div className="hero-card-perspective mt-0">
          <div className="hero-drop-card">
            <div className="hero-card-content">
              <Image
                src="/Hero_page.png"
                alt="Landing page builder interface"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f1a]/80 pointer-events-none"></div>
    </div>
  )
}