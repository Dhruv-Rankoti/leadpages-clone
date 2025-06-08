import Hero from "@/components/home/Hero"
import Features from "@/components/home/Features"
import TemplateShowcase from "@/components/home/TemplateShowcase"
import Testimonials from "@/components/home/Testimonials"
import Pricing from "@/components/home/Pricing"
import CTASection from "@/components/home/CTASection"
import HeroWithStat from "@/components/home/HeroWithStat"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <HeroWithStat />
      <Features />
      <TemplateShowcase />
      <Testimonials />
      <Pricing />
      <CTASection />
    </div>
  )
}