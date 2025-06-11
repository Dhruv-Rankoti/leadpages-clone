import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoProps {
  isScrolled?: boolean
  isInitialLoad?: boolean
}

export default function Logo({ isScrolled, isInitialLoad = true }: LogoProps) {
  return (
    <div className="flex items-center relative group">
      {/* Logo icon */}
      <div
        className={cn(
          "transition-all duration-700 ease-out z-10 bg-[#0d0714]",
          isInitialLoad ? "scale-0 opacity-0" : "scale-100 opacity-100"
        )}
      >
        <Image
          src="/logo.png"
          alt="Leadpages"
          width={32}
          height={32}
          className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110 group-hover:delay-75 group-hover:ease-out"
        />
      </div>

      {/* Container for text with overflow hidden */}
      <div className="overflow-hidden ml-2">
        <span
          className={cn(
            "text-xl font-semibold transform inline-block transition-all duration-700",
            isInitialLoad
              ? "-translate-x-full opacity-0"
              : isScrolled
              ? "-translate-x-[200%] opacity-0"
              : "translate-x-0 opacity-100"
          )}
        >
          Leadpages
        </span>
      </div>
    </div>
  )
}
