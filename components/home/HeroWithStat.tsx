import Image from "next/image"

export default function HeroWithStat() {
  const companies = [
    { name: "soundcloud", className: "w-40 h-10" },
    { name: "harvard", className: "w-32 h-14" },
    { name: "chomps", className: "w-40 h-10" },
    { name: "ebay", className: "w-32 h-10" },
    { name: "vimeo", className: "w-36 h-10" },
    { name: "zapier", className: "w-36 h-10" },
    { name: "shopify", className: "w-40 h-10" },
  ]

  const stats = [
    {
      value: "466k+",
      label: "businesses served worldwide"
    },
    {
      value: "9.1m+",
      label: "leads collected per month"
    },
    {
      value: "5x",
      label: "higher conversion rates"
    }
  ]

  return (
    <section className="relative px-6 py-20 bg-white rounded-[2.5rem] overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 w-screen">
        <div className="flex company-scroll">
          <div className="flex items-center animate-scroll">
            {companies.concat(companies).map((company, index) => (
              <div 
                key={`company-${index}`}
                className={`flex-shrink-0 mx-8 ${company.className}`}
              >
                <Image
                  src={`/companies/${company.name}.svg`}
                  alt={company.name}
                  width={160}
                  height={40}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Proof is in the
              <br />
              <span className="text-purple-600">performance</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Leadpages empowers you to drive more leads, backed by actionable conversion data and proven results.
              With millions of clicks per day, we let our results do the talking.
            </p>
          </div>

          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
