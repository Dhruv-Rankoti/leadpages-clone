import { cn } from "@/lib/utils"

export default function Logo({ isScrolled }: { isScrolled?: boolean }) {
  return (
    <div className="flex items-center relative">
      {/* Logo icon */}
      <div className="transition-transform duration-500 z-10 bg-[#0d0714]">
        <img src="/logo.png" alt="Leadpages" className=" logo-hover w-7 h-7" />
      </div>

      {/* Container for text with overflow hidden */}
      <div className="overflow-hidden ml-2">
        <span
          className={cn(
            "text-xl font-semibold transform inline-block",
            isScrolled
              ? "transition-all duration-300 ease-in -translate-x-[200%] opacity-0"
              : "transition-all duration-500 ease-out translate-x-0 opacity-100"
          )}
        >
          Leadpages
        </span>
      </div>
    </div>
  )
}
