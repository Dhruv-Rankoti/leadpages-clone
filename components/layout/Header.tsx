"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X, ChevronRight } from "lucide-react"
import Logo from "@/components/ui/Logo"

type Section = {
  title: string;
  isSection: boolean;
  highlight?: boolean;  // Make highlight optional
  items: {
    title: string;
    href: string;
    description: string;
    icon?: string;
    featured?: boolean;
    podcastImage?: string;
    linkStyle?: boolean;
  }[];
}

const navItems: {
  title: string;
  href: string;
  children?: Section[];
}[] = [
  {
    title: "Platform",
    href: "#",
    children: [
      {
        title: "FEATURES",
        isSection: true,
        items: [
          {
            title: "Landing Pages",
            href: "/platform/landing-pages",
            description: "Easily build beautiful landing pages that convert",
            icon: "📄"
          },
          {
            title: "Conversion Tools",
            href: "/platform/conversion-tools",
            description: "Boost conversions with pop-ups, alert bars, and the Lead Meter",
            icon: "⚡"
          },
          {
            title: "Payments",
            href: "/platform/payments",
            description: "Add online checkouts to your pages for seamless transactions",
            icon: "💳"
          },
        ]
      },
      {
        title: "PLATFORM OVERVIEW",
        isSection: true,
        items: [
          {
            title: "Websites",
            href: "/platform/websites",
            description: "Create a code-free site for your business, products, or events",
            icon: "🌐"
          },
          {
            title: "Lead Management",
            href: "/platform/lead-management",
            description: "Sort, edit, and manage your leads all in one place",
            icon: "👥"
          },
          {
            title: "All features",
            href: "/platform/all-features",
            description: "See all our product offerings in one place",
            icon: "⚙️"
          },
        ]
      },
      {
        title: "WHAT'S NEW",
        isSection: true,
        items: [
          {
            title: "Lead Enrichment",
            href: "/platform/lead-enrichment",
            description: "Enrich your leads with powerful data to tailor your campaigns",
            featured: true,
            icon: "🔍"
          },
          {
            title: "Invite your Team",
            href: "/platform/team",
            description: "Get your whole team on the same page",
            icon: "👥"
          },
        ]
      },
      {
        title: "INTEGRATIONS",
        isSection: true,
        items: [
          {
            title: "See 90+ Integrations",
            href: "/platform/integrations",
            description: "Connect with Mailchimp, HubSpot, Stripe, Zapier, Keap and more",
            icon: "🔗"
          },
        ]
      },
    ],
  },
  {
    title: "Solutions",
    href: "#",
    children: [
      {
        title: "USE CASES",
        isSection: true,
        items: [
          {
            title: "PPC Ads",
            href: "/solutions/ppc-ads",
            description: "Increase your RoAS and boost your conversions",
            icon: "🎯"
          },
          {
            title: "Social Ads",
            href: "/solutions/social-ads",
            description: "Get more leads and sales from your social campaigns",
            icon: "📱"
          },
          {
            title: "Social Media",
            href: "/solutions/social-media",
            description: "Turn followers into subscribers with engaging landing pages",
            icon: "👍"
          },
          {
            title: "Search Engine Marketing",
            href: "/solutions/sem",
            description: "Grow your organic traffic with optimized web pages",
            icon: "🔍"
          },
          {
            title: "Email Marketing",
            href: "/solutions/email-marketing",
            description: "Grow your email list and promote special offers to your subscribers",
            icon: "📧"
          },
          {
            title: "Small Business Websites",
            href: "/solutions/small-business",
            description: "Establish your online presence without expensive developers",
            icon: "🏢"
          },
          {
            title: "Lead Generation",
            href: "/solutions/lead-generation",
            description: "Get all the tools you need to find, nurture, and manage your leads",
            icon: "🎣"
          },
          {
            title: "Demand Capture",
            href: "/solutions/demand-capture",
            description: "Fill your sales funnel with ideal prospects",
            icon: "🏆"
          },
        ]
      },
    ],
  },
  {
    title: "Templates",
    href: "#",
    children: [
      {
        title: "LANDING PAGE TEMPLATES",
        isSection: true,
        highlight: true,
        items: [
          {
            title: "Lead Capture",
            href: "/templates/lead-capture",
            description: "Grow your leads with free offers and incentives",
          },
          {
            title: "Sales",
            href: "/templates/sales",
            description: "Monetize with sales pages, upsell funnels and checkouts",
          },
          {
            title: "Offers & Promotions",
            href: "/templates/offers",
            description: "Promote your latest offers and discounts",
          },
          {
            title: "Social Bio Link",
            href: "/templates/bio-link",
            description: "Turn your social followers into leads and customers",
          },
          {
            title: "Consultation",
            href: "/templates/consultation",
            description: "Offer free consultations and promote your brand and services",
          },
          {
            title: "Webinar & Virtual Event",
            href: "/templates/webinar",
            description: "Make it easy for leads to sign up for your webinars and virtual events",
          },
        ]
      },
      {
        title: "WEBSITE TEMPLATES",
        isSection: true,
        items: [
          {
            title: "Mini Sites",
            href: "/templates/mini-sites",
            description: "Create websites for products, services, and promotions",
          },
          {
            title: "Programs & Internal",
            href: "/templates/programs",
            description: "Keep team members informed about internal initiatives",
          },
          {
            title: "Conferences & Events",
            href: "/templates/events",
            description: "Get registrants and share details for your next event",
          },
        ]
      },
      {
        title: "",
        isSection: false,
        items: [
          {
            title: "All Landing Page Templates",
            href: "/templates/landing-pages",
            description: "",
            linkStyle: true
          },
          {
            title: "All Site Templates",
            href: "/templates/sites",
            description: "",
            linkStyle: true
          },
        ]
      },
    ],
  },
  {
    title: "Resources",
    href: "#",
    children: [
      {
        title: "LEARN",
        isSection: true,
        items: [
          {
            title: "Blog",
            href: "/resources/blog",
            description: "Get the latest marketing tips and updates",
            icon: "📝"
          },
          {
            title: "Freebies",
            href: "/resources/freebies",
            description: "Receive exclusive content to help grow your business",
            icon: "🎁"
          },
        ]
      },
      {
        title: "MARKETING RESOURCES",
        isSection: true,
        highlight: true,
        items: [
          {
            title: "Help Center",
            href: "/resources/help",
            description: "Get answers and learn how to use Leadpages features",
            icon: "❓"
          },
          {
            title: "Case Studies",
            href: "/resources/case-studies",
            description: "Discover how Leadpages users built multi-million dollar businesses",
            icon: "💡"
          },
        ]
      },
      {
        title: "GUIDES",
        isSection: true,
        items: [
          {
            title: "Ultimate Guide to Landing Pages",
            href: "/resources/landing-pages-guide",
            description: "",
          },
          {
            title: "Conversion Rate Optimization Guide",
            href: "/resources/cro-guide",
            description: "",
          },
          {
            title: "Guide to Lead Generation",
            href: "/resources/lead-generation-guide",
            description: "",
          },
          {
            title: "All Guides",
            href: "/resources/guides",
            description: "",
            linkStyle: true
          },
        ]
      },
      {
        title: "PODCASTS",
        isSection: true,
        items: [
          {
            title: "On the Record",
            href: "/resources/on-the-record",
            description: "Lively convos about marketing & music",
            podcastImage: "/on-the-record.png"
          },
          {
            title: "The Glitch Report",
            href: "/resources/glitch-report",
            description: "Daily AI-Delivered Marketing News",
            podcastImage: "/glitch-report.png"
          },
        ]
      },
      {
        title: "AFFILIATE PROGRAM",
        isSection: true,
        items: [
          {
            title: "Affiliate Portal",
            href: "/affiliate/portal",
            description: "Log in to your affiliate account",
            icon: "↩️"
          },
          {
            title: "Become an Affiliate",
            href: "/affiliate/signup",
            description: "Earn recurring revenue when you refer your audience to Leadpages",
            icon: "⚙️"
          },
        ]
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isNavHovered, setIsNavHovered] = useState(false)
  const [currentOpenMenu, setCurrentOpenMenu] = useState<string | null>(null)
  const [animationClass, setAnimationClass] = useState<string>("")
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add cleanup effect
  useEffect(() => {
    return () => {
      // Cleanup: ensure scroll is enabled when component unmounts
      document.body.classList.remove('no-scroll')
    }
  }, [])

  const handleMenuOpen = (menuTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Only add no-scroll if not already present
    if (!currentOpenMenu) {
      document.body.classList.add('no-scroll')
    }

    if (currentOpenMenu && currentOpenMenu !== menuTitle) {
      // Determine slide direction
      const currentIndex = navItems.findIndex(item => item.title === menuTitle)
      const previousIndex = navItems.findIndex(item => item.title === currentOpenMenu)
      
      if (currentIndex > previousIndex) {
        setAnimationClass("slide-from-right")
      } else {
        setAnimationClass("slide-from-left")
      }
    } else {
      setAnimationClass("dropdown-rotate")
    }
    
    setCurrentOpenMenu(menuTitle)
  }

  const handleMenuClose = (menuTitle: string) => {
    timeoutRef.current = setTimeout(() => {
      if (currentOpenMenu === menuTitle) {
        setCurrentOpenMenu(null)
        // Remove no-scroll when all menus are closed
        document.body.classList.remove('no-scroll')
      }
    }, 150)
  }

  // Add handler for when mouse leaves entire header
  const handleHeaderMouseLeave = () => {
    setIsNavHovered(false)
    if (currentOpenMenu) {
      setCurrentOpenMenu(null)
      document.body.classList.remove('no-scroll')
    }
  }

  const getMenuAnimationClass = (menuTitle: string) => {
    if (currentOpenMenu === menuTitle) {
      return animationClass
    }
    return ""
  }
  
  return (
    <>
      <header className="sticky top-0 p-[0.625rem] z-50 w-full bg-none transition-colors duration-300">
        <div className={cn(
          "container flex h-16 items-center justify-between bg-[#0d0714] border rounded-md py-1.5 pr-1.5 pl-[1.875rem] gap-3 transition-colors duration-500",
          isScrolled 
            ? "border-[hsl(268,0%,25%)]" 
            : "border-transparent hover:border-[hsl(268,0%,25%)]"
        )}>
          <div className="flex items-center md:gap-0">
            <Link href="/" className="flex items-center">
              <Logo isScrolled={isScrolled} />
            </Link>
            <nav className={cn(
              "hidden md:flex transition-all duration-500 delay-150 ease-out transform",
              isScrolled ? "-translate-x-[6.5rem]" : "translate-x-0 ml-10"
            )}>
              <NavigationMenu className="transition-all duration-500">
                <NavigationMenuList>
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      {item.children ? (
                        <>
                          <NavigationMenuTrigger 
                            onMouseEnter={() => handleMenuOpen(item.title)}
                            onMouseLeave={() => handleMenuClose(item.title)}
                            className="nav-link-hover"
                          >
                            {item.title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent 
                            onMouseEnter={() => handleMenuOpen(item.title)}
                            onMouseLeave={() => handleMenuClose(item.title)}
                          >
                            <div className={cn(
                              "w-[900px] p-8 rounded-md shadow-lg border border-[hsl(268,0%,25%)] bg-[rgba(13,7,20,0.9)] dropdown-container",
                              getMenuAnimationClass(item.title)
                            )}>
                              <div className="dropdown-content">
                                <div className={cn(
                                  "grid gap-8",
                                  item.title === "Solutions" ? "grid-cols-4" : "grid-cols-3"
                                )}>
                                  {item.children.map((section, sectionIndex) => (
                                    <div key={sectionIndex} className={cn(
                                      "space-y-4",
                                      // If it's Solutions menu, span all columns for the section
                                      item.title === "Solutions" && "col-span-4"
                                    )}>
                                      {section.isSection && section.title && (
                                        <div className="border-b border-gray-700 pb-2">
                                          <h3 className={cn(
                                            "text-xs font-bold uppercase tracking-wider",
                                            section.highlight ?? false ? "text-white" : "text-gray-400"
                                          )}>
                                            {section.title}
                                          </h3>
                                        </div>
                                      )}
                                      <div className="space-y-3">
                                        <div className={cn(
                                          "grid gap-4",
                                          // If it's Solutions menu, show items in a grid
                                          item.title === "Solutions" && "grid-cols-4"
                                        )}>
                                          {section.items.map((child) => (
                                            <NavigationMenuLink key={child.title} asChild>
                                              <Link
                                                href={child.href}
                                                className={cn(
                                                  "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800/50 focus:bg-gray-800/50 group",
                                                  child.linkStyle && "text-purple-400 hover:text-purple-300"
                                                )}
                                              >
                                                <div className="flex items-start gap-3">
                                                  {child.icon && !child.podcastImage && (
                                                    <span className="text-lg mt-0.5 flex-shrink-0">{child.icon}</span>
                                                  )}
                                                  {child.podcastImage && (
                                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
                                                      <span className="text-white font-bold text-sm">
                                                        {child.title.split(' ')[0]}
                                                      </span>
                                                    </div>
                                                  )}
                                                  <div className="flex-1 min-w-0">
                                                    <div className="flex items-center gap-2 mb-1">
                                                      <div className={cn(
                                                        "font-medium leading-none",
                                                        child.linkStyle ? "text-purple-400" : "text-white"
                                                      )}>
                                                        {child.title}
                                                      </div>
                                                      {child.featured && (
                                                        <span className="px-2 py-1 text-xs font-bold bg-purple-600 text-white rounded uppercase">
                                                          Featured
                                                        </span>
                                                      )}
                                                    </div>
                                                    {child.description && (
                                                      <p className="text-sm leading-tight text-gray-400 line-clamp-2">
                                                        {child.description}
                                                      </p>
                                                    )}
                                                  </div>
                                                </div>
                                              </Link>
                                            </NavigationMenuLink>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </NavigationMenuContent>
                        </>
                      ) : (
                        <Link href={item.href} legacyBehavior passHref>
                          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "nav-link-hover")}>{item.title}</NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/signup">
              <Button className={cn(
                "border hover:text-black transition-all duration-300 ease-in-out transform",
                isScrolled 
                  ? "bg-[#C1FF72] text-black border-[#C1FF72] hover:bg-[#b1ef62] hover:scale-105" 
                  : "bg-[#CEFF6666] border-[#cfff66c5] hover:bg-[#C1FF72] hover:scale-105"
              )}>
                Sign Up Free
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
                  className="ml-1 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
            </Link>
          </div>
          <button 
            className="flex items-center md:hidden" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[4.5rem] bg-[#0d0714] z-50 md:hidden">
            <div className="p-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.title} className="border-b border-gray-800 pb-4">
                  {item.children ? (
                    <>
                      <div className="flex items-center justify-between text-white mb-2">
                        <span className="text-lg font-medium">{item.title}</span>
                        <ChevronRight className="h-5 w-5" />
                      </div>
                      <p className="text-sm text-gray-400">
                        {item.title === "Platform" && "Create high-converting landing pages"}
                        {item.title === "Solutions" && "Find the right solution for your needs"}
                        {item.title === "Templates" && "Start with pre-built templates"}
                        {item.title === "Resources" && "Learn and grow with our resources"}
                      </p>
                    </>
                  ) : (
                    <Link 
                      href={item.href}
                      className="text-lg font-medium text-white block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full justify-center text-white border-gray-700">
                  Log In
                </Button>
                <Button className="w-full justify-center bg-[#C1FF72] text-black hover:bg-[#b1ef62]">
                  Sign Up Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Blur overlay - Only show on desktop */}
      {!mobileMenuOpen && (
        <div className={cn(
          "fixed inset-0 bg-background/80 backdrop-blur-[6px] transition-all duration-300 hidden md:block",
          isNavHovered ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
        )} />
      )}
    </>
  )
}