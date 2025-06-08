import Link from "next/link"
import Logo from "@/components/ui/Logo"
import Image from "next/image"

const footerLinks = {
  platform: {
    title: "PLATFORM",
    items: [
      { title: "Platform Overview", href: "/platform" },
      { title: "Landing Page Templates", href: "/templates" },
      { title: "Plans", href: "/plans" },
      { title: "Comparisons", href: "/comparisons" },
    ],
  },
  resources: {
    title: "RESOURCES",
    items: [
      { title: "Marketing Resources", href: "/resources" },
      { title: "Blog", href: "/blog" },
      { title: "Landing Pages Guide", href: "/guide" },
      { title: "Lead Generation Guide", href: "/generation" },
      { title: "Optimization Guide", href: "/optimization" },
    ],
  },
  community: {
    title: "COMMUNITY & SUPPORT",
    items: [
      { title: "Help Center", href: "/help" },
      { title: "Customer Stories", href: "/stories" },
      { title: "Affiliate Program", href: "/affiliate" },
      { title: "System Status", href: "/status" },
    ],
  },
  company: {
    title: "COMPANY",
    items: [
      { title: "About", href: "/about" },
      { title: "Press", href: "/press" },
      { title: "Careers", href: "/careers" },
      { title: "Contact Us", href: "/contact" },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          <div>
            <Logo />
            <p className="mt-6 text-[13px] text-gray-600 font-medium">
              212 3rd Ave N, Ste 475
              <br />
              Minneapolis MN, 55401-1478
            </p>
          </div>

          {/* Navigation Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-[11px] font-bold text-[#1a1a1a] uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] text-gray-500 hover:text-gray-900 font-medium"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-between w-full">
              <p className="text-[13px] text-gray-600 font-medium">
                © {new Date().getFullYear()} Leadpages (US), Inc. All Rights
                Reserved. |{" "}
                <Link
                  href="/privacy"
                  className="hover:text-gray-900"
                >
                  Privacy Policy
                </Link>
                {" | "}
                <Link
                  href="/legal"
                  className="hover:text-gray-900"
                >
                  Legal
                </Link>
              </p>
            </div>
            <div className="w-full h-px bg-gray-200" />
            <div className="flex flex-col items-center gap-4">
              <p className="text-[13px] text-gray-500 font-medium">
                Leadpages is part of the{" "}
                <span className="underline">Redbrick</span> family of brands.
              </p>
              <div className="flex items-center justify-center gap-12">
                {["animoto", "delivra", "duplex", "leadpages", "shift"].map(
                  (brand) => (
                    <div key={brand} className="h-8 ">
                      <Image
                        src={`/brands/${brand}.svg`}
                        alt={brand}
                        width={100}
                        height={32}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
