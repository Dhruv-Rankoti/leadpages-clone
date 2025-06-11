"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    
    const heroSection = heroRef.current

    function animateGradient() {
      const start = 50
      const end = 80
      const duration = 1200 // Changed to 1.2s
      let startTime: number | null = null

      function animate(currentTime: number) {
        if (!startTime) startTime = currentTime
        let progress = (currentTime - startTime) / duration

        if (progress > 1) progress = 1

        // Easing function (ease-in-out)
        progress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
        const currentStop = start + (end - start) * progress
        
        heroSection.style.background = `radial-gradient(ellipse 90% 50% at center, 
          #bcb3fa 10%, 
          rgba(188, 179, 250, 0.8) 20%,
          rgba(95, 23, 216, 0.9) 30%,
          rgba(95, 23, 216, 0.7) 38%,
          rgba(13, 7, 20, 0.95) ${currentStop-5}%,
          #0d0714 ${currentStop}%)`

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }

    const timer = setTimeout(() => {
      setIsLoaded(true)
      animateGradient()
    }, 1000)  // Changed to 1s

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      ref={heroRef} 
      className="relative text-white overflow-hidden"
      style={{ background: `radial-gradient(ellipse 90% 50% at center, 
        #bcb3fa 10%, 
        rgba(188, 179, 250, 0.8) 20%,
        rgba(95, 23, 216, 0.9) 30%,
        rgba(95, 23, 216, 0.7) 38%,
        rgba(13, 7, 20, 0.95) 45%,
        #0d0714 50%)` }}
    >
      <div className="mx-auto px-4 pt-16 md:pt-24 lg:pt-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-8 hero-element hero-heading ${isLoaded ? 'animate-in' : ''}`}>
            Powerful Landing Pages That Convert
          </h1>
          <p className={`text-3xs md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto hero-element hero-description ${isLoaded ? 'animate-in' : ''}`}>
            Launch high-converting landing pages faster, generate qualified leads, and optimize your marketing
            efforts—all with one simple solution.
          </p>
          <div className={`flex flex-col sm:flex-row gap-0 justify-center hero-element hero-buttons max-w-[20rem] mx-auto ${isLoaded ? 'animate-in' : ''}`}>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="flex-1 text-[#3c3f40] bg-[#ffffffc4] backdrop-blur-md 
                transition-all duration-250 rounded-md px-5 py-0
                placeholder:text-[#3c3f40] focus:outline-none focus:ring-2 
                focus:ring-[#c1ff72] focus:bg-white sm:min-w-[12rem]" 
              placeholder="Work email"
            />
            <Button 
              size="lg" 
              className="bg-[#c1ff72] text-black cursor-pointer hover:bg-[#a8e55d] px-[1rem] py-[1rem]
                transition-all duration-250 whitespace-nowrap text-base"
            >
              Start my trial
              <svg 
                className="stroke-current w-6 h-6 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M20.002 12h-16M15 17s5-3.682 5-5-5-5-5-5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.646"
                />
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