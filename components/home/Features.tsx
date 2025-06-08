import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, LayoutGrid, LineChart, Maximize2, MousePointer, Smartphone } from "lucide-react"

const features = [
  {
    title: "Drag-and-Drop Builder",
    description: "Create landing pages without any coding knowledge using our intuitive drag-and-drop interface.",
    icon: MousePointer,
  },
  {
    title: "Responsive Design",
    description: "All landing pages automatically adapt to any screen size for optimal viewing on all devices.",
    icon: Smartphone,
  },
  {
    title: "Conversion-Focused Templates",
    description: "Choose from hundreds of professionally designed templates optimized for conversions.",
    icon: LayoutGrid,
  },
  {
    title: "A/B Testing",
    description: "Test different versions of your pages to see which one performs better and drives more conversions.",
    icon: Maximize2,
  },
  {
    title: "Advanced Analytics",
    description: "Track visitor behavior, conversion rates, and other key metrics to optimize your pages.",
    icon: LineChart,
  },
  {
    title: "Customization Options",
    description: "Personalize every aspect of your landing pages to match your brand and marketing goals.",
    icon: Brush,
  },
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Convert Visitors</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform provides all the tools you need to create high-converting landing pages that drive results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-transparent bg-[#64636c4d]">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
