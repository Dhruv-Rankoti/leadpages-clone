import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "Leadpages helped us double our email subscribers in just 3 months!",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
  },
  {
    id: 2,
    quote:
      "The templates are beautiful and converting better than our old pages.",
    author: "Michael Chen",
    role: "E-commerce Owner",
    company: "StyleMart",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
  },
  {
    id: 3,
    quote: "Best investment for our small business marketing strategy.",
    author: "Emily Rodriguez",
    role: "Small Business Owner",
    company: "Craft & Co",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Marketing Teams Everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about how our platform has helped
            them achieve their marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-[#64636c4d] border border-transparent">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <svg
                      width="45"
                      height="36"
                      className="text-primary/40"
                      viewBox="0 0 45 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4 36C9.4 36 6.2 34.6 3.8 31.8C1.4 28.8 0.2 25.2 0.2 21C0.2 17.2 1.2 13.6 3.2 10.2C5.4 6.6 8 3.6 11 1.2C14.2 -1.2 17.4 -2.4 20.6 -2.4C22.2 -2.4 23.4 -2 24.2 -1.2C25 -0.4 25.4 0.6 25.4 1.8C25.4 3 25 4 24.2 4.8C23.4 5.6 22.4 6 21.2 6C19.2 6 17 7 14.6 9C12.4 11 10.8 13.2 9.8 15.6C10.6 15.2 11.8 15 13.4 15C16.6 15 19.2 16 21.2 18C23.2 20 24.2 22.6 24.2 25.8C24.2 29 23.2 31.6 21.2 33.6C19.2 35.2 16.6 36 13.4 36ZM34.2 36C30.2 36 27 34.6 24.6 31.8C22.2 28.8 21 25.2 21 21C21 17.2 22 13.6 24 10.2C26.2 6.6 28.8 3.6 31.8 1.2C35 -1.2 38.2 -2.4 41.4 -2.4C43 -2.4 44.2 -2 45 -1.2C45.8 -0.4 46.2 0.6 46.2 1.8C46.2 3 45.8 4 45 4.8C44.2 5.6 43.2 6 42 6C40 6 37.8 7 35.4 9C33.2 11 31.6 13.2 30.6 15.6C31.4 15.2 32.6 15 34.2 15C37.4 15 40 16 42 18C44 20 45 22.6 45 25.8C45 29 44 31.6 42 33.6C40 35.2 37.4 36 34.2 36Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
